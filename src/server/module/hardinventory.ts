
import Identifier from "@mcbe/identifier";
import ID from "@mcbe/identifier/id";
import { callAtNextTick, NextTick } from "@mcbe/nexttick";
import { execute, clear } from "@mcbe/command";
import { Box, Vector3 } from "krgeometry";
import { ItemList, ItemStack } from "@mcbe/item";
import { pickOutOrCraft, PASS_TOOLCHECK } from "@mcbe/recipe/make";
import { sortForCraft } from "@mcbe/recipe/sort";

import { ArrayMap } from "../../lib/arraymap";

import { Entity, EntityType } from "@mcbe/entity";
import { Block } from "@bdsx/block";
import LOG from "@mcbe/ruakr_log";

import { User, UserExtra, Container } from "@bdsx/ruakr_user";
import { banlist } from "@bdsx/ruakr_ban";
import { SoftInventory } from "./softinventory";
import { UseMethod, AcquationMethod } from "@mcbe/ruakr_const";


export class HardInventory extends SoftInventory implements UserExtra
{
    public readonly inventoryRemoved:ItemList = new ItemList;

    private readonly itemUsing:[Identifier, number, (failed:number)=>number][] = [];
    private readonly ignoreFirstDrop = new ItemList();
    private skipIgnoreFirstDrop:NextTick|null = null;
    private container:Container|null = null;
    private containerErrorCount = 0;
    
    constructor(user:User)
    {
        super(user);
    }

    private _useItem(id:Identifier, count:number, callback?:(failed:number)=>number):void
    {
        if (!callback)
        {
            callback = failed=>{
                if (failed !== 0)
                {
                    callAtNextTick(()=>{
                        banlist.ban(this.user, {action:LOG.Action.OverItem, item:id, count, msg: `use`});
                    });
                }
                return failed;
            };
        }
        this.itemUsing.push([id, count, callback]);
        this.requestCheckInventory();
    }
    
    onTakeItem(id:Identifier, count:number):void
    {
        this._useItem(id, count);
    }

    onGiveItem(id:Identifier, count:number):void
    {
        this.inventory.add(id, count);
    }

    onUseItem(method:UseMethod, item:Identifier, count:number):void
    {
        if (!this.user.isAdminMode() && SoftInventory.BAN_BLOCK.has(item))
        {
            banlist.ban(this.user, {action:LOG.Action.BlockedItem, item, count, msg:'use: '+method});
            return;
        }

        switch (method)
        {
        case UseMethod.Intract:
            switch (item)
            {
            case ID.emptymap:
            case ID.map:
                this.inventory.add(ID.map, 1);
                this._useItem(ID.emptymap, 1);
                break;
            case ID.salmon:
            case ID.fish:
                this._useItem(item, 1);
                break;
            }
            break;
        case UseMethod.Throw:
            if (item === ID.ender_pearl)
            {
                // this.user.tp(null);
            }
            this._useItem(item, 1);
            break;
        case UseMethod.BlockPlace:
            break;
        case UseMethod.Place:
            this._useItem(item, 1);
            break;
        case UseMethod.FillBottle:
            break;
        case UseMethod.Eat:
            this._useItem(item, 1);
            break;
        case UseMethod.Consume:
            if (item === ID.potion)
            {
                this._useItem(item, 1);
                this.inventory.add(ID.glass_bottle, 1);
            }
            break;
        }
    }

    onDropItem(item:Identifier, count:number)
    {
        if (this.ignoreFirstDrop.has(item, 1))
        {
            this.ignoreFirstDrop.remove(item, 1);
            return;
        }
        super.onDropItem(item, count);
        
        const dropRemoving = new ArrayMap<Identifier, Entity>();
        const pos = this.user.component.Position.data;
        Entity.catchPre(new Box(pos.x-3, pos.y-3, pos.z-3, pos.x+3, pos.y+3, pos.z+3), ev=>{
            if (ev.entity.type !== EntityType.Item) return false;
            dropRemoving.push(ev.entity.id, ev.entity);
            return false;
        });

        this._useItem(item, count, failed=>{
            if (failed === 0) return 0;
            const entities = dropRemoving.get(item);
            if (!entities)
            {
                LOG.error({user:this.user, action:LOG.Action.OverItem, item, count:failed, msg:`dropping`});
                return failed;
            }
            for (const entity of entities)
            {
                entity.destroy();
            }
            banlist.warning(this.user, 20, {action:LOG.Action.OverItem, item, count:failed, msg:`dropping`});
            return 0;
        });
    }

    onAcquireItem(method:AcquationMethod, item:Identifier, count:number, secondary_entity?:IEntity):void
    {
        super.onAcquireItem(method, item, count, secondary_entity);

        if (this.fullTest(item))
        {
            this.ignoreFirstDrop.add(item, 1);
            if (this.skipIgnoreFirstDrop !== null)
            {
                this.skipIgnoreFirstDrop = callAtNextTick(()=>{
                    this.ignoreFirstDrop.clear();
                    this.skipIgnoreFirstDrop = null;
                });
            }
        }
        this.inventory.add(item, count);
        switch (method)
        {
        case 'picked_up':
            break;
        case 'filled':
            if (item === ID.potion)
            {
                this.inventory.remove(ID.glass_bottle, count);
            }
            else
            {
            }
            break;
        default:
            break;
        }
    }
    
    onInterect(block:Block):boolean
    {
        const flags = Container.getFlags(block.id);
        if (flags === Container.INVALID)
        {
            this.container = null;
            return false;
        }
        this.container = Container.peek(this.user.name, flags, block.pos);
        if (!this.container)
        {
            Container.destroy(this.user, flags, block.pos);
        }
        else
        {
            this.containerErrorCount = 0;
        }
        return false;
    }

    onInterectEnd():void
    {
        this.container = null;
    }

    onDeath():void
    {
        this.inventoryRemoved.clear();
    }
    
    private async _finalInventory(failedList:ItemList):Promise<boolean>
    {
        if (failedList.size() === 0) return true;

        // 데이터 0 지우기
        const proms:Promise<void>[] = [];
        for (const item of failedList.values())
        {
            const prom = clear(this.user.name, item.id, -1, item.count).then(removed=>{
                const failed = this.inventory.use(item.id, removed);
                item.count -= removed;
                if (failed !== 0)
                {
                    item.count += failed;
                }
                else
                {
                    if (item.count === 0)
                    {
                        failedList.reset(item.id);
                    }
                }
            });
            proms.push(prom);
        }
        await Promise.all(proms);
        return failedList.size() === 0;
    }

    protected _updateInventory():void
    {
        if (this.inventoryChecked) return;
        for (const place of this.user.placings.poll())
        {
            this._useItem(place.item, 1, failed=>{
                if (place.placeBlock)
                {
                    if (failed > 0)
                    {
                        execute(this.user.name).setblock(place.placeBlock.pos, ID.air);
                        return failed-1;
                    }
                    else
                    {
                        this.user.onPlaceBlockFinal(place.placeBlock, place.item);
                    }
                }
                return failed;
            });
        }

        const added:ItemStack[] = [];
        const removed:ItemStack[] = [];
        this._getInventoryDiff(added, removed);

        const interectingBlock = this.user.interectingBlock;
        const container = this.container;

        let oldinv:ItemList|null = null;
        let inventory:ItemList|null = null;
        
        const failedList = new ItemList;
        const cleanPickCallback = new ArrayMap<Identifier, [(failed:number)=>number,number]>();
    
        const getInventory = ()=>{
            if (inventory) return inventory;
            if (!container) return inventory = this.inventoryRemoved;
            
            inventory = new ItemList;
            container.getAll(inventory);
            oldinv = inventory.clone();
            inventory.addAll(this.inventoryRemoved);
            this.inventoryRemoved.clear();
            return inventory;
        };

        const cleanInventory = ()=>{
            if (inventory)
            {
                inventory.clean();
                if (container)
                {
                    container.updateAll(inventory);
                }
            }
        };
    
        const useItem = (id:Identifier, count:number)=>{
            if (SoftInventory.BAN_BLOCK.has(id) || id.name.endsWith('_spawn_egg'))
            {
                banlist.ban(this.user, {action:LOG.Action.BlockedItem, item:id, count});
                failedList.add(id, count);
                return count;
            }
            
            const inv = getInventory();
            
            let tool = interectingBlock && interectingBlock.id;
            if (tool === ID.lit_blast_furnace) tool = ID.blast_furnace;
            else if (tool === ID.lit_furnace) tool = ID.furnace;
            else if (tool === ID.lit_smoker) tool = ID.smoker;
            /// XXX: cannot check interecting tool
            const failed = pickOutOrCraft(inv, PASS_TOOLCHECK, id, count);
            if (failed === 0) return 0;
            if (container)
            {
                this.containerErrorCount++;
                const flags = container.getFlags();
                if (this.containerErrorCount >= 3 && flags !== Container.CHEST_ENDER)
                {
                    this.containerErrorCount = 0;
                    Container.destroy(this.user, flags, interectingBlock!.pos);
                }
            }
            let logargs:LOG.Arguments;
            if (container)
            {
                logargs = {user:this.user, action:LOG.Action.OverItem, pos:interectingBlock!.pos, item:id, count:failed, msg: `with ${container}`};
            }
            else
            {
                logargs = {user:this.user, action:LOG.Action.OverItem, item:id, item2:tool, count:failed, msg: `without container`};
            }
            if (this.user.isAdminMode())
            {
                LOG.message(logargs);
                return 0;
            }
            banlist.warning(this.user, 1, logargs);
    
            failedList.add(id, failed);
            return failed;
        };    

        if (removed.length !== 0)
        {
            const inv = getInventory();
            for (const item of removed)
            {
                inv.add(item.id, item.count);
            }
        }
        
        sortForCraft(added);
        for (const item of added)
        {
            useItem(item.id, item.count);
        }

        /// ---- remove using ----

        for (const [id, count, callback] of this.itemUsing)
        {
            const failed = useItem(id, count);
            if (failed === 0)
            {
                callback(0);
            }
            else
            {
                cleanPickCallback.push(id, [callback, failed]);
            }
        }
        this.itemUsing.length = 0;

        cleanInventory();
        
        // ---- diff with old ---
        if (container && oldinv)
        {
            const cadded:ItemStack[] = [];
            const cremoved:ItemStack[] = [];
            (<ItemList>oldinv).diff(inventory!, cadded, cremoved);
            for (const item of cadded)
            {
                LOG.verbose({user:this.user, action:LOG.Action.Get, item, pos: interectingBlock?.pos, msg: container.toString()});
            }
            for (const item of cremoved)
            {
                LOG.verbose({user:this.user, action:LOG.Action.Put, item, pos: interectingBlock?.pos, msg: container.toString()});
            }
        }

        /// ---- remove failed ----
        let willBan:LOG.Arguments|null = null;
        const diamond_block_count = failedList.getCount(ID.diamond_block);
        const diamond_count = failedList.getCount(ID.diamond);
        if (diamond_block_count >= 64) willBan = {user:this.user, item:ID.diamond_block, count:diamond_block_count, action:LOG.Action.OverItem, msg:'diamond block 64'};
        else if (diamond_count >= 64) willBan = {user:this.user, item:ID.diamond, count:diamond_count, action:LOG.Action.OverItem, msg:'diamond 64'};
        if (failedList.size() !== 0)
        {
            LOG.message({user:this.user, action:LOG.Action.OverItemKeeping, msg:this.getKeepingText()});
        }
    
        const creating:ItemStack[] = [];
        for (const {id, count} of failedList.values())
        {
            creating.push({id, count});
        }
        this._finalInventory(failedList).then(succeeded=>{
            if (succeeded)
            {
                for (const [id, cpcs] of cleanPickCallback)
                {
                    for (const [resolve, count] of cpcs)
                    {
                        resolve(0);
                    }
                }
            }
            else
            {
                for (const [id, cbcs] of cleanPickCallback)
                {
                    const items = failedList.get(id);
                    if (!items)
                    {
                        for (const [resolve, count] of cbcs)
                        {
                            resolve(0);
                        }
                    }
                    else
                    {
                        for (const [resolve, count] of cbcs)
                        {
                            if (items.count === 0)
                            {
                                resolve(0);
                            }
                            else
                            {
                                const failed = Math.min(items.count, count);
                                items.count = resolve(failed);
                            }
                        }
                        if (items.count === 0)
                        {
                            failedList.reset(id);
                        }
                    }
                }
                if (failedList.size() === 0) return;
                const item:ItemStack = failedList.values().next().value;
                willBan = {user:this.user, item, action:LOG.Action.OverItem, msg:'remove failed'};
            }
            if(willBan) banlist.ban(this.user, willBan);
        }).catch(console.error);
    }

    onUpdateSlow():void
    {
        this._updateInventory();
    }

    onUpdateReal():void
    {
        if (!this.user.placings.empty())
        {
            this.inventoryChecked = false;
            this._updateInventory();
        }
    }

    getKeepingText():string
    {
        if (this.inventoryRemoved.size() === 0)
        {
            return `no keep`;
        }
        else
        {
            let out = '';
            for (const item of this.inventoryRemoved.values())
            {
                out += `keep ${item.id}(${item.count})\n`;
            }
            return out;
        }
    }

}