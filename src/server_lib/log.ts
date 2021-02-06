'use strict';

import { ipfilter } from "bdsx";
import { system } from "@mcbe/system_server";

function timeoutToNextDay(now:Date, cb:()=>void):void
{
    const dayms = now.getHours() * 60 * 60 * 1000 
                + now.getMinutes() * 60* 1000 
                + now.getSeconds() * 1000;
        
    const remain_ms = 24 * 60 * 60 * 1000 - dayms + 1000;
    if (remain_ms <= 0)
    {
        cb();
    }
    else
    {
        setTimeout(cb, remain_ms);
    }
}

export function updateTrafficLogFileName():void
{
    const now = new Date();
    ipfilter.logTraffic(`${process.argv[1]}/traffic_${now.getFullYear()}_${now.getMonth()+1}_${now.getDate()}.log`);
    timeoutToNextDay(now, updateTrafficLogFileName);
}
