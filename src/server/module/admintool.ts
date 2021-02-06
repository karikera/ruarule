
import { Block } from "@bdsx/block";
import { loginInfoTables } from "@bdsx/logininfo-db";
import { Position } from "@bdsx/position";
import { banlist } from "@bdsx/ruakr_ban";
import { addSlashes, db } from "@bdsx/ruakr_db";
import { AttackEvent, Container, User, UserExtra } from "@bdsx/ruakr_user";
import { commander, execute, fillx, testforblock, title } from "@mcbe/command";
import Identifier from "@mcbe/identifier";
import ID from "@mcbe/identifier/id";
import { Lang } from "@mcbe/lang";
import LOG from "@mcbe/ruakr_log";
import { Store } from "@mcbe/store";
import { tellrawAll } from "@mcbe/system_server";
import { command, ipfilter, nethook, PacketId, serverControl } from "bdsx";
import { DimensionId } from "bdsx/common";
import { Vector3 } from "krgeometry";
import { pvpstore, pvpzone } from "../pvpzone";
import { settings } from "../settings";
import { setWorldSpawn } from "../spawnpoint";
import { tradestore, TradingBlock } from "../structure/tradecenter";
import { getDigCounterString } from "./digcounter";
// import { HardInventory } from "./hardinventory";
import { portalBlock } from "./portalblock";
import { SoftInventory } from "./softinventory";
import { Zone } from "./zone";




const TAG_TO_COLOR = {
    'V': '§7',
    'M': '§r',
    'W': '§e',
    'E': '§c',
};

const LOG_QUERY = 'id,tag,time,action,user,user_x,user_y,user_z,x,y,z,msg,item,item2,count,count2';

function splitCommand(line:string):string[]
{
    const out:string[] = [];
    let cur = '';
    let quot = false;
    _loop:for (let i=0;i<line.length;)
    {
        let chr = line.charAt(i++);
        switch (chr)
        {
        case '\\':
            if (quot)
            {
                if (i >= line.length) break _loop;
                chr = line.charAt(i++);
                switch (chr)
                {
                case 'n': cur += '\n'; break;
                case 'r': cur += '\r'; break;
                case 'f': cur += '\f'; break;
                case 'b': cur += '\b'; break;
                case 'a': cur += '\a'; break;
                case '0': cur += '\0'; break;
                default: cur += chr; break;
                }
            }
            else
            {
                cur += chr;
            }
            break;
        case '"':
            quot = !quot;
            break;
        case ' ':
            if (quot)
            {
                cur += chr;
            }
            else
            {
                out.push(cur);
                cur = '';
            }
            break;
        default:
            cur += chr;
            break;
        }
    }
    out.push(cur);
    return out;
}

const STORES = new Map<string, Store>([
    ['player', User.store],
    ['portal', portalBlock.store],
    ['container', Container.store],
    ['pvp', pvpstore],
    ['trade', tradestore],
]);

abstract class Commander
{
    public repeating = false;
    private previousCommand = '';

    protected lastLogViewIndex:number = 0;

    constructor()
    {
    }


    getUser():User|null
    {
        return null;
    }

    abstract print(message:string):void;
    abstract taggedPrint(tag:LOG.Tag, message:string):void;

    execute(cmd:string):number|undefined
    {
        this.repeating = (this.previousCommand == cmd);
        this.previousCommand = cmd;

        const space = cmd.indexOf(' ');
        const tail = cmd.substr(space+1);
        let cmds:string[];
        let cmdname:string;
        if (space !== -1)
        {
            cmds = splitCommand(tail);
            cmdname = cmd.substring(1, space);
        }
        else
        {
            cmds = [];
            cmdname = cmd.substr(1);
        }
        const cmdfn = commandMap[cmdname];
        if (cmdfn)
        {
            cmdfn(this, cmds, tail).catch(err=>this.taggedPrint('E', err.message));
            return 0;
        }
    }

    private _printLog(res:(string|null)[]):void
    {
        const [id, tag, time, action, user, user_x, user_y, user_z, x, y, z, msg, item, item2, count, count2] = res;
        let log = `${time}| ${action}`;
        if (user !== null)
        {
            log += ' @';
            log += user;
        }
        if (user_x !== null)
        {
            log += `(${user_x} ${user_y} ${user_z})`;
        }
        if (x !== null)
        {
            log += ` (${x} ${y} ${z})`;
        }
        if (item !== null)
        {
            log += ` ${item}`;
        }
        if (count !== null)
        {
            log += `(${count})`;
        }
        if (item2 !== null)
        {
            log += ` ${item2}`;
        }
        if (count2 !== null)
        {
            log += `(${count2})`;
        }
        if (msg !== null)
        {
            log += ': ';
            log += msg;
        }
        this.taggedPrint(tag as LOG.Tag, log);
    }    

    _printLogs(res:(string|null)[][]):void
    {
        this.print('--log--');
        if (res.length === 0)
        {
            this.lastLogViewIndex = 0;
            this.print('--empty--');
            return;
        }
        for (const r of res)
        {
            this._printLog(r);
        }
        this.lastLogViewIndex = +res[res.length-1][0]!;
    }

    async printLog(name?:string):Promise<void>
    {
        try
        {
            let query = `select ${LOG_QUERY} from act where 1`;
            
            if (this.repeating) query += ` && id <${this.lastLogViewIndex}`;
            if (name) query += ` && user="${addSlashes(name)}"`;
            query += ' order by id desc limit 10';
            
            const rows = await db.execute(query);
            this._printLogs(rows);
        }
        catch(err)
        {
            this.print(err.stack);
        }
    }
    
    async searchItem(item:Identifier):Promise<void>
    {
        const res = await commander.command(`clear @a ${item} -1 0`);
        const lang = await Lang.onLoad;
        lang.commands.clear_testing.reset();
        for (;;)
        {
            const matched = lang.commands.clear_testing.exec(res.statusMessage);
            if (!matched) break;
            const username = matched[0];
            const count = matched[1];
            this.print(`${username}: ${count}`);
        }
    }
}

class ServerCommander extends Commander
{
    print(message:string)
    {
        console.log(message);
    }

    taggedPrint(tag:LOG.Tag, message:string):void
    {
        if (tag === 'E')
        {
            console.error(message);
        }
        else
        {
            console.log(message);
        }
    }
}

function toBoolean(v:string, original:boolean):boolean
{
    if (!v) return !original;
    if (v === '0') return false;
    if (v === 'f') return false;
    if (v === 'false') return false;
    if (v === 'off') return false;
    if (v === 'x') return false;
    if (v === 'n') return false;
    return true;
}

const commandMap:{[key:string]:(cmder:Commander, cmds:string[], fullcmd:string)=>Promise<void>} = {
    async 't'(cmder, cmds, fullcmd)
    {
        if (cmder !== serverCmder) return;
        tellrawAll([fullcmd]);
    },
    async 'js'(cmder, cmds, fullcmd)
    {
        const res = new Function(
            'exports',
            'require',
            'module',
            '__filename',
            '__dirname',
            fullcmd)(exports, require, module, __filename, __dirname);
        if (res !== undefined) console.log(res);
    },
    async 'restart'()
    {
        serverControl.restart();
    },
    async 'restart-force'()
    {
        serverControl.restart(true);
    },
    async 'update-price'(cmder)
    {
        TradingBlock.updatePriceAll();
        cmder.print('Price Updated');
    },
    async 'pvpgame'()
    {
        pvpzone.ready();
    },
    async 'dig'(cmder)
    {
        cmder.print(getDigCounterString());
    },
    async 'find'(cmder, cmds)
    {
        const id = Identifier.getFromName(cmds[0]);
        cmder.print('----------------');
        Container.search(id);
        cmder.searchItem(id);
    },
    async 'test'(cmder)
    {
        const user = cmder.getUser();
        if (!user)
        {
            console.log('no for console');
            return;
        }

        const packet = nethook.createPacket(PacketId.Transfer);
        nethook.sendPacket(user.ni, packet);
        packet.dispose();
    },
    async 'log'(cmder, [name])
    {
        cmder.printLog(name);
    },
    async 'who'(cmder, [name]) {
        const rows = await db.execute(`select b.username,b.ipaddr from ipinfo a,ipinfo b where a.username like '${addSlashes(name)}' && a.ipaddr=b.ipaddr`);
        if (!rows || rows.length === 0)
        {
            cmder.print(`${name} is not found`);
            return;
        }
        cmder.print('----------------');
        const xuidmap = await loginInfoTables.getXuidFromNames(rows.map(row=>row[0]!));

        for (const [name, ipaddr] of rows)
        {
            const xuids = xuidmap.get(name!);
            let show = `${name}: ${ipaddr}`;
            if (xuids)
            {
                for (const xuid of xuids)
                {
                    if (banlist.hasXuid(xuid)) show += `(${xuid} banned)`;
                }
            }
            if (banlist.hasXuid(name!)) show += `(name banned)`;
            if (ipfilter.has(ipaddr!)) show += ' (ip-banned)';
            cmder.print(show);
        }
    },
    async 'whoip'(cmder, [ipaddr])
    {
        ipaddr = ipaddr.replace(/\*/g, '%');
        const rows = await db.execute(`select username from ipinfo where ipaddr like '${addSlashes(ipaddr)}'`);
        if (!rows || rows.length === 0)
        {
            cmder.print(`${ipaddr} is not found`);
            return;
        }
        if (ipfilter.has(ipaddr)) cmder.print('----(ip-banned)----');
        else cmder.print('----------------');

        const xuidmap = await loginInfoTables.getXuidFromNames(rows.map((row=>row[0]!)));
        for (const [name] of rows)
        {
            const xuids = xuidmap.get(name!);
            let out = name!;
            if (banlist.hasXuid(name!)) out += ` (banned)`;
            if (xuids)
            {
                for (const xuid of xuids)
                {
                    if (banlist.hasXuid(xuid)) out += `(${xuid} banned)`;
                }
            }
            cmder.print(out);
        }
    },
    async 'keeps'(cmder, [name])
    {
        // const user = User.getByName(name);
        // if (user)
        // {
        //     cmder.print(user.extra(HardInventory).getKeepingText());
        // }
        // else
        // {
        //     cmder.print(`${name} is not found`);
        // }
    },

    async 'ipban'(cmder, cmds)
    {
        const ip = cmds.shift()!;
        LOG.error({user:':'+ip, action:LOG.Action.ManualBan, msg:cmds.join(' ')});
        
        if (banlist.banWithIp(ip))
        {
            cmder.print(`${ip} ip-banned`);
        }
        else
        {
            cmder.print(`${ip} is already ip-banned`);
        }
    },
    async 'ipunban'(cmder, [ip])
    {
        if (banlist.unbanWithIp(ip))
        {
            cmder.print(`${ip} ip-unbanned`);
        }
        else
        {
            cmder.print(`${ip} is not ip-banned`);
        }
    },
    async 'ipbanlist'(cmder)
    {
        cmder.print('-------------------');
        cmder.print(banlist.reportIpBan());
    },

    async 'ban'(cmder, cmds)
    {
        const name = cmds.shift()!;
        const user = User.getByName(name);
        if (user)
        {
            banlist.ban(user, {action:LOG.Action.ManualBan, msg:cmds.join(' ')});
        }
        else
        {
            const xuids = await loginInfoTables.getXuidFromName(name);
            if (xuids.length === 0)
            {
                cmder.print(`${name} not found`);
            }
            LOG.error({user:name, action:LOG.Action.ManualBan, msg:cmds.join(' ')});
            if (xuids.length === 1)
            {
                if (banlist.banByXuid(xuids[0]))
                {
                    cmder.print(`${name} banned`);
                }
                else
                {
                    cmder.print(`${name} is already banned`);
                }
            }
            else
            {
                for (const xuid of xuids)
                {
                    if (banlist.banByXuid(xuid))
                    {
                        cmder.print(`${xuid} banned`);
                    }
                    else
                    {
                        cmder.print(`${xuid} is already banned`);
                    }
                }
            }
        }
    },
    async 'unban'(cmder, [name])
    {
        const xuids = await loginInfoTables.getXuidFromName(name);
        if (xuids.length === 0)
        {
            cmder.print(`${name} not founded`);
            return;
        }
        for (const xuid of xuids)
        {
            if (banlist.unbanByXuid(xuid))
            {
                cmder.print(`${name} unbanned`);
            }
            else
            {
                cmder.print(`${name} is not banned`);
            }
        }
    },
    async 'banlist'(cmder)
    {
        cmder.print('-------------------');
        cmder.print(await banlist.report());
    },

    async 'inv'(cmder, [name])
    {
        const user = User.getByName(name);
        if (user)
        {
            cmder.print(user.extra(SoftInventory).getInventoryText());
        }
        else
        {
            cmder.print('user not found: '+name);
        }
    },
    async 'zone'(cmder, [cmd, zonename, value])
    {
        switch (cmd)
        {
        case 'list': {
            const list = await Zone.list();
            for (const name of list)
            {
                const zone = Zone.get(name)!;
                cmder.print(zone.toInfoString());
            }
            break;
        }
        case 'remove': {
            const zone = Zone.get(zonename);
            if (!zone)
            {
                cmder.print(`zone not found: ${zonename}`);
                return;
            }
            if (!zone.destroy())
            {
                cmder.print(`zone remove failed: ${zonename}`);
            }
            else
            {
                cmder.print(`zone removed: ${zonename}`);
            }
            break;
        }
        case 'size':  {
            const zone = Zone.get(zonename);
            if (!zone)
            {
                cmder.print(`zone not found: ${zonename}`);
                return;
            }
            if (value === undefined)
            {
                cmder.print(`${zonename}.size: ${zone.getSize()}`);
            }
            else
            {
                const newSize = +value;
                if (isNaN(newSize))
                {
                    cmder.print(`invalid number: ${value}`);
                    return;
                }
                cmder.print(`${zonename}.size: (${zone.getSize()} -> ${newSize})`);
                zone.setSize(newSize);
            }
            break;
        }
        case 'info': {
            const zone = Zone.get(zonename);
            if (!zone)
            {
                cmder.print(`zone not found: ${zonename}`);
                return;
            }
            cmder.print(zone.toInfoString());
            for (const [name, level] of zone.getMembers())
            {
                cmder.print(name+': '+level);
            }
            break;
        }
        default: cmder.print('[list, size, info]');
        }
    },
    async 'store'(cmder, cmds)
    {
        const storename = cmds.shift();
        if (!storename)
        {
            for (const name of STORES.keys())
            {
                cmder.print(name);
            }
            return;
        }
        const s = STORES.get(storename);
        if (!s)
        {
            cmder.print('unknown store: '+storename);
            return;
        }
        const cmd2 = cmds.shift();
        const tablename = cmds.shift();
        const varname = cmds.shift();
        switch (cmd2)
        {
        case 'list':
            if (tablename)
            {
                const table = s.get(tablename);
                if (!table)
                {
                    cmder.print('unknown table: '+storename+'.'+tablename);
                    break;
                }
                cmder.print('----list of '+storename+'.'+tablename);
                for (const [key, value] of table.entires())
                {
                    cmder.print(`${key}: ${value}`);
                }
            }
            else
            {
                cmder.print('----list of '+storename);
                for (const storage of s.values())
                {
                    cmder.print(storage.name);
                }
            }
            break;
        case 'get':
            if (!tablename)
            {
                cmder.print('need tablename');
                break;
            }
            if (!varname)
            {
                cmder.print('need varname');
                break;
            }
            const table = s.get(tablename);
            if (!table)
            {
                cmder.print('unknown table: '+tablename);
                break;
            }
            cmder.print(`${storename}.${table}.${varname}: ${table.get(varname)}`);
            break;
        case 'set':
            if (!tablename)
            {
                cmder.print('need tablename');
                break;
            }
            if (!varname)
            {
                cmder.print('need varname');
                break;
            }
            const valuestr = cmds.shift()!;
            const value = parseInt(valuestr);
            if (isNaN(value))
            {
                cmder.print('Invalid value: '+valuestr);
                break;
            }
            s.create(tablename).set(varname, value);
            break;
        default: cmder.print(`unknown command: store ${cmd2}`); break;
        }
    },
    async 'store-update'(cmder)
    {
        Store.updateAll();
        cmder.print('DB Updated');
    },
    async 'settings'(cmder, [name, value])
    {
        if (!name)
        {
            for (const name in settings.data)
            {
                cmder.print(name+': '+settings.data[name]);
            }
        }
        else if (!(name in settings.data))
        {
            cmder.print('unknown setting property: '+name);
        }
        else
        {
            const orival = settings.data[name];
            if (!value)
            {
                cmder.print(`settings.${name}: ${orival}`);
            }
            else
            {
                const valtype = typeof orival;
                switch (valtype)
                {
                case 'string':
                    settings.data[name] = value;
                    cmder.print(`settings.${name}: ${orival}->${value}`);
                    break;
                case 'number':
                    const numval = +value;
                    if (isNaN(numval))
                    {
                        cmder.print(`settings.${name} needs number`);
                        cmder.print(`${value} is not number`);
                    }
                    else
                    {
                        settings.data[name] = numval;
                        cmder.print(`settings.${name}: ${orival}->${numval}`);
                    }
                    break;
                default:
                    cmder.print(`unsupported type: ${valtype} (settings.${name})`);
                    break;
                }
            }
        }
    },
    async 'mini'(cmder, [v])
    {
        cmder.print(Identifier.get(v).minified);
    },
    async 'unmini'(cmder, [v])
    {
        cmder.print(Identifier.getFromMinified(v).name);
    },
    async 'adm'(cmder, [m])
    {
        const user = cmder.getUser();
        if (!user)
        {
            cmder.print('Need to use it in game');
            return;
        }

        user.setAdminMode(toBoolean(m, user.isAdminMode()));
    },
};

const serverCmder = new ServerCommander;

command.hook.on((cmd, origin)=>{
    let cmder:Commander;
    const user = User.getByName(origin);
    if (cmd.startsWith('/w '))
    {
        const msg = cmd.substr(2);
        if (user)
        {
            LOG.message({user, action:LOG.Action.Chat, msg});
        }
        else
        {
            LOG.message({user:origin, action:LOG.Action.Chat, msg});
        }
    }

    if (origin === "Server")
    {
        cmder = serverCmder;
    }
    else if (User.admins.has(origin))
    {
        if (!user) return;
        cmder = user.extra(AdminComponent);
    }
    else
    {
        return;
    }
    return cmder.execute(cmd);
});

export class AdminComponent extends Commander implements UserExtra
{
    private checking = false;

    private fillFrom:Vector3|null = null; 
    private lastLogViewPos:Position = Position.NULL;

    constructor(public readonly user:User)
    {
        super();
    }

    getUser():User
    {
        return this.user;
    }
    
    print(message:string){
        for (const line of message.split('\n'))
        {
            this.user.tellraw(line);
        }
    }

    taggedPrint(tag:LOG.Tag, message:string):void
    {
        for (const line of message.split('\n'))
        {
            this.user.tellraw(TAG_TO_COLOR[tag] + line);
        }
    }

    onUpdateSlow():void
    {
        if (this.checking)
        {
            const rot = this.user.component.Rotation;
            title(this.user.name, 'actionbar', `angleY=${rot.data.y.toFixed(1)},angleX=${rot.data.x.toFixed(1)}
riding=${this.user.ridingId}
dimension=${DimensionId[this.user.dimension]}`);
        }
    }

    onInterect(block:Block):boolean
    {
        if (!this.user.isAdminMode())
        {
            if (!this.user.isAdminAccount) return false;
            if (this.user.hand === ID.stick)
            {
                this.user.setAdminMode(true);
                return true;
            }
            return false;
        }

        switch (this.user.hand)
        {
        case ID.stick:
            this.user.setAdminMode(false);
            break;
        case ID.arrow:
            const target = User.getAt(block.pos, 2, this.user);
            if (target) banlist.ban(target, {action:LOG.Action.ManualBan, msg: "by arrow"});
            break;
        case ID.diamond_sword:
            if (block.pos.equals(this.lastLogViewPos))
            {
                db.execute(`select ${LOG_QUERY} from act where `
                    +`x=${block.pos.x} && y=${block.pos.y} && z=${block.pos.z} && id < ${this.lastLogViewIndex} order by id desc limit 10`)
                    .then(row=>this._printLogs(row));
            }
            else
            {
                db.execute(`select ${LOG_QUERY} from act where `
                    +`x=${block.pos.x} && y=${block.pos.y} && z=${block.pos.z} order by id desc limit 10`)
                    .then(row=>this._printLogs(row));
                this.lastLogViewPos = block.pos;
            }
            break;
        case ID.diamond_pickaxe:
            this.user.tellraw(`${block.pos.x} ${block.pos.y} ${block.pos.z}`);
            break;
        case ID.bow:
            this.checking = !this.checking;
            if (!this.checking)
            {
                title(this.user.name, 'actionbar', '§0');
            }
            break;
        case ID.crossbow:
            const flags = Container.getFlags(block.id);
            if (flags !== -1)
            {
                const c = Container.peek(this.user.name, flags, block.pos);
                if (!c)
                {
                    this.user.tellraw(`${block}${block.pos} no container information`);
                }
                else
                {
                    this.user.tellraw(c.getInventoryText());
                }
            }
            break;
        case ID.golden_apple:
            this.user.tellraw(`start at ${block.pos}`);
            this.fillFrom = block.pos;
            break;
        case ID.apple:
            if (!this.fillFrom)
            {
                this.user.tellraw(`need to set start point`);
                break;
            }
            this.user.tellraw(`remove to ${block.pos}`);
            fillx(this.fillFrom, block.pos, ID.air);
            this.fillFrom = null;
            break;
        case ID.appleenchanted:
            if (!this.fillFrom)
            {
                this.user.tellraw(`need to set start point`);
                break;
            }
            this.user.tellraw(`filled to ${block.pos}`);
            fillx(this.fillFrom, block.pos, block.id, block.data);
            this.fillFrom = null;
            break;
        default: return false;
        }
        return true;
    }

    onPlace(block:Block, hand:Identifier):boolean
    {
        if (!this.user.isAdminMode()) return false;
        switch (block.id)
        {
        case ID.emerald_block:
            testforblock(block.pos, block.id).then(exists=>{
                if (exists)
                {
                    setWorldSpawn(block.pos);
                    execute(this.user.name).setblock(block.pos, ID.air);
                    this.user.tellraw(`스폰 지역 ${block.pos} 설정됨`);
                    LOG.message({user:this.user, action:LOG.Action.SetSpawn, pos:block.pos});
                }
            })
            break;
        default: return false;
        }
        return true;
    }

    onAttack(ev:AttackEvent):void
    {
        if (!this.user.isAdminMode()) return;
        switch (this.user.hand)
        {
        case ID.crossbow:
            if (!ev.targetUser) return;
            this.user.tellraw(ev.targetUser.extra(SoftInventory).getInventoryText());
            break;
        }
    }

    onDispose():void
    {
        this.user.setAdminMode(false);
    }
}
