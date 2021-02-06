
import { tellrawAll, command } from "@mcbe/system_server";
import { tickTime, TICK_PER_SECONDS, NIGHT_BEGIN, DAY } from "@mcbe/timer/ticktime";
import { getDayTime } from "@mcbe/command";
import { Store, Storage } from "@mcbe/store";
import { TIME_PER_SECONDS, realTime } from "@mcbe/timer/realtime";
import events from "@mcbe/event_server";

import { Block } from "@bdsx/block";
import { restoreBlock } from "@bdsx/restoreblock";

import { Region, FilteredWriteLock } from "./module/region";
import { Box, Vector3 } from "krgeometry";
import { tradeCenter, priceRound, DIAMOND_PRICE, priceToString } from "./structure/tradecenter";
import { toTimeText } from "../lib/korean";
import { MoneyPrizeBlock, PrizeBlock } from "./prizeblock";
import { CID } from "./customid";
import { Averager } from "../lib/averager";
import { User } from "@bdsx/ruakr_user";

const tickTimeAvg = new Averager(TICK_PER_SECONDS);
let _now = Date.now();

events.update.on(()=>{
    const now = Date.now()
    tickTimeAvg.put(now - _now);
    _now = now;
});


const VAR_WIN_COUNT = '#pvp_win';
const VAR_LAST_WIN = '#pvp_last_win';
export const pvpstore = new Store('pvp');
let pvp_main:Storage;

Store.onLoad.then(()=>{
    pvp_main = pvpstore.create('main');
});

enum PVPZoneState
{
    Closed,
    Ready,
    Started,
}

class FilteredNoPushWriteLock extends Region
{
    constructor(name:string, cube:Box)
    {
        super(name, cube);
    }

    onPlace(user:User, block:Block):boolean
    {
        if (user.isAdminMode()) return false;
        block.destroy();
        return true;
    }

    onDestroy(user:User, block:Block):void
    {
        if (!PrizeBlock.contains(block.pos))
        {
            restoreBlock(user, block);
        }
    }
}

class SpawnRegion extends FilteredNoPushWriteLock
{
    private readonly internalHoal = new Box(-240, 58, -903, -204, 62, -861);
    constructor()
    {
        super(
            '스폰 지반', 
            new Box(-283, 0, -906, -157, 62, -796));
    }

    onPlace(user:User, block:Block):boolean
    {
        if (this.internalHoal.contains(block.pos)) return false;
        return super.onPlace(user, block);
    }

    onDestroy(user:User, block:Block):void
    {
        if (this.internalHoal.contains(block.pos)) return;
        super.onDestroy(user, block);
    }

    onEnter(user:User):null
    {
        if (this.internalHoal.contains(user.position)) return null;
        user.tp(new Vector3(user.position.x, this.cube.y2+1, user.position.z));
        return null;
    }
}

class PVPZone
{
    private readonly joined:Set<User> = new Set<User>();

    private state = PVPZoneState.Closed;
    private prizeMoney = 0;
    private prizeGold = 0;
    // private prizeDiamond = 0;
    private second:User|null = null;
    private last:User|null = null;
    private current:PVPRegion|null = null;
    private pvpIndex = 0;

    constructor()
    {
    }

    infoAll(message:string):void
    {
        for (const user of this.joined)
        {
            user.infoFast(message);
        }
    }

    start():void
    {
        if (this.state === PVPZoneState.Started) return;
        
        if (this.joined.size <= 2)
        {
            if (this.joined.size <= 1)
            {
                tellrawAll([`§ePvP대회에 참가자가 없어 취소되었어요`]);
                this.state = PVPZoneState.Closed;
                return;
            }
        }
        PrizeBlock.clear();
        
        this.state = PVPZoneState.Started;
        tellrawAll([`§ePvP대회가 시작되었어요!`]);
        this.infoAll('시작');
    }

    _getLastWinner():Storage|null
    {
        for (const user of User.store.values())
        {
            if (user.get(VAR_LAST_WIN)) return user;
        }
        return null;
    }

    async ready():Promise<void>
    {
        if (this.state === PVPZoneState.Ready) return;
        this.state = PVPZoneState.Ready;
        
        this.current = pvpRegions[this.pvpIndex];
        this.pvpIndex = (this.pvpIndex + 1) % pvpRegions.length;
        
        const money = tradeCenter.getMoney() * 0.008;
        
        this.prizeMoney = priceRound(money);
        this.prizeGold = Math.round(money / DIAMOND_PRICE);
        // this.prizeDiamond = Math.round(money / tradeCenter.getBasePriceOf(ID.diamond) / 2);

        const time = await getDayTime();
        let wait = NIGHT_BEGIN - time;
        if (wait < 0) wait += DAY;

        const endTick = tickTime.now + wait;

        const message = (realTime:number)=>{
            tellrawAll([`§e약 ${toTimeText(realTime)}뒤 PvP대회가 시작할 예정이에요!`]);
            tellrawAll([`§ePvP장: ${this.current!.nameShort}`]);
            tellrawAll([`§e위치: ${this.current!.positionName}`]);
            tellrawAll([`§e상금: ${priceToString(this.prizeMoney)} + 경험치`]);
        };
        
        message(wait * tickTimeAvg.get() / TIME_PER_SECONDS);

        const checkpoints:number[] = [
            30*1000,
            60*1000,
            3*60*1000,
            5*60*1000,
            10*60*1000,
            20*60*1000,
            30*60*1000,
        ];

        {
            const _ticktimeavg = tickTimeAvg.get();
            while (checkpoints.length)
            {
                const cp = checkpoints[checkpoints.length-1];
                if ((endTick - tickTime.now) * _ticktimeavg < cp)
                {
                    checkpoints.pop();
                }
                else
                {
                    break;
                }
            }
        }

        while (checkpoints.length)
        {
            const cp = checkpoints[checkpoints.length-1];
            const remainReal = (endTick - tickTime.now) * tickTimeAvg.get();
            if (remainReal <= cp)
            {
                checkpoints.pop();
                message(cp / TIME_PER_SECONDS);
            }
            await realTime.promise(1000);
        }
        
        await tickTime.promise(Math.max(endTick - tickTime.now - 5*TICK_PER_SECONDS, 0));
        for (let i=5;i>=1;i--)
        {
            tellrawAll([`§ePvP 대회 시작: ${i}초`]);
            await tickTime.promise(TICK_PER_SECONDS);
        }
        this.start();
    }

    finish():void
    {
        if (this.state !== PVPZoneState.Started) return;
        this.state = PVPZoneState.Closed;

        if (this.joined.size >= 2)
        {
            tellrawAll([`§ePvP 결과: 오류, ${this.joined.size}명이 남아있음`]);
            this.last = this.second = null;
            return;
        }

        const lastWinner = this._getLastWinner();

        const user:User|undefined = this.joined.values().next().value;
        let users:User[];
        if (!user)
        {
            users = [this.last!, this.second!];
            pvp_main.delete('stack');
            tellrawAll([`§ePvP 결과: 무승부 (${this.last!.name}, ${this.second!.name})`]);
            tellrawAll([`§e상금은 빨리 가져가시는 분이 임자에요`]);
            if (lastWinner)
            {
                lastWinner.delete(VAR_LAST_WIN);
                pvp_main.set('stack', 0);
            }
        }
        else
        {
            users = [user];
            user.info('승리하셨습니다!');
            let stack:number;
            if (lastWinner)
            {
                if (user.storage !== lastWinner)
                {
                    lastWinner.delete(VAR_LAST_WIN);
                    user.storage.set(VAR_LAST_WIN, 1);
                    pvp_main.set('stack', 0);
                    stack = 0;
                }
                else
                {
                    stack = pvp_main.add('stack', 1);
                }
            }
            else
            {
                user.storage.set(VAR_LAST_WIN, 1);
                pvp_main.set('stack', 1);
                stack = 1;
            }
            user.storage.add(VAR_WIN_COUNT, 1);
            
            let msg = `§ePvP 결과: ${user.name} 승리`;
            if (stack > 1) msg += `(${stack} 연승)`;

            tellrawAll([msg]);
            
            const health = user.component.Health;
            health.data.value = health.data.max;
            user.component.Health = health;

            command(`xp 1000 "${user.name}"`);
            command(`effect "${user.name}" resistance 120 2`);
            command(`effect "${user.name}" strength 120 2`);
            users = [user];
        }
        
        const names = users.map(user=>user.name);
        new MoneyPrizeBlock(names, this.current!.prizePoint, '다이아', CID.moneyblock, this.prizeMoney);
        this.joined.clear();
        this.last = this.second = null;
        this.current = null;
    }

    leave(zone:PVPRegion, user:User):void
    {
        if (this.current !== zone) return;

        if (this.joined.delete(user))
        {
            switch (this.state)
            {
            case PVPZoneState.Ready:
                user.info('PvP존 이탈');
                tellrawAll([`§e${user.name} 님이 PvP존에서 나가셨습니다(총 ${this.joined.size}명)`]);
                break;
            case PVPZoneState.Started:
                user.kill();
                tellrawAll([`§e${user.name}님 탈락(현재 ${this.joined.size}명)`]);
                if (this.joined.size === 1)
                {
                    this.second = user;
                    setTimeout(()=>{ 
                        this.finish(); 
                    }, 1000);
                }
                else if (this.joined.size === 0)
                {
                    this.last = user;
                }
                break;
            }
        }
    }

    enter(zone:PVPRegion, user:User):string|null
    {
        if (this.current !== zone) return null;

        switch (this.state)
        {
        case PVPZoneState.Started:
            return this.joined.has(user) ? null : 'PvP중 입장 불가';
        case PVPZoneState.Ready:
            if (!this.joined.has(user))
            {
                this.joined.add(user);
                user.info('PvP존 참가');
                tellrawAll([`§e${user.name} 님이 PvP존에 참가하셨습니다(총 ${this.joined.size}명)`]);
            }
            break;
        case PVPZoneState.Closed:
            break;
        }
        return null;
    }
    
    intesectAll(region:Box):boolean
    {
        for (const r of pvpRegions)
        {
            for (const lock of r.locks)
            {
                if (lock.cube.intersect(region)) return true;
            }
        }
        return false;
    }
}

export const pvpzone = new PVPZone();

const pvpRegions:PVPRegion[] = [];

class PVPRegion extends Region
{
    public readonly locks:Region[];

    constructor(
        public readonly nameShort:string,
        public readonly positionName:string, 
        cube:Box, 
        public readonly prizePoint:Vector3, 
        ...extraLock:Box[])
    {
        super(nameShort+' PvP장', cube, cube.y1+2);

        pvpRegions.push(this);
        
        this.locks = extraLock.map(v=>new FilteredWriteLock(this.name+' 사다리', v));
        this.locks.push(new FilteredNoPushWriteLock(this.name, 
                cube.expand(2)));
    }
    
    onEnter(user:User):string|null
    {
        return pvpzone.enter(this, user);
    }

    onLeave(user:User):void
    {
        return pvpzone.leave(this, user);
    }

    onDeath(user:User):void
    {
        return pvpzone.leave(this, user);
    }
}

const Y_OFFSET = 3;

export function initPvP():void
{    
    new PVPRegion(
        "지하 창고",
        "스폰 기준 서쪽",
        new Box(
        -299, 5, -854,
        -283, 12, -836),  
        new Vector3(-287, 6, -845),
        new Box(
        -284, 14, -845,
        -284, 65, -845).expand(1));

    new PVPRegion(
        "석신",
        "스폰 기준 동쪽 타워",
        new Box(
        -159, 92 + Y_OFFSET, -878, 
        -116, 92 + Y_OFFSET, -835).expand(6), 
        new Vector3(-149, 93, -868),
        new Box(
        -153, 69, -871, 
        -153, 91, -871).expand(1));
            
    new PVPRegion(
        "용암의 수호자",
        "스폰 기준 남서쪽",
        new Box(
        -352, 91 + Y_OFFSET, -818,
        -294, 91 + Y_OFFSET, -762).expand(6),  
        new Vector3(-299, 92, -795),
        new Box(
        -293, 73, -791,
        -293, 90, -790).expand(1));
    
    new SpawnRegion();
}
