import { Box, Vector3 } from "krgeometry";
import ID from "@mcbe/identifier/id";
import { execute, tp } from "@mcbe/command";
import Identifier from "@mcbe/identifier";
import { callAtNextTick } from "@mcbe/nexttick";
import { DimensionId } from "bdsx/common";

import { TickingArea, Block } from "@bdsx/block";
import { restoreBlock } from "@bdsx/restoreblock";
import LOG from "@mcbe/ruakr_log";

import { User, UserExtra, Container } from "@bdsx/ruakr_user";
import { Pusher } from "./pusher";
import { banlist } from "@bdsx/ruakr_ban";

const regions = new Set<Region>();

let regionListTemp = new Set<Region>();

export class RegionComponent implements UserExtra
{
    regions = new Set<Region>();

    constructor(public readonly user:User)
    {
    }
    
    onDeath():void
    {
        for (const old of this.regions)
        {
            old.onDeath(this.user);
        }
    }

    onUpdateReal():void
    {
        const oldregions = this.regions;
        if (this.user.dimension === DimensionId.Overworld)
        {
            const pos = this.user.position;
    
            let errorFrom:Region|null = null;
            let errorMsg:string|null = null;
    
            for (const region of Region.pick(pos))
            {
                if (!oldregions.delete(region))
                {
                    const error = region.onEnter(this.user);
                    if (error)
                    {
                        if (!this.user.isAdminMode())
                        {
                            errorFrom = region;
                            errorMsg = error;
                        }
                        continue;
                    }
                }
                regionListTemp.add(region);
            }
            
            for (const old of oldregions)
            {
                old.onLeave(this.user);
            }
    
            if (errorFrom)
            {
                errorFrom.pushUser(this.user, 2, errorMsg!);
            }
        }
        else
        {
            for (const old of oldregions)
            {
                old.onLeave(this.user);
            }
        }

        this.regions = regionListTemp;
        
        regionListTemp = oldregions;
        regionListTemp.clear();
    }

    onDispose():void
    {
        for (const old of this.regions)
        {
            old.onLeave(this.user);
        }
        this.regions.clear();
    }

    onDestroyStart(block:Block):void
    {
        if (this.user.dimension !== DimensionId.Overworld) return;

        const regions = [...Region.pick(block.pos)];
        if (!this.user.isAdminMode())
        {
            for (const region of regions)
            {
                if (!region.canWrite(this.user, block.pos))
                {
                    region.pushUser(this.user, 5, `${region.name} - 블럭 파괴 금지`);
                    return;
                }
            }
        }
        for (const region of regions)
        {
            region.onDestroyStart(this.user, block);
        }
    }

    onDestroy(block:Block):boolean
    {
        if (this.user.dimension !== DimensionId.Overworld) return false;

        const regions = [...Region.pick(block.pos)];
        if (!this.user.isAdminMode())
        {
            for (const region of regions)
            {
                if (!region.canWrite(this.user, block.pos))
                {
                    switch (block.id)
                    {
                    case ID.seagrass:
                    case ID.tallgrass:
                    case ID.kelp:
                    case ID.yellow_flower:
                    case ID.red_flower:
                    case ID.double_plant:
                        region.pushUser(this.user, 5, `${region.name} - 블럭 파괴 금지`);
                        return false;
                    default:
                        const res = restoreBlock(this.user, block);
                        callAtNextTick(()=>{
                            let score:number;
                            if (res)
                            {
                                if (Container.getFlags(block.id) === Container.INVALID)
                                {
                                    score = 8;
                                }
                                else
                                {
                                    score = 15;
                                }
                            }
                            else
                            {
                                score = 30;
                            }
                            banlist.warning(this.user, score, {
                                action: LOG.Action.AggressiveDestroy,
                                block,
                                item2: this.user.hand,
                                msg: `in ${region.name}`
                            });
                            this.user.kill();
                            this.user.tellraw('§c※주의※: §r계속 반복하면 추방될 수 있어요');
                        });
                        break;
                    }
                    return false;
                }
            }
        }
        for (const region of regions)
        {
            region.onDestroy(this.user, block);
        }
        return false;
    }
    
    onPlace(block:Block, hand:Identifier):boolean
    {
        if (this.user.dimension !== DimensionId.Overworld) return false;
        for (const region of Region.pick(block.pos))
        {
            if (!this.user.isAdminMode() && !region.canWrite(this.user, block.pos))
            {
                this.user.info(`${region.name} - 블럭 설치 금지`);
                block.destroy();
                return true;
            }
            else
            {
                if (region.onPlace(this.user, block, hand))
                {
                    return true;
                }
            }
        }
        return false;
    }
    
    onInterect(block:Block):boolean
    {
        if (this.user.dimension !== DimensionId.Overworld) return false;

        const hand = this.user.hand;
        if (hand === ID.bucket || hand === ID.flint_and_steel)
        {
            let tickingarea:TickingArea|null = null;
            const checkWater = (pos:Vector3)=>{
                for (const region of Region.pick(pos))
                {
                    if (!this.user.isAdminMode() && !region.canWrite(this.user, pos))
                    {
                        if (tickingarea === null)
                        {
                            tickingarea = this.user.getTickingArea();    
                        }
                        const upblock = tickingarea.getBlock(pos);
                        if (!upblock) break;
                        switch (upblock.id)
                        {
                        case ID.flowing_lava:
                        case ID.flowing_water:
                            if (hand === ID.bucket)
                            {
                                execute(this.user.name).setblock(pos, ID.air);
                                this.user.info(`${region.name} - 블럭 설치 금지`);
                                return true;
                            }
                            break;
                        case ID.fire:
                            if (hand === ID.flint_and_steel)
                            {
                                execute(this.user.name).setblock(pos, ID.air);
                                this.user.info(`${region.name} - 블럭 설치 금지`);
                                return true;
                            }
                            break;
                        }
                        break;
                    }
                }
                return false;
            };

            checkWater(block.pos.add(Vector3.Y)) || 
            checkWater(block.pos.sub(Vector3.Y)) ||
            checkWater(block.pos.add(Vector3.Z)) || 
            checkWater(block.pos.sub(Vector3.Z)) ||
            checkWater(block.pos.add(Vector3.X)) ||
            checkWater(block.pos.sub(Vector3.X));
        }

        for (const region of Region.pick(block.pos))
        {
            if (!this.user.isAdminMode() && !region.canInterect(this.user, block.pos))
            {
                const message = region.name + ' - 상호작용 금지';
                switch (hand)
                {
                case ID.flint_and_steel:
                    this.user.info(message);
                    this.user.kill();
                    break;
                case ID.bucket:
                    this.user.info(message);
                    this.user.kill();
                    break;
                default:
                    const ctype = Container.getFlags(block.id);
                    if (ctype !== Container.INVALID && ctype !== Container.CHEST_ENDER)
                    {
                        banlist.warning(this.user, 10, {action: LOG.Action.AggressiveInteract, block, msg: `in ${region.name}`});
                        this.user.kill();
                        this.user.tellraw('§c※주의※: §r계속 반복하면 추방될 수 있어요');
                    }
                    else
                    {
                        region.pushUser(this.user, 5, message);
                    }
                    break;
                }
                return true;
            }
            else
            {
                if (region.onInterect(this.user, block))
                {
                    return true;
                }
            }
        }
        return false;
    }
    
}

const emptyBox = new Box(0, 0, 0, 0, 0, 0);

export abstract class Region
{
    constructor(
        public readonly name:string, 
        public cube:Box = emptyBox,
        public bottomY:number = (cube.y1+cube.y2)/2)
    {
        regions.add(this);
    }

    contains(pos:VectorXYZ):boolean
    {
        return this.cube.contains(pos);
    }

    containsXZ(pos:VectorXYZ):boolean
    {
        return this.cube.containsXZ(pos);
    }

    moveBy(pos:Vector3):void
    {
        this.cube = this.cube.moveBy(pos);
        this.bottomY += pos.y;
    }

    remove():boolean
    {
        if (!regions.delete(this)) return false;
        return true;
    }

    onEnter(user:User):string|null
    {
        return null;
    }

    onLeave(user:User):void
    {
    }

    canWrite(user:User|null, pos:Vector3):boolean
    {
        return true;
    }
    
    canInterect(user:User|null, pos:Vector3):boolean
    {
        return true;
    }

    onPlace(user:User, block:Block, hand:Identifier):boolean
    {
        return false;
    }

    onInterect(user:User, block:Block):boolean
    {
        return false;
    }
    
    onDestroyStart(user:User, block:Block):void
    {
    }

    onDestroy(user:User, block:Block):void
    {
    }

    onDeath(user:User):void
    {
    }

    onPistonPush(user:User, block:Block, pistonPos:Vector3, oldpos:Vector3):boolean
    {
        return false;
    }

    rotate180(user:User, pos:Vector3, displayMessage:string):void
    {
        user.extra(Pusher).rotate180(pos, displayMessage);
    }

    pushUser(user:User, distance:number, displayMessage:string):void
    {
        user.extra(Pusher).pushFrom(this, this.bottomY, distance, displayMessage);
    }

    static * pick(pos:Vector3):IterableIterator<Region>
    {
        for (const r of regions)
        {
            if (r.contains(pos)) yield r;
        }
    }

}

export class WriteLock extends Region
{
    canWrite(user:User):boolean
    {
        return false;
    }
}

export class PlaceLock extends Region
{
    onPlace(user:User, block:Block):boolean
    {
        user.info(`${this.name} - 블럭 설치 금지`);
        block.destroy();
        return true;
    }
}

export class FilteredWriteLock extends Region
{
    constructor(name:string, cube:Box)
    {
        super(name, cube);
    }

    canWrite(user:User):boolean
    {
        return user.isAdminMode();
    }
}
