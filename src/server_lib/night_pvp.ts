
import { tickTime, NIGHT_BEGIN, NIGHT_END, DAY } from "@mcbe/timer/ticktime";

import { getDayTime } from "@mcbe/command";;
import { command } from "@mcbe/system_server";

export async function enableNightPvP():Promise<void>
{
    let daytime = await getDayTime();

    let pvp = NIGHT_BEGIN <= daytime && daytime < NIGHT_END;
    command('gamerule pvp '+pvp);
    for (;;)
    {
        if (pvp)
        {
            await tickTime.promise(NIGHT_END - daytime);
            pvp = false;
        }
        else
        {
            if (daytime >= NIGHT_END) daytime -= DAY;
            await tickTime.promise(NIGHT_BEGIN - daytime);
            pvp = true;
        }
        command('gamerule pvp '+pvp);
        daytime = await getDayTime();
    }
}
