import { Region } from "./module/region";
import Identifier from "@mcbe/identifier";
import { setFarBlock } from "@mcbe/farticker";
import { Box, Vector3 } from "krgeometry";
import { User } from "@bdsx/ruakr_user";
import { removeBlockDrop } from "@bdsx/restoreblock";
import { Wallet } from "./module/wallet";
import { tradeCenter, DIAMOND_PRICE, priceToString } from "./structure/tradecenter";
import ID from "@mcbe/identifier/id";
import { Block } from "@bdsx/block";

const all:PrizeBlock[] = [];

export class PrizeBlock extends Region
{
    private done = false;

    constructor(
        private readonly who:string[],
        private readonly pos:Vector3, 
        priceName:string, 
        priceBlock:Identifier
    )
    {
        super(priceName+' 보상', Box.fromVector(pos, pos));
        setFarBlock(pos, priceBlock);
        all.push(this);
    }

    onPrize(user:User):void
    {
    }

    onDestroy(user:User, block:Block):void
    {
        if (this.done) return;
        this.done = true;
        removeBlockDrop(block);
        this.onPrize(user);
        PrizeBlock.clear();
    }

    canWrite(user:User|null):boolean
    {
        if (!user) return false;
        return this.who.indexOf(user.name) !== -1;
    }
    
    remove():boolean
    {
        if (!super.remove()) return false;
        setFarBlock(this.pos, ID.air);
        return true;
    }

    static contains(pos:Vector3):boolean
    {
        for (const block of all)
        {
            if (block.pos.equals(pos)) return true;
        }
        return false;
    }

    static clear():void
    {
        for (const prize of all)
        {
            prize.remove();
        }
    }
}

export class MoneyPrizeBlock extends PrizeBlock
{
    constructor(
        who:string[],
        pos:Vector3, 
        priceName:string, 
        priceBlock:Identifier,
        private readonly money:number)
    {
        super(who, pos, priceName, priceBlock);
    }

    onPrize(user:User)
    {
        const wallet = user.extra(Wallet);
        wallet.add(this.money);
        tradeCenter.removeMoney(this.money);
        user.infoFast(priceToString(this.money)+' 증가');
    }
}


/** @deprecated */
export class ItemPrizeBlock extends PrizeBlock
{
    constructor(
        who:string[],
        pos:Vector3, 
        priceName:string, 
        private readonly priceId:Identifier, 
        private readonly count:number, 
        priceBlock:Identifier,
        private readonly prizeGold:number)
    {
        super(who, pos, priceName, priceBlock);
    }

    onPrize(user:User)
    {
        tradeCenter.removeDiamond(this.prizeGold);
        tradeCenter.removeMoney(this.prizeGold * DIAMOND_PRICE);
        user.giveItem(this.priceId, 0, this.count);
    }
}
