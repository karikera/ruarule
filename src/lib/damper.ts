import { realTime } from "@mcbe/timer/realtime";

export class Damper
{
    private current:number = 0;
    private time:number = realTime.now;

    constructor(public readonly max:number)
    {
    }

    get(delta?:number):number
    {
        if (this.current === 0) return 0;
        const passed = realTime.now - this.time;
        this.time = realTime.now;
        return this.current = Math.max(this.current - passed, -(delta || 0));
    }

    reset():void
    {
        this.current = 0;
        this.time = realTime.now;
    }

    pause():void
    {
        this.time = realTime.now;
    }

    reduce(value:number):void
    {
        if (this.current === 0) return;
        const passed = realTime.now - this.time;
        this.time = realTime.now;
        this.current = Math.max(this.current - passed - value, 0);
    }

    use(value:number, delta?:number):boolean
    {
        let remaining = this.max - this.get(delta);
        if (delta) remaining += delta;
        if (value > remaining) return false;
        this.current += value;
        return true;
    }

    toString():string
    {
        return '(' + Math.round(this.get(0)) + '/' + Math.round(this.max) + ')';
    }
}

