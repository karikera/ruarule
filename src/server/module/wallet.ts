import { User, UserExtra, blockEvent } from "@bdsx/ruakr_user";
import { CID } from "../customid";
import Identifier from "@mcbe/identifier";
import { priceToString } from "../structure/tradecenter";


export const VAR_WALLET_MONEY = '#money';

export class Wallet implements UserExtra
{
    timer:NodeJS.Timeout|null = null;

    constructor(public readonly user:User)
    {
    }

    showOnce():void
    {
        this.user.actionbar(`현재: ${priceToString(this.get())}`);
    }

    show():void
    {
        if (this.timer) return;
        this.showOnce();

        this.timer = setInterval(()=>{
            this.showOnce();
        }, 1000);
    }

    hide():void
    {
        if (this.timer)
        {
            clearInterval(this.timer);
            this.timer = null;
            this.user.actionbar(`§0`);
        }
    }
    
    get():number
    {
        return this.user.storage.get(VAR_WALLET_MONEY) || 0;
    }

    add(value:number):number
    {
        const res = this.user.storage.add(VAR_WALLET_MONEY, value) || 0;;
        this.showOnce();
        return res;
    }

    remove(value:number):number
    {
        const res = this.user.storage.remove(VAR_WALLET_MONEY, value) || 0;;
        this.showOnce();
        return res;
    }

    set(value:number):void
    {
        const res = this.user.storage.set(VAR_WALLET_MONEY, value);;
        this.showOnce();
        return res;
    }

    onItemChange(now:Identifier, prev:Identifier):void
    {
        if (now === CID.trade_card)
        {
            this.show();
        }
        else if (prev === CID.trade_card)
        {
            this.hide();
        }
    }

    onDispose():void
    {
        this.hide();
    }

    static onInstall():void
    {
        blockEvent.setNonPlaceable(CID.trade_card);
    }
}
