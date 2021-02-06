import { JsonWatcher } from "../server_lib/jsonwatcher";

interface Settings
{
    zoneExpireTime:number;
    playerExpireTime:number;
    zoneGap:number;
    zoneYBellowRate:number;
    zoneYAboveRate:number;
    zoneNewSize:number;
    trafficLimit:number;
    trafficLimitPeriod:number;
    warningLimit:number;
    warningBan:number;
    banReducingInterval:number;
    welcomeMessage:string;
    admins:string[];
}

const defaultSettings:Settings = {
    zoneExpireTime: 96*60*60*1000,
    playerExpireTime: 14*24*60*60*1000,
    zoneGap: 30,
    zoneYBellowRate: 0.2,
    zoneYAboveRate: 1.8,
    zoneNewSize: 10,
    trafficLimit: 1000000,
    trafficLimitPeriod: 60*5,
    warningLimit: 50,
    warningBan: 100,
    banReducingInterval: 60000 * 20,
    welcomeMessage: "welcomeMessage",
    admins: [],
};

export const settings = new JsonWatcher<Settings>(process.argv[1]+"/settings.json", defaultSettings);
settings.onUpdate.on(data=>{
    let modified = false;
    for (const key in defaultSettings)
    {
        const defval = defaultSettings[key];
        if (!(key in data))
        {
            data[key] = defval;
            modified = true;
        }
        else if ((typeof defval) !== (typeof data[key]))
        {
            data[key] = defval;
            modified = true;
        }
    }
    if (modified)
    {
        console.log('settings updated');
        settings.save();
    }
});
