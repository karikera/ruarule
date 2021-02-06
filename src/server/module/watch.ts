import ID from "@mcbe/identifier/id";
import { tickTime, isNight } from "@mcbe/timer/ticktime";
import { getDayTime } from "@mcbe/command";

import { User, UserExtra } from "@bdsx/ruakr_user";
import Identifier from "@mcbe/identifier";

export class WatchComponent implements UserExtra
{
    private showed = false;

    constructor(public readonly user:User)
    {
    }

    onItemChange(now:Identifier, prev:Identifier):void
    {
        if (now === ID.clock)
        {
            this.show();
        }
        else if (prev === ID.clock)
        {
            this.hide();
        }
    }

    onDispose():void
    {
        this.hide();
    }

    show():void
    {
        if (this.showed) return;
        this.showed = true;

        (async()=>{

            for (;;)
            {
                if (!this.showed) return;
                const time = await getDayTime();
                const gamemin = Math.round(time / 1000 * 60);
                const min = (gamemin + 60*6) % (24*60);
                const night = isNight(time);
                this.user.actionbar(`${min>=12*60?'오후':'오전'} ${((min/60|0)+11)%12+1}시 ${min%60}분 (${night ? '밤' : '낮'})`);
                const nexttime = Math.ceil((gamemin + 1) / 60 * 1000);
                await tickTime.promise(Math.max(nexttime - time, 0));
            }

        })();
    }

    hide():void
    {
        if (!this.showed) return;
        this.showed = false;
        this.user.actionbar(`§0`);
    }
}
