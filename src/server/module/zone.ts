import { Vector3, Box } from "krgeometry";
import { Scoreboard, ObjectiveScoreboard } from "@mcbe/scoreboard";
import { DimensionId } from "bdsx/common";
import { Region } from "./region";
import { User, UserExtra, blockEvent } from "@bdsx/ruakr_user";
import { restorePistonPush, restoreBlock, restoreBlockSlow } from "@bdsx/restoreblock";
import ID from "@mcbe/identifier/id";
import { buildTownTower, removeTownTower } from "../build";
import { titleAll, setblock, testforblock, setblockWithoutError } from "@mcbe/command";
import { SPAWN_POINT, spawnLock } from "../spawnpoint";
import { tellrawAll } from "@mcbe/system_server";
import { getLastConnection } from "./last_conn";
import { setFarTicker } from "@mcbe/farticker";
import { setHourTest } from "../../lib/hourtest";
import { EntityType, Entity } from "@mcbe/entity";
import { SCORE_LIMIT } from "@mcbe/ruakr_const";
import { TradingBlock } from "../structure/tradecenter";
import { Pusher } from "./pusher";
import { pvpzone } from "../pvpzone";
import { CID } from "../customid";
import { Storage } from "@mcbe/store";
import { callAtNextTick } from "@mcbe/nexttick";
import { Block } from "@bdsx/block";
import LOG from "@mcbe/ruakr_log";
import { settings } from "../settings";
import { Position } from "@bdsx/position";
import { banlist } from "@bdsx/ruakr_ban";

const zoneById = new Map<string, Zone>();
const zoneboard = new Scoreboard('$zones');

function makeZoneCube(pos:VectorXYZ, size:number):Box
{
    const ypos = pos.y + size * settings.data.zoneYAboveRate;
    return new Box(
        pos.x - size,
        pos.y - size * settings.data.zoneYBellowRate,
        pos.z - size,
        pos.x + size,
        ypos,
        pos.z + size,
    );
}

function * zoneEntires(storage:Storage):IterableIterator<[string, number]>
{
    for (const [key, value] of storage.entires())
    {
        if (key.startsWith('#')) continue;
        switch (key)
        {
        case 'sx': case 'sy': case'sz': continue;
        default: yield [key, value];
        }
    }
}

enum ZoneLevel
{
    None = 0,
    Member = 1,
    Owner = 2,
}

function coordToText(v:Vector3):string
{
    v = v.round();
    let text = '(';
    if (v.x < 0) text += `서 ${-v.x}블럭`;
    else if (v.x !== 0) text += `동 ${v.x}블럭`;

    if (v.z < 0)
    {
        if (text) text += ', ';
        text += `북 ${-v.z}블럭`;
    }
    else if (v.z !== 0)
    {
        if (text) text += ', ';
        text += `남 ${v.z}블럭`;
    }
    if (text.length === 1) return '(이곳)';
    return text + ')';
}

export class ZoneComponent implements UserExtra
{
    owned:Zone|null = null;
    accessable = new Set<Zone>();

    constructor(public readonly user:User)
    {
        for (const [zoneName, level] of zoneEntires(this.user.storage))
        {
            const zone = Zone.get(zoneName);
            if (!zone)
            {
                LOG.error({user, action:LOG.Action.Assertion, msg: `zone(${zoneName}) not found`});
                continue;
            }
            switch (level)
            {
            case 2:
                this.owned = zone;
                this.accessable.add(zone);
                break;
            case 1:
                this.accessable.add(zone);
                break;
            }
        }
    }

    onInterect(block:Block):boolean
    {
        const zone = this.owned;
        if (!zone) return false;
        
        const other = User.getAt(block.pos.add(Vector3.Y), 2, this.user);
        if (!other) return false;
        
        switch (this.user.hand)
        {
        case ID.stick:
            if (zone.isAccessableBy(other))
            {
                const error = zone.removeAccessable(other);
                if (error)
                {
                    this.user.info(error);
                }
                else
                {
                    this.user.info(other.name+'님을 마을에서 추방하셨어요');
                    other.info(zone.name+' 마을에서 추방되셨어요!');
                }
            }
            else
            {
                const error = zone.addAccessable(other);
                if (error)
                {
                    this.user.info(error);
                }
                else
                {
                    this.user.info(`${other.name}님을 마을에 초대하셨어요`);
                }
            }
            break;
        case ID.arrow:
            const oextra = other.extra(ZoneComponent);
            if (!oextra.accessable.has(zone))
            {
                this.user.info(`${other.name} 주민에게만 마을을 줄 수 있어요`);
            }
            else
            {
                const error = zone.recreateAs(other.name);
                this.user.info(`${other.name}님에게 마을 권한을 넘기셨어요`);
                if (error) this.user.info(error);
            }
            break;
        default:
            return false;
        }
        return true;
    }

    static async onInstall():Promise<void>
    {
        blockEvent.onPlace.on(CID.zone_maker, (user, block)=>{
            testforblock(block.pos, CID.zone_maker).then(exists=>{
                if (!exists)
                {
                    block.destroy();
                    user.info('오버월드에만 마을이 가능해요');
                    return;
                }
                Zone.place(user, block.pos);
            });
            return true;
        });

        blockEvent.onPlace.on(CID.zone_maker_torch, (user, block)=>{
            testforblock(block.pos, CID.zone_maker_torch).then(exists=>{
                if (!exists)
                {
                    block.destroy();
                    user.info('오버월드에만 마을이 가능해요');
                    return;
                }
                const zone = Zone.place(user, block.pos);
                if (zone)
                {
                    setblock(block.pos, CID.zone_maker);
                    buildTownTower(block.pos);
                    user.tellraw('§7마을 설명을 보시려면 마을 블럭을 파괴해주세요');
                    user.tellraw('§c화살§7을 들고 파괴하면 마을이 §c없어져요§7!');
                }
            });
            return true;
        });
                
        const zones = await zoneboard.list();
        const proms:Promise<Zone|null>[] = [];
        for (const name in zones)
        {
            proms.push(Zone.load(name));
        }
        await Promise.all(proms);

        setHourTest(Zone.clean);
    }
}

export class Zone extends Region
{
    public readonly id:string;

    private constructor(
        private readonly board:ObjectiveScoreboard,
        public readonly pos:Position, 
        private size:number)
    {
        super(board.objective + ' 마을');
        this.setSize(size);
        
        this.bottomY = this.pos.y - 3;
        this.id = board.objective;

        zoneById.set(this.id, this);
    }

    setSize(size:number):void
    {
        this.cube = makeZoneCube(this.pos, size);
    }

    getSize():number
    {
        return this.size;
    }

    remove():boolean
    {
        if (!super.remove()) return false;

        zoneById.delete(this.id);
        this.board.destroy();
        User.store.cleanObjectiveWithoutSave(this.board.objective);
        
        for (const user of User.all())
        {
            const extra = user.extra(ZoneComponent);
            extra.accessable.delete(this);
            if (extra.owned === this)
            {
                extra.owned = null;
            }
        }
        return true;
    }

    destroy():boolean
    {
        if (!this.remove()) return false;
        setblockWithoutError(this.pos, ID.air).then(res=>{
            if (res)
            {
                removeTownTower(this.pos);
            }
            else
            {
                setFarTicker(this.pos, new Box(
                        this.pos.x - 2, this.pos.y - 2, this.pos.z - 2,
                        this.pos.x + 2, this.pos.y + 18, this.pos.z + 2), ()=>{
                    setblock(this.pos, ID.air);
                    removeTownTower(this.pos);
                    return true;
                });
            }
        });
        return true;
    }

    getMembers():Map<string, ZoneLevel>
    {
        const members = new Map<string, ZoneLevel>();
        for (const storage of User.store.values())
        {
            const level:ZoneLevel|undefined = storage.get(this.id);
            if (level === undefined) continue;
            members.set(storage.name, level);
        }
        return members;
    }

    recreateAs(name:string):string|null
    {
        const newid = name.substr(0, SCORE_LIMIT);
        const oldzone = zoneById.get(newid);
        if (oldzone) return `§c이미 있는 마을: ${newid}`;

        try
        {
            this.remove();

            const res = Zone.create(name, this.pos, this.size, true);
            if (res.error)
            {
                tellrawAll([`§c버그로 인해 ${this.id} 마을이 없어져 버렸어요`]);
                return '§c'+res.error;
            }
            const newzone = res.zone!;
            const board = res.board!;
            for (const storage of User.store.values())
            {
                const level:ZoneLevel|undefined = storage.get(this.id);
                if (level === undefined) continue;
                
                const user = User.getByName(storage.name);
                if (user)
                {
                    newzone.addAccessableQuiet(user);
                }
                else
                {
                    switch (level)
                    {
                    case ZoneLevel.None: break;
                    case ZoneLevel.Owner: 
                        storage.set(board.objective, ZoneLevel.Member);
                        break;
                    default:
                        storage.set(board.objective, level);
                        break;
                    }
                }
            }

            tellrawAll([`§e${this.id} 마을이 ${newzone.id} 마을이 되었어요!`]);
            return null;
        }
        catch(err)
        {
            LOG.error_obj(err);
            return '오류';
        }
    }

    onEnter(user:User):string|null
    {
        if (!user.extra(ZoneComponent).accessable.has(this)) return this.name + ' 제한 구역';
        user.info(this.name);
        return null;
    }

    onLeave(user:User):void
    {
        user.info('마을 외부');
    }

    canWrite(user:User|null):boolean
    {
        if (!user) return false;
        return user.extra(ZoneComponent).accessable.has(this);
    }
    
    canInterect(user:User|null):boolean
    {
        if (!user) return false;
        return user.extra(ZoneComponent).accessable.has(this);
    }

    isAccessableBy(user:User):boolean
    {
        const accessable = user.extra(ZoneComponent).accessable;
        return accessable.has(this);
    }

    addAccessable(user:User):string|null
    {
        const accessable = user.extra(ZoneComponent).accessable;
        if (accessable.has(this)) return user.name + '님은 이미 초대되어있어요';
        if (accessable.size !== 0)
        {
            return user.name + '님은 이미 '+[...accessable.values()].map(v=>v.name).join(', ')+'에 살고계세요';
        }

        user.info(this.name+'에 초대되셨어요!');
        accessable.add(this);
        user.storage.set(this.id, 1);
        return null;
    }
    
    addAccessableQuiet(user:User):boolean
    {
        if (this.id === user.name) return false;
        const accessable = user.extra(ZoneComponent).accessable;
        if (accessable.has(this)) return false;
        accessable.add(this);
        user.storage.set(this.id, 1);
        return true;
    }
    
    removeAccessable(user:User):string|null
    {
        const extra = user.extra(ZoneComponent);
        if (extra.owned === this) return '촌장을 추방할 수 없어요';
        const accessable = extra.accessable;
        if (!accessable.has(this)) return user.name+'님은 마을사람이 아니에요';
        accessable.delete(this);
        user.storage.delete(this.id);
        if (this.contains(user.position))
        {
            user.extra(Pusher).pushFromNow(this, this.bottomY, 1);
        }
        return null;
    }

    onPistonPush(user:User, block:Block, pistonPos:Vector3, oldPos:Vector3):boolean
    {
        if (block.id === CID.zone_maker)
        {
            return restorePistonPush(user, block, pistonPos, oldPos);
        }
        return false;
    }

    onDestroy(user:User, block:Block):void
    {
        if (block.id === CID.zone_maker)
        {
            if (!block.pos.equals(this.pos))
            {
                const pos = block.pos;
                Entity.catchPost(
                    new Box(pos.x, pos.y, pos.z, pos.x+1, pos.y+1, pos.z+1),
                    ev=>{
                        if (ev.entity.type !== EntityType.Item) return;
                        ev.removeEntity = true;
                    }
                );
                LOG.error({user, action:LOG.Action.Assertion, block, msg:`destroy zone_maker in ${this.id}`});
                return;
            }
    
            const extra = user.extra(ZoneComponent);
            if (!extra.accessable.has(this) && !user.isAdminMode())
            {
                restoreBlock(user, block);
                callAtNextTick(()=>{
                    banlist.ban(user, {action:LOG.Action.AggressiveDestroy, block, item2: user.hand,
                        msg:`destroy zone_maker in ${this.name}`});
                });
                return;
            }
    
            switch (user.hand)
            {
            case ID.arrow:
                if (extra.owned === this || user.isAdminMode())
                {
                    if (this.remove())
                    {
                        removeTownTower(this.pos);
                        tellrawAll([`§e${this.id} 마을이 없어졌어요!`]);
                        user.actionbar(`마을을 없앴어요`);
                    }
                }
                else
                {
                    restoreBlock(user, block);
                    if (this.removeAccessable(user) === null)
                    {
                        user.actionbar(`${this.id} 마을에서 나가셨어요`);
                    }
                }
                break;
            default:
                user.tellraw('§7§l 마을 기능 설명');
                user.tellraw('§7초대/추방: 막대를 들고 대상의 바닥에 상호작용');
                if (extra.owned === this)
                {
                    user.tellraw('§7권한 이전: 화살을 들고 대상의 바닥에 상호작용');
                    user.tellraw('§7마을 제거: 화살을 들고 마을 블럭 파괴');
                }
                else
                {
                    user.tellraw('§7마을 탈퇴: 화살을 들고 마을 블럭 파괴');
                }
                restoreBlockSlow(user, block);
                break;
            }
        }
    }
    
    static get(name:string):Zone|undefined
    {
        return zoneById.get(name);
    }

    private static _testCollide(pos:Vector3, size:number):string|null
    {
        const collide:string[] = [];
        const area = makeZoneCube(pos, size);
        if (area.intersect(spawnLock.cube)) collide.push(`스폰지점(${SPAWN_POINT.sub(pos).diaLength()}블럭)`);
        if (TradingBlock.intersect(area)) collide.push(`상점`);
        if (pvpzone.intesectAll(area)) collide.push('PvP장');
        
        const expand = area.expand(settings.data.zoneGap);
        for (const zone of zoneById.values())
        {
            if (zone.cube.intersect(expand))
            {
                collide.push(`${zone.id}(${zone.pos.sub(pos).diaLength()}블럭)`);
            }
        }
        if (collide.length !== 0)
        {
            return '다른 마을과 너무 가까워요\n'+collide.join(', ');
        }
        return null;
    }

    static create(username:string, pos:Position, size:number, ignoreCollide?:boolean):{zone?:Zone, error?:string, board?:ObjectiveScoreboard}
    {
        const user = User.getByName(username);
        const id = username.substr(0, SCORE_LIMIT);
        let zone = zoneById.get(id);
        if (zone) return {error: `이미 있는 마을: ${id} 마을`};

        if (!ignoreCollide)
        {
            const error = Zone._testCollide(pos, size);
            if (error) return {error};
        }

        const board = new ObjectiveScoreboard(id);
        board.create();
        User.store.create(username).set(id, 2);
        board.set('x', pos.x);
        board.set('y', pos.y);
        board.set('z', pos.z);
        if (size !== undefined) board.set('size', size);
        zoneboard.set(id, 1);

        zone = new Zone(board, pos, size);
        if (user)
        {
            const extra = user.extra(ZoneComponent);
            extra.owned = zone;
            extra.accessable.add(zone);
        }
        return {zone, board};
    }

    static async load(id:string):Promise<Zone|null>
    {
        const board = new ObjectiveScoreboard(id);
        const [x, y, z, size] = await Promise.all([
            board.get('x'), 
            board.get('y'),
            board.get('z'),
            board.get('size'),
        ]);

        if (x === undefined) return null;
        const pos = new Position(x, y!, z!, DimensionId.Overworld);
        return new Zone(board, pos, size || settings.data.zoneNewSize);
    }

    static clean():void
    {
        try
        {
            const zoneExpireTime = settings.data.zoneExpireTime;
            
            const expireTime = Date.now() - zoneExpireTime;
            
            interface ZoneMember
            {
                zone:Zone;
                owner:UserData;
                member:UserData[];
            }
    
            const zoneMemberMap:Map<string, ZoneMember> = new Map;
    
            for (const zone of zoneById.values())
            {
                zoneMemberMap.set(zone.id, {
                    zone,
                    owner:null as any,
                    member:[],
                });
            }
    
            const noOwner = new WeakSet<UserData>();

            class UserData
            {
                public readonly expired:boolean;
                public readonly lastConn:number;
                public readonly zones:[ZoneMember, number][];
    
                constructor(public readonly storage:Storage)
                {
                    this.lastConn = getLastConnection(storage);
                    this.expired = Math.round((this.lastConn - expireTime) / (60*60*1000)) <= 0;

                    const zones:[ZoneMember, number][] = [];
                    for (const [zonename, level] of zoneEntires(storage))
                    {
                        const zone = zoneMemberMap.get(zonename);
                        if (zone) zones.push([zone, level]);
                        else LOG.error({action:LOG.Action.Assertion, msg:`zone not found: ${zonename}`});
                    }
                    this.zones = zones;
                        
                    for (const [zone, level] of zones)
                    {
                        if (level !== 2) continue;
                        zone.owner = this;
                        return;
                    }
                    if (!this.expired)
                    {
                        for (const [zone, level] of zones)
                        {
                            zone.member.push(this);
                        }
                        noOwner.add(this);
                    }
                }
    
            }
    
            for (const s of User.store.values())
            {
                new UserData(s);
            }
    
            const expired:ZoneMember[] = [];    
            const sorted = [...zoneMemberMap.values()].sort((a,b)=>b.member.length - a.member.length);
            for (const list of sorted)
            {
                const owner = list.owner;
                if (owner === null)
                {
                    LOG.error({action:LOG.Action.Assertion, msg: 'zone without owner: '+list.zone.id});
                    expired.push(list);
                }
                else
                {
                    if (owner.expired)
                    {
                        expired.push(list);
                    }   
                }
            }

            for (const list of expired)
            {
                let lastConn = 0;
                let user:UserData|null = null;

                for (const m of list.member)
                {
                    if (!noOwner.has(m)) continue;
                    if (m.lastConn > lastConn)
                    {
                        lastConn = m.lastConn;
                        user = m;
                    }
                }

                const zone = Zone.get(list.zone.id)!;
                if (user === null)
                {
                    zone.destroy();
                    tellrawAll([`§e${list.zone.id} 마을에 남아있는 사람이 없어 사라졌어요!`]);
                }
                else
                {
                    noOwner.delete(user);
                    zone.recreateAs(user.storage.name);
                }
            }
        }
        catch (err)
        {
            LOG.error_obj(err);
        }
    }

    toString():string
    {
        return `[zone:${this.id}]`;
    }

    toInfoString():string
    {
        return `${this.name} (${this.pos.x} ${this.pos.y} ${this.pos.z}) size=${this.size}`;
    }

    static async list():Promise<string[]>
    {
        const scores = await zoneboard.list();
        return Object.keys(scores);
    }

    static place(user:User, pos:Position):Zone|null
    {
        const extra = user.extra(ZoneComponent);
        if (extra.accessable.size !== 0)
        {
            const posname:string[] = [];
            for (const zone of extra.accessable.values())
            {
                const diff = zone.pos.sub(pos);
                if (diff.x === 0 && diff.y === 0 && diff.z === 0)
                {
                    return null;
                }
                posname.push(zone.name + coordToText(diff));
            }
            user.info('§c이미 '+posname.join(', ')+'에 살고계세요');
            setblock(pos, ID.air, 0, 'destroy');
            return null;
        }
        const {zone, error} = Zone.create(user.name, pos, settings.data.zoneNewSize, false);
        if (zone)
        {
            titleAll('title', '§0');
            tellrawAll([`§e${zone.id} 마을이 세워졌어요!`]);
            return zone;
        }
        else if (error)
        {
            user.info('§c'+error);
            setblock(pos, ID.air, 0, 'destroy');
        }
        return null;
    }
}
