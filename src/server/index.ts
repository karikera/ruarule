
import { restorePistonPush } from "@bdsx/restoreblock";
import { BanExtra } from "@bdsx/ruakr_ban";
import "@bdsx/ruakr_db";
import "@bdsx/ruakr_logdb";
import { blockEvent, Container, User } from "@bdsx/ruakr_user";
import { LogExtra } from "@bdsx/ruakr_userlog";
import { execute, killEntities, spawnpoint } from "@mcbe/command";
import { Entity, EntityType } from "@mcbe/entity";
import events from "@mcbe/event_server";
import Identifier from "@mcbe/identifier";
import ID from "@mcbe/identifier/id";
import { itemLang, Lang } from "@mcbe/lang";
import { UseMethod } from "@mcbe/ruakr_const";
import LOG from "@mcbe/ruakr_log";
import { tellrawAll } from "@mcbe/system_server";
import { realTime } from "@mcbe/timer/realtime";
import { fs, ipfilter, NativePointer, setOnRuntimeErrorListener } from "bdsx";
import { DimensionId } from "bdsx/common";
import { Vector3 } from "krgeometry";
import { setSchedule } from "../lib/timeschdule";
import { updateTrafficLogFileName } from "../server_lib/log";
import { enableNightPvP } from "../server_lib/night_pvp";
import { enableClearOld } from "./clearold";
import { CID } from "./customid";
import { DDBlockExtra } from "./ddblock";
import { AdminComponent } from "./module/admintool";
import { DigCounter } from "./module/digcounter";
import { LastConnection } from "./module/last_conn";
import { NetherTop } from "./module/nethertop";
import { portalBlock } from "./module/portalblock";
// import { HardInventory } from "./module/hardinventory";
import { Pusher } from "./module/pusher";
import { Region, RegionComponent } from "./module/region";
import { SoftInventory } from "./module/softinventory";
import { TempBlockComponent } from "./module/tempblock";
import { Wallet } from "./module/wallet";
import { WatchComponent } from "./module/watch";
import { ZoneComponent } from "./module/zone";
import { initPvP } from "./pvpzone";
import { settings } from "./settings";
import { SpawnPointExtra, SPAWN_POINT } from "./spawnpoint";
import { TradeExtra } from "./structure/tradecenter";
import { test } from "./test";
realTime.install();



Promise.all([
    Lang.onLoad,
]).then(([lang])=>{
    itemLang.set('ko_KR');
}).catch(LOG.error_np);

Lang.load(require('@mcbe/lang/data/ko_KR'));
Lang.mergeLoad(require('../server_lib/lang/en_US'));
Lang.mergeLoad(require('../server_lib/lang/ko_KR'));










ipfilter.setTrafficLimit(settings.data.trafficLimit);
ipfilter.setTrafficLimitPeriod(settings.data.trafficLimitPeriod);

settings.onUpdate.on(data=>{
    User.admins.clear();
    for (const admin of data.admins)
    {
        User.admins.add(admin);   
    }
});

test();
initPvP();

function v(ptr:NativePointer)
{
    const way1 = new NativePointer(ptr);
    const way2 = ptr.clone();

}

User.install(class{
    constructor(public readonly user:User){}
    onMoveStart()
    {
        for (const msg of settings.data.welcomeMessage.split('\n'))
        {
            this.user.tellraw(msg);
        }
    }
    onFirstLogin()
    {
        spawnpoint(this.user.name, SPAWN_POINT);
    }
});

User.install(LogExtra);
User.install(SpawnPointExtra);
User.install(BanExtra);
User.install(LastConnection);
User.install(RegionComponent);
User.install(ZoneComponent);
User.install(Wallet);
// User.install(HardInventory);
User.install(SoftInventory);
User.install(WatchComponent);
User.install(Pusher);
User.install(NetherTop);
User.install(DDBlockExtra);

User.install(DigCounter);
User.install(AdminComponent);
User.install(TradeExtra);
User.install(TempBlockComponent);

blockEvent.install(portalBlock);
blockEvent.install({
    TARGET: [ID.respawn_anchor],
    onPlace(user, block){
        if (block.pos.dimension === DimensionId.Overworld)
        {
            block.destroy();
            return true;
        }
        return false;
    }
});
blockEvent.setNonPlaceable(CID.ballot);
// blockEvent.setUnsupported(ID.shulker_box);
// blockEvent.setUnsupported(ID.undyed_shulker_box);
User.unacquirable.add(CID.trade_add1);
User.unacquirable.add(CID.trade_add8);
User.unacquirable.add(CID.trade_add64);
User.unacquirable.add(CID.trade_sub1);
User.unacquirable.add(CID.trade_sub8);
User.unacquirable.add(CID.trade_sub64);
User.unacquirable.add(CID.trade_card_block);
User.unacquirable.add(CID.trade_submit);
User.unacquirable.add(CID.trade_question);

enableClearOld();
enableNightPvP();

// 시간마다 엔티티 삭제
setSchedule(4, 0, '엔티티 삭제(아이템, 흔한 몬스터)', true, ()=>{
    Promise.all([
        killEntities({type:ID.skeleton}),
        killEntities({type:ID.spider}),
        killEntities({type:ID.drowned}),
        killEntities({type:ID.zombie}),
        killEntities({type:ID.husk}),
        killEntities({type:ID.creeper}),
        killEntities({type:ID.item}),
    ]).then(entities=>{
        const count = entities.map(v=>v.length).reduce((a,b)=>a+b);
        tellrawAll([count+'개의 엔티티가 삭제되었어요']);
    });
});

// 여러가지
Entity.setAutoDestroy(EntityType.Item, ID.bedrock);
Entity.setAutoDestroy(EntityType.Item, ID.end_portal_frame);
Entity.onNew(EntityType.Entity, ID.fishing_hook, entity=>{
    const pos = entity.component.Position.data;
    // if (middleLock.containsXZ(pos) && pos.y > SPAWN_POINT.y + 5)
    // {
    //     entity.destroy();
    // }
});
Entity.onNew(EntityType.Entity, ID.arrow, entity=>{
    const pos = entity.component.Position.data;
    // if (middleLock.containsXZ(pos) && pos.y > SPAWN_POINT.y - 5)
    // {
    //     callAtNextTick(()=>{
    //         entity.destroy();
    //     });
    // }
});
// Entity.onNew(EntityType.Entity, ID.armor_stand, entity=>{
//     const pos = entity.component.Position.data;
//     entity.destroy();
//     createItem(ID.armor_stand, pos);
//     const {user} = User.getNearst(pos);
//     if (user) user.info('미지원 아이템');
// });

events.listen.PistonMovedBlock(data=>{
    const newPos = Vector3.make(data.block_position);
    const pistonPos = Vector3.make(data.piston_position);
    const dir = newPos.sub(pistonPos).normalize();
    let oldPos:Vector3;
    switch (data.piston_action)
    {
    case 'extended':
        oldPos = newPos.sub(dir);
        break;
    case 'retracted':
        oldPos = newPos.add(dir);
        break;
    default: 
        LOG.error({action:LOG.Action.PistonPush, upos:data.piston_position, pos:data.block_position, msg:data.piston_action});
        return;
    }

    const {user} = User.getNearst(oldPos);
    if (!user) return;

    const area = user.getTickingArea();
    const block = area.getBlock(newPos);
    if (!block) return;
    
    // Chest problem
    let flags = Container.getFlags(block.id);
    switch (flags)
    {
    case Container.INVALID: break;
    case Container.CHEST_ENDER: break;
    default:
        Container.onDestroy(user, flags, oldPos);
        execute(user.name).setblock(newPos, ID.air, 0, 'destroy');
        return;
    }

    // Region check
    const oldregions = new Set(Region.pick(oldPos));
    const newregions = new Set(Region.pick(newPos));
    for (const r of Region.pick(pistonPos))
    {
        oldregions.delete(r);
        newregions.delete(r);
    }
    if (newregions.size !== 0)
    {
        for (const r of newregions)
        {
            if (!r.canWrite(null, newPos))
            {
                if (restorePistonPush(user, block, pistonPos, oldPos)) return;
            }
        }
        for (const r of newregions)
        {
            if (r.onPistonPush(user, block, pistonPos, oldPos)) return;
        }
    }
    if (oldregions.size !== 0)
    {
        for (const r of oldregions)
        {
            if (!r.canWrite(null, oldPos))
            {
                if (restorePistonPush(user, block, pistonPos, oldPos)) return;
            }
        }
        for (const r of oldregions)
        {
            if (r.onPistonPush(user, block, pistonPos, oldPos)) return;
        }
    }

    blockEvent.onPistonPush.fire(user, block, pistonPos, oldPos);
});
events.listen.EntityUseItem(data=>{
    const user = User.getInstance(data.entity);
    if (!user) return;
    user.onUseItem(<UseMethod>data.use_method, Identifier.get(data.item_stack.item), data.item_stack.count)
});
// 
// PlaySound
// 
// WeatherChanged


setOnRuntimeErrorListener((stack, nativestack, lastSender)=>{
    const date = new Date();
    let log = '';
    log += stack;
    log += '\n';
    log += nativestack;
    log += '\n';
    if (lastSender)
    {
        log += 'Last sender: '+lastSender;
        log += '\n';
    }
    fs.appendFileSync(`../critical_error_${date.getFullYear()}_${date.getMonth()+1}_${date.getDate()}.log`, log);
});

updateTrafficLogFileName();