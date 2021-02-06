
import { User, UserExtra } from "@bdsx/ruakr_user";
import { scoreboard, Scores } from "@mcbe/command";
import { timepack } from "@mcbe/ruakr_util";
import { Storage } from "@mcbe/store";

export const VAR_LAST_CONN = '#last_conn';

export function getLastConnection(storage:Storage):number
{
    if (User.getByName(storage.name))
    {
        return timepack.unpack(timepack.now());
    }
    const now = storage.get(VAR_LAST_CONN);
    return timepack.unpack(now || 0);
}

export class LastConnection implements UserExtra
{
    constructor(public readonly user:User)
    {
        this.user.storage.set(VAR_LAST_CONN, timepack.now());
    }

    onDispose():void
    {
        this.user.storage.set(VAR_LAST_CONN, timepack.now());
    }
    
    static onInstall():void
    {
        scoreboard.objectives.add(VAR_LAST_CONN);
    }
}
