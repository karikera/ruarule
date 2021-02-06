import { CID } from "../customid";
import { SPAWN_POINT } from "../spawnpoint";
import { Store } from "@mcbe/store";
import { Vector3, Box } from "krgeometry";
import { testforblock, execute } from "@mcbe/command";
import { UserExtra, User } from "@bdsx/ruakr_user";
import { Region } from "./region";
import { Block } from "@bdsx/block";
import LOG from "@mcbe/ruakr_log";
import { BlockListener } from "@bdsx/ruakr_user/blockevent";


const store = new Store('portal');
const VAR_PORTAL_TYPE = '#type';

const portals = new Map<string, PortalBlock>();

class PortalBlock extends Region
{
    private postext:string;
    private pos:Vector3;

    private readonly interval:NodeJS.Timeout = setInterval(()=>{
        // particle(particleIds.balloon_gas_particle, this.pos.add(Vector3.Y).add(Vector3.HALF));
    }, 1000);

    constructor(pos:Vector3)
    {
        super('상점 포탈 블럭', Box.fromVector(pos, pos).moveBy(Vector3.Y));

        this.pos = pos;
        this.postext = `${pos.x}_${pos.y}_${pos.z}`;
        portals.set(this.postext, this);
        store.create(this.postext).set(VAR_PORTAL_TYPE, 1);
    }

    remove():boolean
    {
        if (!super.remove()) return false;
        clearInterval(this.interval);
        store.dispose(this.postext);
        portals.delete(this.postext);
        return true;
    }

    move(pos:Vector3):void
    {
        const oldtext = this.postext;
        this.pos = pos;
        this.postext = `${pos.x}_${pos.y}_${pos.z}`;
        portals.delete(oldtext);
        portals.set(this.postext, this);
        store.create(oldtext).rename(this.postext);
        super.moveBy(pos.sub(this.pos));
    }

    onEnter(user:User):string|null
    {
        user.tp(SPAWN_POINT);
        return null;
    }
}

export const portalBlock:BlockListener&{store:Store} = {
    store,

    TARGET: [CID.spawnportal],
    onInstall():void
    {
        Store.onLoad.then(()=>{
            for (const portal of store.values())
            {
                const [x,y,z] = portal.name.split('_');
                new PortalBlock(new Vector3(+x, +y, +z));
            }
        });
    },
    onPlace(user, block)
    {
        testforblock(block.pos, CID.spawnportal).then(exists=>{
            if (!exists)
            {
                block.destroy();
                user.info('스폰 포탈은 오버월드에만 설치가 가능해요');
                return;
            }
            else
            {
                new PortalBlock(block.pos);
            }
        });
        return true;
    },
    onDestroy(user, block)
    {
        const postext = `${block.pos.x}_${block.pos.y}_${block.pos.z}`;
        const portal = portals.get(postext);
        if (!portal) LOG.error({user, action:LOG.Action.Assertion, block, msg: `spawnportal notfound (destroy, id=${postext})`});
        else portal.remove();
    },
    onPistonPush(user, block, pispos, oldpos)
    {
        const postext = `${oldpos.x}_${oldpos.y}_${oldpos.z}`;
        const portal = portals.get(postext);
        if (!portal) LOG.error({user, action:LOG.Action.Assertion, block, msg: `spawnportal notfound (piston, id=${postext})`});
        else portal.move(block.pos);
        return true;
    },
}