import { setHourTest } from "../lib/hourtest";
import LOG from "@mcbe/ruakr_log";

import { getLastConnection } from "./module/last_conn";
import { settings } from "./settings";
import { User } from "@bdsx/ruakr_user";


export function enableClearOld():void
{
    setHourTest(()=>{
        const playerExpireTime = settings.data.playerExpireTime;
        const now = Date.now();
        for (const storage of User.store.values())
        {
            const lastConn = now - getLastConnection(storage);
            if (lastConn >= playerExpireTime)
            {
                LOG.message_np(`player ${storage.name} is expired`);
                storage.dispose();
                // Container.cleanEnder(storage.name);
            }
        }
    });
}
