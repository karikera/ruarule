import { User, UserExtra, blockEvent } from "@bdsx/ruakr_user";
import { CID } from "../customid";
import { Vector3 } from "krgeometry";
import { createItem } from "@mcbe/system_server";
import { execute } from "@mcbe/command";
import ID from "@mcbe/identifier/id";

import { removeBlockDrop } from "@bdsx/restoreblock";
import { particleIds } from "../../lib/particle_id";
import { Block } from "@bdsx/block";

const tempBlocks = new Map<string, TempBlock>();

export class TempBlockComponent implements UserExtra
{
    private readonly lists:Vector3[] = [];
    private giving:NodeJS.Timeout|null = null;

    constructor(public readonly user:User)
    {
    }

    flush():void
    {
        if (this.giving)
        {
            clearTimeout(this.giving);
            this.giving = null;
        }
        if (this.lists.length === 0) return;
        if (this.user.disposed)
        {
            for (const pos of this.lists)
            {
                createItem(CID.tempblock, pos);
            }
        }
        else
        {
            this.user.giveItem(CID.tempblock, 0, this.lists.length);
        }
        this.lists.length = 0;
    }

    setReturn(pos:Vector3):void
    {
        this.lists.push(pos);
        if (this.giving) return;
        this.giving = setTimeout(()=>{
            this.giving = null;
            this.flush();
        }, TempBlock.GIVETIME);
    }

    onNew():void
    {
    }

    static onInstall():void
    {
        blockEvent.install({
            TARGET: [CID.tempblock],
            onPlace(user:User, block:Block):boolean
            {
                new TempBlock(user, block.pos);
                user.extra(TempBlockComponent).flush();
                return true;
            },
            onDestroy(user:User, block:Block):void
            {
                const postext = block.pos.x+' '+block.pos.y+' '+block.pos.z;
                const blockinst = tempBlocks.get(postext);
                if (blockinst) blockinst.onDestroy(user, block);
            },
            onPistonPush(user:User, block:Block, pistonPos:Vector3, oldPos:Vector3):boolean
            {
                const postext = oldPos.x+' '+oldPos.y+' '+oldPos.z;
                const blockinst = tempBlocks.get(postext);
                if (blockinst) blockinst.destroyAt(user, block.pos);
                return true;
            },
        });
    }
}

export class TempBlock
{
    public static readonly DURATION = 3000;
    public static readonly GIVETIME = 1000;

    private timeout:NodeJS.Timeout|null;
    private readonly postext:string;
    
    constructor(
        public readonly user:User, 
        public readonly pos:Vector3)
    {
        this.postext = pos.x+' '+pos.y+' '+pos.z;
        this.timeout = setTimeout(()=>{
            this.timeout = null;
            this.destroyAt(this.user, this.pos);
        }, TempBlock.DURATION);
        tempBlocks.set(this.postext, this);
    }

    destroyAt(user:User, pos:Vector3):void
    {
        if (this.timeout)
        {   
            clearTimeout(this.timeout);
            this.timeout = null;
        }
        tempBlocks.delete(this.postext);
        execute(user.name).replaceBlock(pos, CID.tempblock, ID.air).then(succeeded=>{
            if (!succeeded) return;
            user.extra(TempBlockComponent).setReturn(pos);
        })
    }
    
    onDestroy(user:User, block:Block):void
    {
        if (!this.timeout)
        {
            removeBlockDrop(block);
            return;
        }

        clearTimeout(this.timeout);
        this.timeout = null;

        tempBlocks.delete(this.postext);
        if (this.user.disposed) return;

        removeBlockDrop(block);
        execute(user.name).particle(particleIds.balloon_gas_particle, this.pos.add(Vector3.HALF));
        user.extra(TempBlockComponent).setReturn(this.pos);
    }
}
