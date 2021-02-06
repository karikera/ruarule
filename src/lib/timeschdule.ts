
import { realTime, TIME_PER_SECONDS } from "@mcbe/timer/realtime";
import { tellrawAll } from "@mcbe/system_server";
import { toTimeText } from "./korean";

export function setSchedule(hours:number, min:number, name:string, useAlarm:boolean, cb:()=>void):void
{
    const date = new Date;
    const now = +date;

    date.setHours(hours, min, 0, 0);
    let next = +date;
    if (next < now) next += 24 * 60 * 60 * 1000;

    function alarm(remaining:number):void
    {
        const target = next - remaining - realTime.now;
        if (target <= 0) return;
        setTimeout(()=>{
            tellrawAll(['§e'+toTimeText(remaining / TIME_PER_SECONDS)+' 후: '+name]);
        }, target);
    }

    function regist():void
    {
        if (useAlarm)
        {
            alarm(10*60*1000);
            alarm(5*60*1000);
            alarm(3*60*1000);
            alarm(2*60*1000);
            alarm(60*1000);
            alarm(30*1000);
            alarm(10*1000);
            alarm(5*1000);
            alarm(4*1000);
            alarm(3*1000);
            alarm(2*1000);
            alarm(1*1000);
        }
        setTimeout(()=>{
            cb();
            tellrawAll(['§e'+name+' 실행됨']);
            next += 24 * 60 * 60 * 1000;
            regist();
        }, next - realTime.now);
    }

    regist();
}
