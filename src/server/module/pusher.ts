import { User } from "@bdsx/ruakr_user";
import { Damper } from "../../lib/damper";
import { Vector3 } from "krgeometry";
import { Region } from "./region";
import { tp } from "@mcbe/command";
import LOG from "@mcbe/ruakr_log";
import { banlist } from "@bdsx/ruakr_ban";

function vectorFromDirY(angleY:number):Vector3
{
    return new Vector3(-Math.sin(angleY), 0, Math.cos(angleY));
}

function dirYFromVector(x:number, z:number):number
{
    return Math.atan2(z, -x);
}

export class Pusher
{
    private pushing:NodeJS.Timeout|null = null;
    private readonly tooFastDamper = new Damper(5000);

    constructor(public readonly user:User)
    {
    }

    getPushPosition(region:Region, bottomY:number, distance:number)
    {
        class Axis
        {
            public readonly dist:number;
            public readonly plus:boolean;

            constructor(
                public readonly dir:Vector3,
                public readonly pos:number,
                public readonly p1:number,
                public readonly p2:number,
            )
            {
                const center = (p1 + p2) / 2;
                this.plus = pos > center;
                this.dist = this.plus ? p2 - pos : pos - p1;
            }

            getPushTo():Vector3
            {
                let pushValue:number;
                if (this.plus)
                {
                    pushValue = Math.max(this.p2 - this.pos, 0) + distance;
                }
                else
                {
                    pushValue = Math.min(this.p1 - this.pos, 0) - distance;
                }
                return pos.add(this.dir.mul(pushValue));
            }
        }

        const pos = this.user.position;
        const axis = [
            new Axis(Vector3.X, pos.x, region.cube.x1, region.cube.x2),
            new Axis(Vector3.Z, pos.z, region.cube.z1, region.cube.z2),
        ];
        
        if (pos.y < bottomY)
        {
            axis.push(new Axis(Vector3.Y, pos.y, region.cube.y1, Infinity));
        }

        let min_dist = axis[0];
        for (let i=1;i<axis.length;i++)
        {
            const dist = axis[i];
            if (dist.dist < min_dist.dist)
            {
                min_dist = dist;
            }
        }
        return min_dist.getPushTo();
    }

    pushFromNow(region:Region, bottomY:number, distance:number):void
    {
        if (!this.pushing)
        {
            this.pushing = setTimeout(()=>{
                this.pushing = null;
            }, 300);
        }
        
        const to = this.getPushPosition(region, bottomY, distance);
        this.user.tp(to);
    }

    rotate180(pos:Vector3, displayMessage:string):boolean
    {
        if (this.pushing) return false;

        if (!this.tooFastDamper.use(700, 0))
        {
            this.tooFastDamper.reset();
            banlist.warning(this.user, 10, {action:LOG.Action.AggressiveEntering, msg:displayMessage});
            this.user.kill();
            this.user.tellraw('§c※주의※: §r계속 반복하면 추방될 수 있어요');
            return false;
        }
        
        const from = this.user.position;
        const dirY = dirYFromVector(from.x - pos.x, from.z - pos.z);
        tp(this.user.name, from, dirY * 180 / Math.PI);
        return true;
    }
    
    pushFrom(region:Region, bottomY:number, distance:number, displayMessage:string):boolean
    {
        if (this.pushing) return false;

        if (!this.tooFastDamper.use(700, 0))
        {
            this.tooFastDamper.reset();
            banlist.warning(this.user, 10, {action:LOG.Action.AggressiveEntering, msg:displayMessage});
            this.user.kill();
            this.user.tellraw('§c※주의※: §r계속 반복하면 추방될 수 있어요');
            return false;
        }
        
        this.user.info(displayMessage);
        this.pushFromNow(region, bottomY, distance);
        return true;
    }

}
