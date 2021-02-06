import { WriteLock } from "./module/region";
import { Scoreboard } from "@mcbe/scoreboard";
import { Vector3, Box } from "krgeometry";
import { command } from "@mcbe/system_server";
import { UserExtra, User, AttackEvent } from "@bdsx/ruakr_user";

const board = new Scoreboard('$spawn');

export const SPAWN_SIZE = 50;
export let SPAWN_POINT:Vector3;
export const SPAWN_GUARD_AREA = 20;

export let spawnLock:WriteLock;

function setSpawn(pos:Vector3):void
{
    SPAWN_POINT = pos;
    spawnLock = new WriteLock('스폰 지점', new Box(
        pos.x - SPAWN_SIZE, -Infinity, pos.z - SPAWN_SIZE, 
        pos.x + SPAWN_SIZE, Infinity, pos.z + SPAWN_SIZE), pos.y - 3);
}

export function setWorldSpawn(pos:Vector3):void
{
    pos = pos.floor();
    board.set('x', pos.x);
    board.set('y', pos.y);
    board.set('z', pos.z);

    spawnLock.remove();
    setSpawn(pos);
    
    command(`setworldspawn ${pos.x} ${pos.y} ${pos.z}`);
}

export class SpawnPointExtra implements UserExtra
{
    constructor(public readonly user:User)
    {
    }

    onAttack(ev:AttackEvent)
    {
        const other = ev.targetUser;
        if (other)
        {
            if (new Box(
                SPAWN_POINT.x - SPAWN_GUARD_AREA, spawnLock.cube.y1, SPAWN_POINT.z - SPAWN_GUARD_AREA,
                SPAWN_POINT.x + SPAWN_GUARD_AREA, Infinity, SPAWN_POINT.z + SPAWN_GUARD_AREA
                ).contains(other.position))
            {
                this.user.kill();
            }
        }
    }
    
    static onInstall():void
    {
        Promise.all([board.get('x'), board.get('y'), board.get('z')]).then(([x, y, z])=>{
            if (x === undefined)
            {
                setSpawn(new Vector3(12, 64, 4));
            }
            else
            {
                setSpawn(new Vector3(x, y!, z!));
            }
        });
    }
}
