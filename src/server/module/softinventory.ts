import { ItemStack, ItemList } from "@mcbe/item";
import Identifier from "@mcbe/identifier";
import ID from "@mcbe/identifier/id";
import { execute } from "@mcbe/command";
import { callAtNextTick } from "@mcbe/nexttick";
import { AcquationMethod } from "@mcbe/ruakr_const";
import { NoComponentError } from "@mcbe/component";
import LOG from "@mcbe/ruakr_log";

import { User, UserExtra, Container } from "@bdsx/ruakr_user";
import { banlist } from "@bdsx/ruakr_ban";
import { Block } from "@bdsx/block";

export function getItemMax(item:Identifier):number
{
    if (item === ID.egg) return 16;
    return 64;
}

export class SoftInventory implements UserExtra
{
    public readonly inventory:ItemList = new ItemList;
    private invCheckRequested = false;
    protected inventoryChecked = false;
    private invraw:ItemStack[] = [];

    public static readonly MAIN_SIZE = 9 * 3;
    public static readonly HOTBAR_SIZE = 9;
    
    public static readonly BAN_BLOCK = new Set<Identifier>([
        ID.spawn_egg,
        ID.mob_spawner,
        ID.bedrock,
        ID.end_portal_frame,
        ID.end_portal,
        ID.gateway,
        ID.command_block,
    ]);

    public chestplate:Identifier = ID.undefined;

    constructor(public readonly user:User)
    {
        this.inventory.setAllRaw(this._updateItemRaw());
    }

    fullTest(id:Identifier):boolean
    {
        let haveCount = 0;
        let haveSlot = 0;
        let maxStack = getItemMax(id);

        for (const item of this.mainPlusHotbar())
        {
            if (item.id === ID.undefined) return false;
            if (item.id === id)
            {
                haveCount += item.count;
                haveSlot ++;
            }
        }
        return haveCount === haveSlot * maxStack;
    }
    
    requestCheckInventory():void
    {
        if (this.invCheckRequested) return;
        this.invCheckRequested = true;
        callAtNextTick(()=>{
            this._updateInventory();
        });
    }

    onUpdateRealEnd():void
    {
        this.inventoryChecked = false;
    }

    onUpdateSlow():void
    {
        this._updateInventory();
    }

    *main():IterableIterator<ItemStack>
    {
        for (let i=0;i<SoftInventory.MAIN_SIZE;i++)
        {
            yield this.invraw[i];
        }
    }

    *hotbar():IterableIterator<ItemStack>
    {
        for (let i=SoftInventory.MAIN_SIZE;i<SoftInventory.MAIN_SIZE + SoftInventory.HOTBAR_SIZE;i++)
        {
            yield this.invraw[i];
        }
    }

    *mainPlusHotbar():IterableIterator<ItemStack>
    {
        for (let i=0;i<SoftInventory.MAIN_SIZE + SoftInventory.HOTBAR_SIZE;i++)
        {
            yield this.invraw[i];
        }
    }

    onPlaceBefore(block:Block):boolean
    {
        // 사용 불가능 불럭 확인
        if (!this.user.isAdminMode() && (SoftInventory.BAN_BLOCK.has(block.id)))
        {
            execute(this.user.name).setblock(block.pos, ID.air);
            callAtNextTick(()=>{
                banlist.ban(this.user, {action: LOG.Action.BlockedItem, block, msg:`place`});
            });
            return true;
        }

        this.requestCheckInventory();
        return false;
    }
    
    onInterectEnd(block:Block):void
    {
        this.invCheckRequested = false;
        this._updateInventory();
    }
    
    getInventoryText():string
    {
        var text = `--- inventory(${this.user.name}) ---\n`;
        for (const item of this.inventory.values())
        {
            text += `${item.id}: ${item.count}\n`;
        }
        const ender = Container.getEnder(this.user.name);
        ender.setFlags(Container.CHEST_ENDER);
        text += ender.getInventoryText();
        return text;
    }

    onAcquireItem(method:AcquationMethod, id:Identifier, count:number, secondary_entity?:IEntity):void
    {
        const max = getItemMax(id);
        for (const item of this.mainPlusHotbar())
        {
            if (item.id !== id) continue;
            if (item.count >= max) continue;

            const space = max - item.count;
            if (space >= count)
            {
                item.count += count;
                return;
            }
            else
            {
                count -= space;
                item.count = max;
            }
        }
    }

    onDropItem(id:Identifier, count:number)
    {
        for (const item of this.invraw)
        {
            if (item.id !== id) continue;
        
            if (item.count === 0)
            {
                LOG.error({user: this.user, action: LOG.Action.Assertion, msg: "zero count item: " + item.id});
                item.id = ID.undefined;
                continue;
            }

            if (item.count > count)
            {
                item.count -= count;
                return;
            }
            else
            {
                count -= item.count;
                item.count = 0;
                item.id = ID.undefined;
                if (count === 0) return;
            }
        }
    }

    protected _updateInventory():void
    {
        if (this.inventoryChecked) return;
        this.inventory.setAllRaw(this._updateItemRaw());
    }

    private _updateItemRaw():ItemStack[]
    {
        this.inventoryChecked = true;

        const inventory = this.user.component.InventoryContainer.data;
        const hotbar = this.user.component.HotbarContainer.data;
        const armors = this.user.component.ArmorContainer.data;
        const hand = this.user.component.HandContainer.data;
            
        // const helmet = armors[0];
        this.chestplate = Identifier.get(armors[1].item);
        // const leggings = armors[2];
        // const boots = armors[3];

        return this.invraw = inventory.concat(hotbar, armors, [hand[1]])
        .map<ItemStack>(v=>({
            id: Identifier.get(v.item),
            count: v.count
        }));
    }

    protected _getInventoryDiff(added:ItemStack[], removed:ItemStack[])
    {
        this.invCheckRequested = false;
        
        try
        {
            const items = this._updateItemRaw();
            this.inventory.update(items, added, removed);
        }
        catch (err)
        {
            if (err instanceof NoComponentError) return;
            throw err;
        }
    }
    
}
