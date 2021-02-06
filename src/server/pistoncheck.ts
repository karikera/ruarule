import { Vector3 } from "krgeometry";
import ID from "@mcbe/identifier/id";
import { tellrawAll } from "@mcbe/system_server";
import { execute } from "@mcbe/command";

import { User } from "@bdsx/ruakr_user";

let pistonTime = 0;

interface PistonWeight
{
    position:Vector3;
    time:number;
}
const pistons:PistonWeight[] = [];

const PISTON_LIMIT = 80;

export function updatePistonCheck():void
{
    if (pistonTime >= PISTON_LIMIT)
    {
        if (pistons.length > 0)
        {
            let slowestIdx = 0;
            let slowest = pistons[0];
            for (let i=1;i<pistons.length;i++)
            {
                const piston = pistons[i];
                if (piston.time > slowest.time)
                {
                    slowest = piston;
                    slowestIdx = i;
                }
            }

            const last = pistons.pop();
            if (last !== slowest)
            {
                pistons[slowestIdx] = last!;
            }

            const {user} = User.getNearst(slowest.position);
            if (user)
            {
                execute(user.name).setblock(slowest.position, ID.air, 0, 'destroy');
                tellrawAll([`§e부하가 너무 커 ${user.name}님 근처의 피스톤을 부쉈어요`]);
            }
        }
    }
    for (let i=0;i<pistons.length;)
    {
        const p = pistons[i];
        p.time *= 0.95;
        if (p.time < 0.1)
        {
            const last = pistons.pop();
            if (last !== p)
            {
                pistons[i] = last!;
            }
        }
        else
        {
            i++;
        }
    }
    pistonTime = 0;
}

export function addPistonTime(position:Vector3, time:number):void
{
    pistonTime += time;
    for (const piston of pistons)
    {
        if (!piston.position.equals(position)) continue;
        piston.time += time;
        return;
    }
    pistons.push({
        position,
        time
    });
}
