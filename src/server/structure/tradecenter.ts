
import Identifier from "@mcbe/identifier";
import ID from "@mcbe/identifier/id";
import { setblockWithoutError, fill, getItemCounts } from "@mcbe/command";
import { realTime } from "@mcbe/timer/realtime";
import { Store, Storage } from "@mcbe/store";
import { createItem } from "@mcbe/system_server";
import { SCORE_LIMIT } from "@mcbe/ruakr_const";
import { itemLang } from "@mcbe/lang";
import { Vector3, Box } from "krgeometry";
import { ItemList } from "@mcbe/item";
import { setFarBlock, setFarTicker } from "@mcbe/farticker";
import LOG from "@mcbe/ruakr_log";

import { User } from "@bdsx/ruakr_user";
import { Block } from "@bdsx/block";
import { restoreBlockSlow, restorePistonPush } from "@bdsx/restoreblock";

import { setSchedule } from "../../lib/timeschdule";
import { ArrayMap } from "../../lib/arraymap";

import { Region } from "../module/region";
// import { HardInventory } from "../module/hardinventory";
import { VAR_WALLET_MONEY, Wallet } from "../module/wallet";
import { CID } from "../customid";
import { DDBlockExtra } from "../ddblock";
import { SoftInventory } from "../module/softinventory";

export const DIAMOND_PRICE = 1000000;

const MINIMUM_MONEY = 5000000;
const TERRACOTA_DATA = [0,2,3,4,5];
const MAIN_ITEM = ID.diamond;

const SELL_ALL_FILTER = new Set<Identifier>([
    ID.skull,
    ID.arrow,
    
    CID.zone_maker_torch,
    CID.tempblock,
    CID.spawnportal,
]);

export class TradeExtra
{
    target:TradingBlock|null = null;
    expireTime:number = 0;
    count:number = 0;

    expireTest(target:TradingBlock):void
    {
        if (this.target !== target)
        {
            this.count = 0;
        }
        else if (realTime.now > this.expireTime)
        {
            this.count = 0;
        }
        this.expireTime = realTime.now + 30000;
        this.target = target;
    }
}

export const tradestore = new Store('$trade');

let trade_main:Storage;
let trade_price:Storage;
let trade_stock:Storage;
let trade_target:Storage;
let trade_min:Storage;
let trade_max:Storage;

export function priceRound(price:number):number
{
    if (price < 10) return Math.round(price);
    const v = Math.pow(10, Math.floor(Math.log10(price))) / 10;
    return Math.round(price / v) * v;
}

function priceToFixed(price:number, div:number):string
{
    let out = ((price / div) |0).toString();
    price %= div;
    if (price === 0) return out;
    out += '.';

    for (;;)
    {
        div /= 1000;
        const str = ((price / div) |0).toString();
        out += '0'.repeat(3 - str.length);
        out += str;
        price %= div;
        if (div === 1)
        {
            if (price !== 0) return out + '.' + (price * 10 | 0);
            return out;
        }
        if (price === 0) return out;
        out += ' ';
    }
}

export function priceToString(price:number):string
{
    price = Math.round(price * 10) / 10;
    // if (price >= 1000000000) return '§4'+priceToFixed(price, 1000000000)+'kD§f';
    if (price >= 1000000) return '§6'+priceToFixed(price, 1000000)+'D§f';
    // if (price >= 1000) return '§e'+priceToFixed(price, 1000)+'mD§f';
    if (price >= 1000) return '§e'+price+'µD§f';
    if (price === 0) return '§a0µD§f';
    return '§a'+price+'µD§f';
}

function makeId(id:Identifier, data:number):string
{
    const out = data > 0 ? id.minified+'/'+data : id.minified;
    console.assert(out.length <= SCORE_LIMIT, `${id} is too long (${out})`);;
    return out;
}

const allBlocks:TradingBlock[] = [];

const sellableItems = new ArrayMap<Identifier, TradingBlock>();

function textWidth(text:string):number
{
    let size = 0;
    for (let i=0;i<text.length;i++)
    {
        const chr = text.charCodeAt(i);
        size += (chr < 0x80) ? 1 : 2;
    }
    return size;
}

export const tradeCenter = {
	getMoney():number
	{
		return trade_main.get('money') || 0;
    },
    getDiamond():number
    {
        return trade_stock.get(MAIN_ITEM.minified) || 0;
    },
    removeDiamond(gold:number):boolean
    {
        const count = tradeCenter.getDiamond();
        if (gold > count) return false;
        trade_stock.remove(MAIN_ITEM.minified, gold);
        return true;
    },
	removeMoney(money:number):void
	{
		tradeCenter.addMoney(-money);
    },
    repackMoney(price:number):number
    {
        const money = tradeCenter.getMoney();
        if (money === 0) return 0;
        if (money - price >= MINIMUM_MONEY) return price;

        function unpack(money:number):number
        {
            return Math.exp((money - MINIMUM_MONEY) / MINIMUM_MONEY) * MINIMUM_MONEY;
        }
        function pack(packed:number):number
        {
            return Math.log(packed / MINIMUM_MONEY) * MINIMUM_MONEY + MINIMUM_MONEY;
        }

        let plane = money - MINIMUM_MONEY;
        let money_from = money;
        if (plane < 0)
        {
            plane = 0;
        }
        else
        {
            price -= plane;
            money_from = MINIMUM_MONEY;
        }
        const money_to = unpack(pack(money_from) - price);
        price = Math.max(Math.floor(money_from - money_to + plane), 0);
        return price;
    },
	addMoney(money:number):void
	{
        if (money === 0) return;

		let total = tradeCenter.getMoney();
		total += money;
		trade_main.set('money', total);
		if (total < 0)
		{
			LOG.error({action:LOG.Action.Assertion, msg:`trade center total minus: ${priceToString(money)}`});
        }
	
		if (money > 0)
		{
			const max = trade_main.get('money_max') || 0;
			if (total > max) trade_main.set('money_max', total);
		}
    },
    getBasePriceOf(item:Identifier, data:number = 0):number
    {
        const id = makeId(item, data);
        const basePrice = trade_price.get(id);
        if (basePrice === undefined) return -1;
        return basePrice;
    },
    getSellings(user:User):ItemList
    {
        const sellings = new ItemList;
        for (const item of user.extra(SoftInventory).main())
        {
            if (!sellableItems.has(item.id)) continue;
            if (SELL_ALL_FILTER.has(item.id)) continue;
            sellings.add(item.id, item.count);
        }
        return sellings;
    },
    async testSellAll(user:User, msg:string):Promise<void>
    {
        const sellings = tradeCenter.getSellings(user);
        if (sellings.size() === 0)
        {
            user.infoFast(`전부 팔기 - 팔 것 없음`);
            return;
        }

        let text = `전부 팔기 - ${msg}\n`;
        let lineLen = 0;

        for (const {id, count} of sellings.values())
        {
            const itext = `${itemLang.get(id)} ${count}개, `;
            text += itext;
            lineLen += textWidth(itext);
            if (lineLen > 20)
            {
                lineLen = 0;
                text += '\n';
            }
        }
        user.infoWith(text, 0, 200, 20);
    },
    async sellAll(user:User):Promise<void>
    {
        const sellings = tradeCenter.getSellings(user);
        if (sellings.size() === 0)
        {
            user.infoFast(`전부 팔기 - 팔 것 없음`);
            return;
        }
        let total = 0;
        for (let {id, count} of sellings.values())
        {
            const blocks = sellableItems.get(id);
            if (!blocks) continue;
            for (const block of blocks)
            {
                const [selledPrice, selledCount] = await block.sell(user, count);
                if (selledCount === 0) continue;
                user.tellraw(`§e${block.targetName} ${selledCount}개 - ${priceToString(selledPrice)}`);
                count -= selledCount;
                total += selledPrice;
                if (count <= 0) break;
            }
        }
        user.infoFast(`전부 팔기 완료 - 총액 ${priceToString(total)}`);
    },
};

export class CardBlock extends Region
{
    constructor(pos:Vector3)
    {
        super('카드 생성기', Box.fromVector(pos, pos), pos.y);
    }

    build():void
    {
        setFarBlock(this.cube.getPoint1(), CID.trade_card_block);
    }

    onPistonPush(user:User, block:Block, pistonPos:Vector3, oldPos:Vector3):boolean
    {
        return restorePistonPush(user, block, pistonPos, oldPos);
    }

    onInterect(user:User, block:Block):boolean
    {
        user.infoFast(`현재: ${priceToString(user.storage.get(VAR_WALLET_MONEY)||0)}`);
        return true;
    }

    onDestroy(user:User, block:Block):void
    {
        restoreBlockSlow(user, block);
        createItem(CID.trade_card, block.pos.add(Vector3.HALF));
    }
}

export class TradingBlock extends Region
{    
    protected readonly shortId:string;
	public readonly targetDV:number[];
	public readonly centerBlock:Identifier;
	public readonly centerBlockDV:number;
	public readonly targetName:string;

    constructor(
        public readonly position:Vector3,
        public readonly startPrice:number,
        public readonly target:Identifier, 
        targetDV?:number[],
        centerBlock?:Identifier,
		centerBlockDV?:number)
    {
        super(itemLang.get(target, targetDV ? targetDV[0] : 0)+' 교환기', 
            new Box(position.x-1, position.y, position.z, 
                position.x+1, position.y+2, position.z),
            position.y
		);
		this.targetName = this.name.substr(0, this.name.length - 4);
        
		this.targetDV = targetDV === undefined ? [0] : targetDV;

		if (centerBlock)
		{
			this.centerBlock = centerBlock;
			this.centerBlockDV = centerBlockDV || 0;
		}
		else
		{
			this.centerBlock = target;
			this.centerBlockDV = centerBlockDV !== undefined ? centerBlockDV : Math.max(this.targetDV[0], 0);
		}

		this.shortId = makeId(target, this.targetDV[0]);
        allBlocks.push(this);
        sellableItems.push(target, this);
	}
	
	updatePrice():void
	{
    }
    
    async sellAll(user:User):Promise<[number, number]>
    {
        const sellCount = await user.takeItems(this.target, this.targetDV);
        if (sellCount <= 0) return [0, 0];
        const price = this.getSellPrice(sellCount);
        user.infoFast(`§7${this.targetName} ${sellCount}개 - ${priceToString(price)}`);
        user.extra(Wallet).add(price);
        trade_stock.add(this.shortId, sellCount);
        return [price, sellCount];
    }

    async sell(user:User, sellCount:number):Promise<[number, number]>
    {
        const wallet = user.extra(Wallet);
        if (sellCount <= 0)
        {
            user.infoFast(`${this.targetName}\n판매 개수를 정해주세요`);
            return [0, 0];
        }
        const maxCount = user.extra(SoftInventory).inventory.getCount(this.target);
        if (sellCount > maxCount) sellCount = maxCount;
        if (sellCount <= 0)
        {
            user.infoFast(`${this.targetName} 판매 실패\n하나도 없음`);
            return [0, 0];
        }
        const count = await user.takeItems(this.target, this.targetDV, sellCount);
        if (count <= 0)
        {
            user.infoFast(`${this.targetName} 판매 실패\n하나도 없음`);
            return [0, 0];
        }
        const price = this.getSellPrice(count);
        LOG.verbose({user, action:LOG.Action.Sell, item: this.target, count, msg: `with ${priceToString(price)}`});
        if (price === 0)
        {
            user.infoFast(`${this.targetName} ${count}개 기부 완료`);
        }
        else
        {
            user.infoFast(`${this.targetName} ${count}개 판매 완료\n개당 ${priceToString(price/count)} / 전체 ${priceToString(price)}`);
            wallet.add(price);
        }
        trade_stock.add(this.shortId, count);
        this.onSubmit(-price);
        return [price, count];
    }

    async buy(user:User, buyCount:number):Promise<[number, number]>
    {
        const extra = user.extra(TradeExtra);
        extra.expireTest(this);
        const wallet = user.extra(Wallet);
        if (extra.count === 0)
        {
            user.infoFast(`${this.targetName}\n구매 개수를 정해주세요`);
            return [0, 0];
        }

        const stock = this.getStock();
        if (stock !== -1)
        {
            if (buyCount > stock) buyCount = stock;
            if (stock <= 0)
            {
                user.infoFast(`${this.targetName} 구매 실패\n제고 부족`);
                return [0, 0];
            }
        }
        const price = this.getBuyPrice(buyCount);
        const money = wallet.get();
        if (money < price)
        {
            user.infoFast(`${this.targetName} 구매 실패\n금액 부족(가격: ${priceToString(price)}`);
            return [0, 0];
        }
        wallet.set(money - price);
        LOG.verbose({user, action:LOG.Action.Buy, item:this.target, count:buyCount, msg: `with ${priceToString(price)}`});
        user.infoFast(`${this.targetName} ${buyCount}개 구매 완료\n개당 ${priceToString(price/buyCount)} / ${priceToString(price)}`);
        user.giveItem(this.target, Math.max(this.targetDV[0], 0), buyCount);
        trade_stock.remove(this.shortId, buyCount);
        this.onSubmit(price);
        return [price, buyCount];
    }

	test():void
	{
	}

    getStock():number
    {
        return trade_stock.get(this.shortId) || 0;
    }

    getOneBuyPrice():number
    {
        return this.startPrice;
    }
    
    getBuyPrice(count:number):number
    {
        return count * this.startPrice;
    }

    getMaxBuyCount(money:number):number
    {
        return Math.floor(money / this.startPrice);
    }

    getSellPrice(count:number):number
    {
        return count * this.startPrice;
    }

	build():this
    {
        const U = this.position.add(Vector3.Y.mul(2));
        const C = this.position.add(Vector3.Y);
        const D = this.position;

        setblockWithoutError(C, this.centerBlock, this.centerBlockDV);
        setblockWithoutError(U.sub(Vector3.X), CID.trade_add1);
        setblockWithoutError(U, CID.trade_add8);
        setblockWithoutError(U.add(Vector3.X), CID.trade_add64);
        
        setblockWithoutError(D.sub(Vector3.X), CID.trade_sub1);
        setblockWithoutError(D, CID.trade_sub8);
        setblockWithoutError(D.add(Vector3.X), CID.trade_sub64);

        setblockWithoutError(C.sub(Vector3.X), CID.trade_question);
        setblockWithoutError(C.add(Vector3.X), CID.trade_submit);

        return this;
    }

    async addCount(user:User, count:number):Promise<void>
    {
        const extra = user.extra(TradeExtra);
        extra.expireTest(this);
        count = extra.count += count;

        if (count === 0)
        {
            user.infoFast(`${this.targetName} 0개 구매/판매`);
        }
        else if (count < 0)
        {
            const count1 = await getItemCounts(user.name, this.target, this.targetDV);
            const count2 = user.extra(SoftInventory).inventory.getCount(this.target);
            const max = Math.min(count1, count2);
            if (max === 0)
            {
                extra.count = 0;
                user.infoFast(`${this.targetName} 0개 판매\n하나도 없음`);
            }
            else
            {
                let error:string = '';
                count = -count;
                if (count > max)
                {
                    count = max;
                    extra.count = -max;
                    error = '\n소유량 전부';
                }
                const total = this.getSellPrice(count);
                user.infoFast(`${this.targetName} ${count}개 판매\n개당 ${priceToString(total/count)} / 전체 ${total ? priceToString(total) : '0💎(기부)'}${error}`);
            }
        }
        else
        {
            const wallet = user.extra(Wallet);
            const money = wallet.get();
            const max = this.getMaxBuyCount(money);
            if (max <= 0)
            {
                extra.count = 0;
                const buyPrice = this.getOneBuyPrice();
                let error = '';
                if (this.getStock() === 0)
                {
                    error += `제고 없음`;
                }
                if (money < buyPrice)
                {
                    if (error) error += ', ';
                    error += `금액 부족(${priceToString(buyPrice)})`;
                }
                user.infoFast(`${this.targetName} 구매 불가능\n${error || '원인 불명/오류'}`);
                return;
            }
            let error:string = '';
            if (count > max)
            {
                extra.count = count = max;
                
                const stock = this.getStock();
                if (max === stock)
                {
                    error = '\n제고 끝';
                }
                else
                {
                    error = '\n최대 금액';
                }
            }
            const total = this.getBuyPrice(count);
            user.infoFast(`${this.targetName} ${count}개 구매\n개당 ${priceToString(total/count)} / 전체 ${priceToString(total)}${error}`);
        }
    }

    showPrice(user:User):void
    {
        const extra = user.extra(TradeExtra);
        extra.target = null;
        const price = this.getOneBuyPrice();
        let buyerr = '';
        let stockText = '';
        if (this.target !== MAIN_ITEM)
        {
            const stock = this.getStock();
            if (stock === 0) stockText = ', 제고 없음';
            else if (stock !== -1) stockText = `, 제고 ${stock}개`;

            const m = tradeCenter.getMoney();
            if (m === 0) buyerr = '(기부 받음)';
            else if (m < MINIMUM_MONEY) buyerr = '(재정난)';
        }
        user.infoFast(`${this.targetName}${stockText}\n가격 ${priceToString(price)}\n매입 ${priceToString(this.getSellPrice(1))}${buyerr}`);
    }

    async submit(user:User):Promise<void>
    {
        const extra = user.extra(TradeExtra);
        extra.expireTest(this);
        if (extra.count === 0)
        {
            user.infoFast(`${this.targetName}\n구매/판매 개수를 정해주세요`);
            return;
        }
        if (extra.count < 0)
        {
            await this.sell(user, -extra.count);
        }
        else
        {
            await this.buy(user, extra.count);
        }
        extra.target = null;
    }

    onSubmit(price:number):void
    {
    }

    activeButton(user:User, block:Block):boolean
    {
        switch (block.id)
        {
        case CID.trade_add1:
            this.addCount(user, 1);
            break;
        case CID.trade_add8:
            this.addCount(user, 8);
            break;
        case CID.trade_add64:
            this.addCount(user, 64);
            break;
        case CID.trade_sub1:
            this.addCount(user, -1);
            break;
        case CID.trade_sub8:
            this.addCount(user, -8);
            break;
        case CID.trade_sub64:
            this.addCount(user, -64);
            break;
        case CID.trade_submit:
            this.submit(user);
            break;
        case CID.trade_question:
            this.showPrice(user);
            break;
        default:
            return false;
        }
        return true;
    }

    onInterect(user:User, block:Block):boolean
    {
        this.activeButton(user, block);
        return true;
    }

    onDestroy(user:User, block:Block):void
    {
        this.activeButton(user, block);
        restoreBlockSlow(user, block, 300);
    }

    onPistonPush(user:User, block:Block, pistonPos:Vector3, oldPos:Vector3):boolean
    {
        return restorePistonPush(user, block, pistonPos, oldPos);
    }
    
    static updatePriceAll():void
    {
        for (const block of allBlocks)
        {
            block.updatePrice();
        }
    }
    
    static intersect(cube:Box):boolean
    {
        for (const block of allBlocks)
        {
            if (block.cube.intersect(cube)) return true;
        }
        return false;
    }
}

class TradingBlockSelling extends TradingBlock
{
    constructor(
        position:Vector3,
		startPrice:number,
        target:Identifier, 
        targetDV?:number[],
        centerBlock?:Identifier,
		centerBlockDV?:number)
    {
        super(position, startPrice, target, targetDV, centerBlock, centerBlockDV);
	}

	getStock():number
	{
		return -1;
	}
	
    onSubmit(money:number):void
    {
        tradeCenter.addMoney(money);
    }
    
    getSellPrice(count:number):number
    {
        return tradeCenter.repackMoney(priceRound(this.startPrice / BUY_WEIGHT) * count);
    }

}

const SAME_VALUE_MIN = 0.5;
const SAME_VALUE_MAX = 1.5;
const PRICE_MUL_MAX = 0.8; // when higher stock, maximum multiply
const PRICE_MUL_MIN = 1.2; // when lower stock, minimum multiply
const BUY_WEIGHT = 1.1;
const MAX_PRICE_WEIGHT_SELL = 3;
const MAX_PRICE_WEIGHT_SELL_TOTAL = 1/50;


function clamp(min:number, v:number, max:number):number
{
    if (v <= min) return min;
    if (v >= max) return max;
    return v;
}

function priceMult(price:number, mult:number):number
{
    const oriprice = priceRound(price);
    if (mult === 1) return oriprice;
    let newprice = priceRound(price*mult);
    if (newprice === 0) return 0;
    if (newprice === oriprice) newprice ++;
    return newprice;
}

class TradingCalculate
{
    public readonly basePrice:number;
    public readonly target:number;

    constructor(public readonly block:TradingBlockAuto)
    {
        this.basePrice = block.getBasePrice();
        this.target = block.getTargetStock();
    }
    
    getLowerPrice(stockAt:number):number
    {
        const c = SAME_VALUE_MIN * PRICE_MUL_MIN;
        return this.basePrice * this.target * c / Math.max(stockAt, 0.5);
    }
    
    getHigherPrice(stockAt:number):number
    {
        return Math.pow(0.25, stockAt/this.target - SAME_VALUE_MAX) * this.basePrice * PRICE_MUL_MAX;
    }
    
    getMiddlePrice(stockAt:number):number
    {
        const c = (PRICE_MUL_MAX-PRICE_MUL_MIN)/(SAME_VALUE_MAX-SAME_VALUE_MIN);
        return ((stockAt - this.target*SAME_VALUE_MIN) * c*this.target + PRICE_MUL_MIN)*this.basePrice;
    }
    
    getPriceAt(stockAt:number):number
    {
        const sameMin = Math.round(this.target * SAME_VALUE_MIN);
        const sameMax = Math.round(this.target * SAME_VALUE_MAX);
        if (stockAt < sameMin) return this.getLowerPrice(stockAt);
        if (stockAt < sameMax) return this.getMiddlePrice(stockAt);
        return this.getHigherPrice(stockAt);
    }

    calc(from:number, to:number, mult:number = 1, minPrice:number=0, maxPrice:number=Infinity):number
    {
        const sameMin = Math.round(this.target * SAME_VALUE_MIN);
        const sameMax = Math.round(this.target * SAME_VALUE_MAX);
        
        let price = 0;
        const sameFrom = Math.max(sameMin, from);
        const sameTo = Math.min(sameMax, to);
        
        if (to > sameMin && from < sameMax)
        {
            price += (sameTo - sameFrom) * priceMult(this.basePrice, mult);
        }

        const higher_from = Math.max(sameMax, from);
        for (let i=higher_from;i<to;i++)
        {
            price += priceMult(this.getHigherPrice(i), mult);
        }
        const lower_to = Math.min(sameMin, to);
        for (let i=from;i<lower_to;i++)
        {
            const oneprice = this.getLowerPrice(i);
            price += Math.max(priceMult(Math.min(oneprice, maxPrice), mult), minPrice);
        }
        return price;
    }

    count(money:number, mult:number=1):number
    {
        const startStock = this.block.getStock();
        if (startStock <= 0) return 0;

        let stock = startStock;
        const sameMin = Math.round(this.target * SAME_VALUE_MIN);
        const sameMax = Math.round(this.target * SAME_VALUE_MAX);
        
        while (stock > sameMax)
        {
            money -= priceMult(this.getHigherPrice(--stock), mult);
            if (money < 0) return startStock - stock - 1;
        }
        if (stock >= sameMin)
        {
            const price = priceMult(this.basePrice, mult);
            const count = money / price | 0;
            
            const remaining = stock - sameMin;
            if (count <= remaining)
            {
                return startStock - stock + count;
            }
            stock -= remaining;
            money -= price * remaining;
        }
        if (stock === 0) return startStock;
        for (;;)
        {
            money -= priceMult(this.getLowerPrice(--stock), mult);
            if (money < 0) return startStock - stock - 1;
            if (stock === 0) return startStock;
        }
    }
}

export class TradingBlockAuto extends TradingBlockSelling
{
    constructor(
        position:Vector3,
		price:number,
		targetStock:number,
        target:Identifier, 
        targetDV?:number[],
        centerBlock?:Identifier,
        centerBlockDV?:number,
        private readonly minimumStockChange:number = 0)
    {
        super(position, price, target, targetDV, centerBlock, centerBlockDV);
        console.assert(minimumStockChange >= 0);
		
		trade_target.setDefault(this.shortId, targetStock);
		trade_price.setDefault(this.shortId, price);	
    }

	getStock():number
	{
		return trade_stock.get(this.shortId) || 0;
	}

    updatePrice():void
    {
        const stock = this.getStock();
        const target = Math.max(this.getTargetStock(), 3);
        const min = this.getStockMin();
        const max = this.getStockMax();
        const basePrice = this.getBasePrice();
        const calc = new TradingCalculate(this);

        let newPrice = 0;
        if (min === 0 && max === 0 && stock === 0)
        {
            newPrice = basePrice;
        }
        else
        {
            const newTarget = Math.max(clamp(Math.floor(target*0.9), (max - min)*2, Math.round(target*1.5)), 3);
            this._setStockTarget(newTarget);

            newPrice = (calc.getPriceAt(min) + calc.getPriceAt(max)) / 2;
            newPrice = Math.max(Math.round(clamp(basePrice*0.8, newPrice, basePrice*1.2)), 1);
            this._setBasePrice(newPrice);
        }
        
        this._setStockMax(stock);
        this._setStockMin(stock);
        
        // if (stock < target)
        // {
        //     let chance = 0;
        //     if (stock === 0 && max === 0 && min === 0)
        //     {
        //         chance = this.minimumStockChange;
        //     }
        //     else
        //     {
        //         chance = Math.max(10000 / newPrice, this.minimumStockChange);
        //     }
        //     let count = Math.floor(chance);
        //     if (Math.random() < chance - count) count ++;
        //     trade_stock.add(this.shortId, Math.min(count, 32, target - stock));
        // }
    }

    getStockMin():number
    {
        return trade_min.get(this.shortId) || 0;
    }
    
    getStockMax():number
    {
        return trade_max.get(this.shortId) || 0;
    }

    getTargetStock():number
    {
        return trade_target.get(this.shortId) || 0;
    }

    getBasePrice():number
    {
        return trade_price.get(this.shortId) || 0;
    }

    onSubmit(price:number):void
    {
        super.onSubmit(price);
        const count = this.getStock();
        if (count < this.getStockMin()) this._setStockMin(count);
        else if (count > this.getStockMax()) this._setStockMax(count);
    }

    getOneBuyPrice():number
    {
        let stock = this.getStock();
        if (stock > 0) stock --;
        const calc = new TradingCalculate(this);
        return calc.calc(stock, stock+1, BUY_WEIGHT, 1);
    }

    getBuyPrice(count:number):number
    {
        const stock = this.getStock();
        const calc = new TradingCalculate(this);
        return calc.calc(Math.max(stock - count, 0), stock, BUY_WEIGHT, 1);
    }

    getMaxBuyCount(money:number):number
    {
        return new TradingCalculate(this).count(money, BUY_WEIGHT);
    }
    
    getSellPrice(count:number):number
    {
        const stock = this.getStock();
        const calc = new TradingCalculate(this);
        const maxPrice = Math.min(
            calc.basePrice * MAX_PRICE_WEIGHT_SELL, 
            tradeCenter.getMoney() * MAX_PRICE_WEIGHT_SELL_TOTAL);
        const price = calc.calc(stock, stock + count, 1, 0, maxPrice);
        return tradeCenter.repackMoney(price);
    }

    private _setStockMin(count:number):void
    {
        trade_min.set(this.shortId, count);
    }
    
    private _setStockMax(count:number):void
    {
        trade_max.set(this.shortId, count);
    }

    private _setStockTarget(count:number):void
    {
        trade_target.set(this.shortId, count);
    }

    private _setBasePrice(price:number):void
    {
        trade_price.set(this.shortId, price);
    }

}

DDBlockExtra.install([CID.trade_sell_all], {
    onCheck(user:User, destroy:boolean):boolean
    {
        tradeCenter.testSellAll(user, destroy ? '한번 더 부숴주세요!' : '블럭을 부숴주세요!');
        return true;
    },
    onSubmit(user:User):boolean
    {
        tradeCenter.sellAll(user).catch(LOG.error_obj);
        return false;
    }
});

Store.onLoad.then(data=>{
    
    trade_main = tradestore.create('main');
    trade_price = tradestore.create('price');
    trade_stock = tradestore.create('stock');
    trade_target = tradestore.create('target');
    trade_min = tradestore.create('min');
    trade_max = tradestore.create('max');

    trade_price.reminify();
    trade_stock.reminify();
    trade_target.reminify();
    trade_min.reminify();
    trade_max.reminify();

    const diamond_price = trade_main.get('price') || DIAMOND_PRICE;
    if (diamond_price !== DIAMOND_PRICE)
    {
        const mul = DIAMOND_PRICE / diamond_price;
        trade_main.set('price', DIAMOND_PRICE);

        let totalMoney = 0;
        for (const [name, price] of trade_price.entires())
        {
            trade_price.set(name, Math.round(price * mul));
            trade_max.set(name, Math.round(trade_max.get(name)! * mul | 0));
            trade_min.set(name, Math.round(trade_min.get(name)! * mul | 0));
        }

        for (const player of User.store.values())
        {
            const value = player.get(VAR_WALLET_MONEY);
            if (value === undefined) continue;
            const revalue = Math.round(value * mul);
            totalMoney += revalue;
            player.set(VAR_WALLET_MONEY, revalue);
        }
        
        const diamondCount = totalMoney / DIAMOND_PRICE | 0;
        trade_stock.set(ID.diamond.minified, diamondCount); // change total
        
        const remainedMoney = totalMoney - diamondCount * DIAMOND_PRICE;
        const newmoney = Math.round((trade_main.get('money')!|0) * mul) - remainedMoney;
        trade_main.set('money', newmoney);
        trade_main.set('money_max', newmoney);
        trade_main.delete('money_min');
    }

    const SHOP_MULTIPLY = 40;

    type TradingBlockParams = [number, number, number, Identifier, (number[]|number)?, Identifier?, number?, number?]|null;

    const MAIN = 0;
    const AUTO = 1;
    const STAT = 2;

    const structure:TradingBlockParams[][][] = [
        [
            [
                // 1F - 0
                [STAT, 1000, -1,    	CID.zone_maker_torch],
                [STAT, 200000, -1,		CID.tempblock],
                [AUTO, 10000, 64,		ID.experience_bottle, 0,    CID.trade_question, 0, 10],
            ],
            [
				// 1F - 1
				[MAIN, DIAMOND_PRICE/SHOP_MULTIPLY, 20,MAIN_ITEM, -1,  	ID.diamond_ore],
				[AUTO, 50, 64,			ID.coal, 0, 		ID.coal_ore],
				[AUTO, 50, 64,		    ID.coal, 1,         ID.coal_ore],
				[AUTO, 200, 50,			ID.iron_ingot, -1, 	ID.iron_ore],
                [AUTO, 3000, 20,    	ID.gold_ingot, -1,	ID.gold_ore],
				[AUTO, 100, 50,			ID.dye, 4, 			ID.lapis_ore],
				[AUTO, 10, 50,			ID.redstone, 0, 	ID.redstone_ore],
                [AUTO, 10000, 20,		ID.emerald, 0, 		ID.emerald_ore]
			],
			[
			    // 1F - 2
				[AUTO, 50, 500,		ID.netherrack],
				[AUTO, 200, 100,	ID.magma],
				[AUTO, 200, 100,	ID.soul_sand],
				[AUTO, 200, 100,	ID.glowstone],
				[AUTO, 20, 100,		ID.quartz, 0, ID.quartz_ore],
				[AUTO, 300, 100,	ID.nether_brick],
				[AUTO, 300, 100,	ID.red_nether_brick],
				[AUTO, 2000, 50,	ID.nether_wart, 0, CID.trade_question],
			],
			[
				// 1F - 3
				[AUTO, 2, 100,		ID.cobblestone],
				[AUTO, 5, 500,		ID.stone, -1],
				[AUTO, 2, 500,		ID.dirt],
				[AUTO, 10, 100,		ID.sand, 0, ID.sandstone, 3],
				[AUTO, 100, 100,	ID.glass],
				[AUTO, 10, 100,		ID.gravel, 0, CID.trade_question],
				[AUTO, 20, 100,		ID.flint, 0, CID.trade_question],
				[AUTO, 100, 50,		ID.obsidian],
			],
			[
				// 1F - 4
				[AUTO,	30, 100,	ID.log],
				[AUTO,	100, 10,	ID.log, 1],
				[AUTO,	30, 100,	ID.log, 2],
				[AUTO,	100, 10,	ID.log, 3],
				[AUTO,  100, 10,	ID.log2],
                [AUTO,	100, 10,	ID.log2, 1],
                null,
			],
			[
				// 1F - 5
				[AUTO,	200, 50,	ID.wheat, 0, CID.trade_question],
				[AUTO,	2000, 50,	ID.carrot, 0, CID.trade_question],
				[AUTO,	2000, 50,	ID.potato, 0, CID.trade_question],
                [AUTO,	600, 100,	ID.baked_potato, -1, CID.trade_question],
				[AUTO,	2000, 50,	ID.beetroot, 0, CID.trade_question],
				[AUTO,	2000, 50,	ID.pumpkin],
                [AUTO,	2000, 50,	ID.melon, 0, ID.melon_block],
                null,
			],
			[
				// 1F - 6
                [AUTO,	600, 100,	ID.bread, 0, CID.trade_question],
				[AUTO,	800, 100,	ID.cooked_chicken, -1, CID.trade_question],
				[AUTO,	1200, 100,	ID.muttoncooked, -1, CID.trade_question],
				[AUTO,	1500, 100,	ID.cooked_porkchop, -1, CID.trade_question],
				[AUTO,	1500, 100,	ID.cooked_beef, -1, CID.trade_question],
                [AUTO,	1500, 100,	ID.cooked_rabbit, -1, CID.trade_question],
                [AUTO,	800, 100,	ID.cooked_fish, -1, CID.trade_question],
                [AUTO,	800, 100,	ID.cooked_salmon, -1, CID.trade_question],
			],
			[
				// 1F - 7
				[AUTO,	100, 50,	ID.wool, 0],
				[AUTO,	1000, 50,	ID.wool, 1],
				[AUTO,	1000, 50,	ID.wool, 2],
				[AUTO,	1000, 50,	ID.wool, 3],
				[AUTO,	1000, 50,	ID.wool, 4],
				[AUTO,	1000, 50,	ID.wool, 5],
				[AUTO,	1000, 50,	ID.wool, 6],
				[AUTO, 	1000, 50,	ID.wool, 7],
			],
			[
				// 1F - 8
				[AUTO,	1000, 50,	ID.wool, 8],
				[AUTO,	1000, 50,	ID.wool, 9],
				[AUTO,	1000, 50,	ID.wool, 10],
				[AUTO,	1000, 50,	ID.wool, 11],
				[AUTO,	1000, 50,	ID.wool, 12],
				[AUTO,	1000, 50,	ID.wool, 13],
				[AUTO,	1000, 50,	ID.wool, 14],
				[AUTO,	1000, 50,	ID.wool, 15],
			],
			[
				// 1F - 9
				[AUTO,	1000, 50,	ID.red_flower, 0, CID.trade_question],
				[AUTO,	1000, 50,	ID.red_flower, 1, CID.trade_question],
				[AUTO,	1000, 50,	ID.red_flower, 2, CID.trade_question],
				[AUTO,	1000, 50,	ID.red_flower, 3, CID.trade_question],
				[AUTO,	1000, 50,	ID.red_flower, 4, CID.trade_question],
				[AUTO,	1000, 50,	ID.red_flower, 5, CID.trade_question],
				[AUTO,	1000, 50,	ID.red_flower, 6, CID.trade_question],
				[AUTO,	1000, 50,	ID.red_flower, 7, CID.trade_question],
			],
			[
				// 1F - 10
				[AUTO,	1000, 50,	ID.red_flower, 8, CID.trade_question],
				[AUTO,	1000, 50,	ID.red_flower, 9, CID.trade_question],
				[AUTO,	1000, 50,	ID.red_flower, 10, CID.trade_question],
				[AUTO,	1000, 50,	ID.yellow_flower, 0, CID.trade_question],
				[AUTO,	1000, 50,	ID.double_plant, 0, CID.trade_question],
				[AUTO,	1000, 50,	ID.double_plant, 1, CID.trade_question],
				[AUTO,	1000, 50,	ID.double_plant, 4, CID.trade_question],
				[AUTO,	1000, 50,	ID.double_plant, 5, CID.trade_question],
			],
		],
		[
			[
                // B1F - 0
            ],
			[
				// B1F - 1
				[AUTO,	500000, 3,	ID.skull, 1, CID.trade_question],
				[AUTO, 	500000, 3,	ID.skull, 3, CID.trade_question, 0, 0.5],
				[AUTO,	500000, 3,	ID.skull, 5, CID.trade_question],
				[AUTO,	500000, 3,	ID.skull, 0, CID.trade_question],
				[AUTO,	500000, 3,	ID.skull, 2, CID.trade_question],
				[AUTO,	500000, 3,	ID.skull, 4, CID.trade_question],
                [AUTO,	500000, 3,	ID.bell, -1, CID.trade_question],
			],
			[
				// B1F - 2
				[AUTO, 	500, 5,		ID.waterlily, 0, CID.trade_question],
				[AUTO, 	500, 5,		ID.pufferfish, 0, CID.trade_question],
				[AUTO, 	50, 64,		ID.fish, 0, CID.trade_question],
				[AUTO, 	50, 64,		ID.salmon, 0, CID.trade_question],
				[AUTO, 	200, 10,	ID.clownfish, 0, CID.trade_question],
				[AUTO, 	500, 10,	ID.nautilus_shell, 0, CID.trade_question],
			],
			[
				// B1F - 3
				[AUTO,	10, 100,	ID.stone, 1],
				[AUTO,	10, 100,	ID.stone, 3],
				[AUTO,	10, 100,	ID.stone, 5],
				[AUTO,	300, 100,	ID.clay],
				[AUTO,	100, 100,	ID.sandstone],
				[AUTO,	200, 100,	ID.sand, 1, ID.red_sandstone, 3],
				[AUTO,	200, 100,	ID.red_sandstone],
				[AUTO,	2000, 50,	ID.cactus, 0, CID.trade_question],
			],
			[
				// B1F - 4
				[AUTO,	300, 50,	ID.sapling, 0, CID.trade_question],
				[AUTO,	1000, 50,	ID.sapling, 1, CID.trade_question],
				[AUTO,	300, 50,	ID.sapling, 2, CID.trade_question],
				[AUTO,	1000, 50,	ID.sapling, 3, CID.trade_question],
				[AUTO,	1000, 50,	ID.sapling, 4, CID.trade_question],
				[AUTO,	1000, 50,	ID.sapling, 5, CID.trade_question],
			],
			[
				// B1F - 5
				[AUTO,	100, 50,	ID.wheat_seeds, 0, CID.trade_question],
				[AUTO,	2000, 50,	ID.beetroot_seeds, 0, CID.trade_question],
				[AUTO,	2000, 50,	ID.pumpkin_seeds, 0, CID.trade_question],
				[AUTO,	2000, 50,	ID.melon_seeds, 0, CID.trade_question],
				[AUTO,	2000, 50,	ID.sweet_berries, 0, CID.trade_question],
				[AUTO,	2000, 50,	ID.dye, 3, CID.trade_question],
				[AUTO,	1000, 50,	ID.brown_mushroom, 0, ID.brown_mushroom_block, 14],
				[AUTO,	1000, 50,	ID.red_mushroom, 0, ID.red_mushroom_block, 14],
			],
			[
				// B1F - 6
				[AUTO,	100, 100,	ID.egg, 0, CID.trade_question],
				[AUTO,	500, 100,	ID.chicken, 0, CID.trade_question],
				[AUTO,	800, 100,	ID.muttonraw, 0, CID.trade_question],
				[AUTO,	1000, 100,	ID.porkchop, 0, CID.trade_question],
				[AUTO,	1000, 100,	ID.beef, 0, CID.trade_question],
				[AUTO,	1000, 100,	ID.rabbit, 0, CID.trade_question],
				[AUTO,	200, 100,	ID.rabbit_hide, 0, CID.trade_question],
				[AUTO,	1000, 30,   ID.rabbit_foot, 0, CID.trade_question],
			],
			[
				// B1F - 7
				[AUTO,	1000, 50,	ID.tallgrass, 1, CID.trade_question],
				[AUTO,	1000, 50,	ID.tallgrass, 2, CID.trade_question],
				[AUTO,	100, 500,	ID.grass],
				[AUTO, 	200, 100,	ID.snowball, 0, ID.snow],
				[AUTO,	200, 100,	ID.ice],
				[AUTO,	300, 100,	ID.packed_ice],
				[AUTO,	300, 100,	ID.blue_ice],
			],
			[
				// B1F - 8
				[AUTO,	5, 400,		ID.end_stone],
				[AUTO,	50, 400,	ID.end_bricks],
				[AUTO,	500, 100,	ID.purpur_block],
				[AUTO,	2000, 50,	ID.chorus_fruit, 0, CID.trade_question],
			],
			[
				// B1F - 9
				[AUTO,	3000, 10,	ID.turtle_shell_piece],
				[AUTO,	800, 100,	ID.prismarine, 0],
				[AUTO,	2000, 100,	ID.prismarine, 1],
				[AUTO,	1000, 100,	ID.prismarine, 2],
				[AUTO,	3000, 20,	ID.sponge],
				[AUTO, 	100000, 3,	ID.heart_of_the_sea, 0, CID.trade_question],
			],
			[
				// B1F - 10
				[AUTO,	2000, 50,	ID.dye, 0, CID.trade_question],
				[AUTO,	1000, 100,	ID.sea_pickle, 0, CID.trade_question],
				[AUTO,	500, 100,	ID.kelp, 0, CID.trade_question],
				[AUTO,	500, 100,	ID.dried_kelp, -1, CID.trade_question],
				[AUTO,	1000, 100,	ID.seagrass, 0, CID.trade_question],
			],
		],
		[
			[
                // B2F - 0
            ],
			[
				// 2F - 1
				[AUTO,	100, 30,	ID.blaze_rod, 0, CID.trade_question],
				[AUTO,	1000, 20,	ID.ghast_tear, 0, CID.trade_question],
				[AUTO,	400, 30,	ID.ender_pearl, 0, CID.trade_question],
				[AUTO,	200, 100,	ID.spider_eye, 0, CID.trade_question],
				[AUTO,	200, 100,	ID.rotten_flesh, 0, CID.trade_question],
				[AUTO,	1000, 30,	ID.phantom_membrane, 0, CID.trade_question],
				[AUTO,	1000, 30,	ID.magma_cream, 0, CID.trade_question],
				[AUTO,	100000, 3,	ID.totem, 0, CID.trade_question],
			],
			[
				// 2F - 2
				[AUTO,	200, 30,	ID.string, 0, CID.trade_question],
				[AUTO,	400, 30,	ID.gunpowder, 0, CID.trade_question],
				[AUTO, 	50, 100,	ID.bone, 0, ID.bone_block],
				[AUTO,	1000, 20,	ID.slime_ball, 0, ID.slime],
				[AUTO,	50, 100,	ID.feather, 0, CID.trade_question],
				[AUTO,	200, 100,	ID.arrow, 0, CID.trade_question],
				[AUTO,	500, 10,	ID.book, 0, CID.trade_question],
                [AUTO,	1000, 10,	ID.lead, 0, CID.trade_question],
			],
			[
				// 2F - 3
				[AUTO,	400, 50,	ID.leather, 0, CID.trade_question],
				[AUTO,	50, 100,	ID.reeds, 0, CID.trade_question],
				[AUTO,	50, 100,	ID.sugar, 0, CID.trade_question],
				[AUTO,	2000, 10,	ID.bamboo, 0, CID.trade_question],
				[AUTO,	500, 20,	ID.apple, 0, CID.trade_question],
                [AUTO,	70000, 5,	ID.golden_apple, 0, CID.trade_question],
                [AUTO,	100000, 5,	ID.appleenchanted, 0, CID.trade_question],
                null
			],
			[
				// 2F - 4
				[AUTO,	5, 400,		ID.planks, 0],
				[AUTO,	20, 400,	ID.planks, 1],
				[AUTO,	10, 400,	ID.planks, 2],
				[AUTO,	20, 400,	ID.planks, 3],
				[AUTO,	20, 400,	ID.planks, 4],
				[AUTO,	20, 400,	ID.planks, 5],
			],
			[
				// 2F - 5
				[AUTO,	500, 50,	ID.hardened_clay],
				[AUTO,	1000, 100,	ID.rail, 0, CID.trade_question],
				[AUTO,	300, 50,	ID.bowl, 0, CID.trade_question],
				[AUTO,	300, 50,	ID.glass_bottle, 0, CID.trade_question],
				[AUTO,	500, 10,	ID.saddle, 0, CID.trade_question],
				[AUTO,	500, 10,	ID.name_tag, 0, CID.trade_question],
			],
			[
				// 2F - 7
				[AUTO,	1000, 50,	ID.stained_hardened_clay],
				[AUTO,	1000, 50,	ID.stained_hardened_clay, 1],
				[AUTO,	1000, 50,	ID.stained_hardened_clay, 2],
				[AUTO,	1000, 50,	ID.stained_hardened_clay, 3],
				[AUTO,	1000, 50,	ID.stained_hardened_clay, 4],
				[AUTO,	1000, 50,	ID.stained_hardened_clay, 5],
				[AUTO,	1000, 50,	ID.stained_hardened_clay, 6],
				[AUTO,	1000, 50,	ID.stained_hardened_clay, 7],
			],
			[
				// 2F - 8
				[AUTO,	1000, 50,	ID.stained_hardened_clay, 8],
				[AUTO,	1000, 50,	ID.stained_hardened_clay, 9],
				[AUTO,	1000, 50,	ID.stained_hardened_clay, 10],
				[AUTO,	1000, 50,	ID.stained_hardened_clay, 11],
				[AUTO,	1000, 50,	ID.stained_hardened_clay, 12],
				[AUTO,	1000, 50,	ID.stained_hardened_clay, 13],
				[AUTO,	1000, 50,	ID.stained_hardened_clay, 14],
				[AUTO,	1000, 50,	ID.stained_hardened_clay, 15],
			],
			[
				// 2F - 9
				[AUTO,	2000, 50,	ID.white_glazed_terracotta, TERRACOTA_DATA],
				[AUTO,	2000, 50,	ID.orange_glazed_terracotta, TERRACOTA_DATA],
				[AUTO,	2000, 50,	ID.magenta_glazed_terracotta, TERRACOTA_DATA],
				[AUTO,	2000, 50,	ID.light_blue_glazed_terracotta, TERRACOTA_DATA],
				[AUTO,  2000, 50,	ID.yellow_glazed_terracotta, TERRACOTA_DATA],
				[AUTO,	2000, 50,	ID.lime_glazed_terracotta, TERRACOTA_DATA],
				[AUTO,  2000, 50,	ID.pink_glazed_terracotta, TERRACOTA_DATA],
				[AUTO,	2000, 50,	ID.gray_glazed_terracotta, TERRACOTA_DATA],
			],
			[
				// 2F - 10
				[AUTO,	2000, 50,	ID.silver_glazed_terracotta, TERRACOTA_DATA],
				[AUTO,	2000, 50,	ID.cyan_glazed_terracotta, TERRACOTA_DATA],
				[AUTO,	2000, 50,	ID.purple_glazed_terracotta, TERRACOTA_DATA],
				[AUTO,	2000, 50,	ID.blue_glazed_terracotta, TERRACOTA_DATA],
				[AUTO,	2000, 50,	ID.brown_glazed_terracotta, TERRACOTA_DATA],
				[AUTO,	2000, 50,	ID.green_glazed_terracotta, TERRACOTA_DATA],
				[AUTO,	2000, 50,	ID.red_glazed_terracotta, TERRACOTA_DATA],
				[AUTO,	2000, 50,	ID.black_glazed_terracotta, TERRACOTA_DATA],
			]
		]
    ];
    
    // build all
    {
		const GAP = 4;
		const start = new Vector3(-234, 63, -860);
		const delta = new Vector3(GAP, 0, 0);
		const deltaZ = new Vector3(0, 0, -GAP);
		let xcount = 0;
		let zcount = 0;

		const floorsY = [0, -1, 1];

		function buildLoop(cb:(pos:Vector3, params:TradingBlockParams)=>void):void
		{
			for (let i=0;i<structure.length;i++)
			{
				const floor = structure[i];
				let lineBegin = start.add(new Vector3(0, floorsY[i] * GAP, 0));
				if (floor.length > zcount) zcount = floor.length;
				for (const lines of floor)
				{
					let pos = lineBegin;
					if (lines.length > xcount) xcount = lines.length;
					for (const params of lines)
					{	
						cb(pos, params);
						pos = pos.add(delta);
					}
					lineBegin = lineBegin.add(deltaZ);
				}
			}
		}

        const card = new CardBlock(start.add(new Vector3(GAP, 0, GAP)));
        const sellAllPos = start.add(new Vector3(GAP*2, 0, GAP));

		buildLoop((pos, params)=>{
            if (params === null) return;

            let targetDV = params[4];
            if (typeof targetDV === 'number') targetDV = [targetDV];

            const startPrice = Math.round(params[1] * SHOP_MULTIPLY);
			switch (params[0])
			{
            case MAIN: new TradingBlock(pos, startPrice, params[3], targetDV, params[5], params[6]); break;
			case AUTO: new TradingBlockAuto(pos, startPrice, params[2], params[3], targetDV, params[5], params[6], params[7]); break;
            case STAT: new TradingBlockSelling(pos, startPrice, params[3], targetDV, params[5], params[6]); break;
			}
        });

		const startY = start.y - GAP;
		const ycount = 3;

		const xfrom = start.x - 1;
		const yfrom = startY - 1;
		const zfrom = start.z;
		const xto = xfrom + xcount * GAP;
		const yto = yfrom + ycount * GAP;
		const zto = zfrom + zcount * GAP - 3;

        setFarTicker(start, new Box(xfrom, yfrom, zfrom, xto, yto, zto), ()=>{
            card.build();

            for (const block of allBlocks)
            {
                block.build();
			}   
			buildLoop((pos, params)=>{
				if (params === null)
				{
					fill(pos.add({x:-1, y:0, z:0}), 
						pos.add({x:1, y:2, z:0}), 
						ID.air);
				}
			});
            return true;
        });
    }

    // TradingBlockAuto.testAll();
    setSchedule(6, 0, "트레이딩 센터 가격 변동", true, TradingBlockAuto.updatePriceAll);
}).catch(LOG.error_obj);
