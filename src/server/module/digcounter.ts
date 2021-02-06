import { User, UserExtra } from "@bdsx/ruakr_user";
import ID from "@mcbe/identifier/id";
import { Box, Vector3 } from "krgeometry";
import { Storage } from "@mcbe/store";
import Identifier from "@mcbe/identifier";
import { Entity } from "@mcbe/entity";
import { callAtNextTick } from "@mcbe/nexttick";
import { Block } from "@bdsx/block";
import LOG from "@mcbe/ruakr_log";
import { banlist } from "@bdsx/ruakr_ban";

const VAR_DIG = '#dig';
const VAR_GOLD = '#dig_gold';
const VAR_DIAMOND = '#dig_diamond';
const VAR_EMERALD = '#dig_emerald';

const DROPMAP = new Map<Identifier, [Identifier, number]>([
    [ID.diamond_ore, [ID.diamond, 4]],
    [ID.quartz_ore, [ID.quartz, 4]],
    [ID.emerald_ore, [ID.emerald, 4]],
    [ID.lapis_ore, [ID.dye, 32]],
    [ID.redstone_ore, [ID.redstone, 8]],
    [ID.gravel, [ID.flint, 1]],
    [ID.wheat, [ID.wheat, 4]],
    [ID.beetroot, [ID.beetroot, 4]],
    [ID.potatoes, [ID.potato, 10]],
    [ID.nether_wart, [ID.nether_wart, 7]],
    [ID.melon_block, [ID.melon, 10]],
    [ID.sealantern, [ID.prismarine_crystals, 6]],
    [ID.glowstone, [ID.glowstone_dust, 7]],
    [ID.carrot, [ID.carrot, 7]],
]);

export function getDigCounterString():string
{
    const infos:{
        storage:Storage,
        dig?:number, 
        gold?:number, 
        diamond?:number, 
        emerald?:number, 
        diamond_rate?:number, 
        gold_rate?:number, 
        emerald_rate?:number
    }[] = [];

    for (const storage of User.store.values())
    {
        const info = {
            storage,
            dig:storage.get(VAR_DIG),
            gold:storage.get(VAR_GOLD),
            diamond:storage.get(VAR_DIAMOND),
            emerald:storage.get(VAR_EMERALD),
        };
        if (info.gold !== undefined || info.diamond !== undefined || info.emerald !== undefined)
        {
            infos.push(info);
        }
    }
    for (const info of infos)
    {
        const dig = info.dig!;
        info.diamond_rate = dig / (info.diamond || 0);
        info.gold_rate = dig / (info.gold || 0);
        info.emerald_rate = dig / (info.emerald || 0);
    }
    infos.sort((a,b)=>b.diamond_rate! - a.diamond_rate!);
    let out = 'DPD report\n';
    for (const info of infos)
    {
        const name = info.storage.name;
        let msg = `${name}: `;

        if (isFinite(info.diamond_rate!)) msg += `D${info.diamond_rate!.toFixed(1)}(${info.diamond})`;
        if (isFinite(info.gold_rate!)) msg += `G${info.gold_rate!.toFixed(1)}(${info.gold})`;
        if (isFinite(info.emerald!)) msg += `E${info.emerald_rate!.toFixed(1)}(${info.emerald})`;
        out += `${msg} ${info.dig!}\n`;
    }
    return out;
}

export class DigCounter implements UserExtra
{
    constructor(public readonly user:User)
    {
    }

    onPlace(block:Block):boolean
    {
        if (block.pos.y >= 35) return false;
        if (block.id === ID.diamond_ore)
        {
            this.user.storage.remove(VAR_DIAMOND, 1);
        }
        else if(block.id === ID.gold_ore)
        {
            this.user.storage.remove(VAR_GOLD, 1);
        }
        else if(block.id === ID.emerald_ore)
        {
            this.user.storage.remove(VAR_EMERALD, 1);
        }
        return false;
    }

    onDestroy(block:Block):boolean
    {
        const dropcheck = DROPMAP.get(block.id);

        let counter = 0;
        const entities:Entity[] = [];
        let needToRemove = false;
        
        if (dropcheck)
        {
            Entity.catchPost(new Box(block.pos.x, block.pos.y, block.pos.z, block.pos.x, block.pos.y, block.pos.z), ev=>{
                const entity = ev.entity;
                const [dropped, limit] = dropcheck;
                if (entity.id === dropped)
                {
                    counter++;
                    if (counter > limit)
                    {
                        for (const previous of entities)
                        {
                            previous.destroy();
                        }
                        entities.length = 0;
                        if (!needToRemove)
                        {
                            needToRemove = true;
                            callAtNextTick(()=>{
                                banlist.ban(this.user, {action:LOG.Action.OverMine, block, item2:dropped, msg: `drop count: ${dropped} ${counter} > ${limit}`});
                            });
                        }
                    }
                    
                    if (!needToRemove)
                    {
                        entities.push(entity);
                    }
                }
                else if (entity.id === block.id)
                {
                }
                else
                {
                    return;
                }
                
                if (needToRemove)
                {
                    ev.removeEntity = true;
                }
            });
            return false;
        }

        if (block.pos.y >= 35) return false;

        const dig = this.user.storage.add(VAR_DIG, 1);

        switch (block.id)
        {
        case ID.diamond_ore: 
            const diamond = this.user.storage.add(VAR_DIAMOND, 1);
            if (dig >= diamond * 50) break;
            banlist.warning(this.user, 5, {action:LOG.Action.TooMany, block});
            if (diamond >= 15) banlist.ban(this.user, {action:LOG.Action.TooMany, block});
            needToRemove = true;
            break;
        case ID.gold_ore:
            const gold = this.user.storage.add(VAR_GOLD, 1);
            if (dig >= gold * 10) break;
            banlist.warning(this.user, 3, {action:LOG.Action.TooMany, pos:block.pos});
            if (gold >= 50) banlist.ban(this.user, {action:LOG.Action.TooMany, block});
            needToRemove = true;
            break;
        case ID.emerald_ore:
            const emerald = this.user.storage.add(VAR_EMERALD, 1);
            break;
        }
        return false;
    }
}