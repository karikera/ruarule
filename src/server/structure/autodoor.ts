import { Region } from "../module/region";
import { Vector3, Box } from "krgeometry";
import { fill } from "@mcbe/command";
import ID from "@mcbe/identifier/id";
import { User } from "@bdsx/ruakr_user";


export class AutoDoor extends Region
{
    private opening = false;
    private openlevel = 0;
    private interval:NodeJS.Timeout|null = null;
    private userCount:number = 0;

    constructor(
        private readonly pos:Vector3, 
        private readonly dir:Vector3,
        private readonly size:number,
        private readonly height:number)
    {
        super('자동문', Box.align(pos, pos.add(dir.mul(size*2))).moveBy(Vector3.HALF).expand(1.5), pos.y);

        this.openlevel = size;
        let p = pos;
        const n = size*2;
        for (let i=0;i<n;i++)
        {
            fill(p, p.add(new Vector3(0, height-1, 0)), ID.glass);
            p = p.add(dir);
        }
    }

    setOpen(open:boolean):void
    {
        if (this.opening === open) return;
        this.opening = open;
        if (!this.interval)
        {
            this.interval = setInterval(()=>this.update(), 200);
        }
    }

    onEnter(user:User):string|null
    {
        if (this.userCount === 0) this.setOpen(true);
        this.userCount ++;
        return null;
    }
    
    onLeave(user:User):void
    {
        this.userCount --;
        if (this.userCount === 0) this.setOpen(false);
    }

    update():void
    {
        if (this.opening)
        {
            if (this.openlevel === 0)
            {
                clearInterval(this.interval!);
                this.interval = null;
                return;
            }
            this.openlevel--;
            const p1 = this.pos.add(this.dir.mul(this.openlevel));
            const p2 = this.pos.add(this.dir.mul(this.size*2-this.openlevel-1));
            fill(p1, p1.add(new Vector3(0, this.height-1, 0)), ID.air);
            fill(p2, p2.add(new Vector3(0, this.height-1, 0)), ID.air);
        }
        else
        {
            if (this.openlevel === this.size)
            {
                clearInterval(this.interval!);
                this.interval = null;
                return;
            }
            const p1 = this.pos.add(this.dir.mul(this.openlevel));
            const p2 = this.pos.add(this.dir.mul(this.size*2-this.openlevel-1));
            fill(p1, p1.add(new Vector3(0, this.height-1, 0)), ID.glass);
            fill(p2, p2.add(new Vector3(0, this.height-1, 0)), ID.glass);
            this.openlevel++;
        }
    }
}
