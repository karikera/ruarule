
import { CID } from "../customid";
import { User, UserExtra } from "@bdsx/ruakr_user";
import { IVectorXZ } from "krgeometry";
import { Store, Storage } from "@mcbe/store";
import { Wallet } from "../module/wallet";
import { DDBlockExtra } from "../ddblock";
import LOG from "@mcbe/ruakr_log";
import { priceToString } from "../structure/tradecenter";

// 땅 파는 블럭이 있고,
// 땅매매 블럭을 카드를 들고 부수면, 구매됨
// 땅매매 블럭을 배치하면, 가격 정하는 블럭세트가 생성되고, 가격을 정하고 확인하면 판매 설정되게

const CHUNK_SIZE = 8;
const AXIS_X = -224;
const AXIS_Y = -840;

const VAR_PRICE = '#price';

const areas = new Map<string, RealtyArea>();

const store = new Store('realty');

class RealtyArea
{
    private readonly storage:Storage;

    constructor(public readonly id:string)
    {
        this.storage = store.create(this.id);
    }

    getPrice():number|undefined
    {
        const price = this.storage.get(VAR_PRICE);
        if (price === undefined)
        {
            LOG.error({action:LOG.Action.Assertion, msg:`realty ${this.id} price not found`});
        }
        return price;
    }
    
    buy(user:User):boolean
    {
        const price = this.getPrice();
        if (price === undefined) return false;
        const wallet = user.extra(Wallet);
        if (price > wallet.get())
        {
            user.info(`금액이 부족해요\n가격: ${priceToString(price)}`);
            wallet.showOnce();
            return false;
        }
        user.info('구매 완료');
        wallet.showOnce();
        return true;
    }
}

function getArea(pos:IVectorXZ):RealtyArea|null
{
    const x = Math.floor(pos.x / CHUNK_SIZE);
    const z = Math.floor(pos.z / CHUNK_SIZE);
    const id = x + '_' +z;
    const area = areas.get(id);
    return area || null;
}

function createArea(pos:IVectorXZ):RealtyArea
{
    const x = Math.floor(pos.x / CHUNK_SIZE);
    const z = Math.floor(pos.z / CHUNK_SIZE);
    const id = x + '_' +z;
    let area = areas.get(id);
    if (area) return area;
    area = new RealtyArea(id);
    areas.set(id, area);
    return area;
}

class RealtyExtra implements UserExtra
{
    constructor()
    {
    }

    static onInstall():void
    {
        DDBlockExtra.install([CID.buyblock], {
            onCheck(user, destroy, pos)
            {
                const area = getArea(pos);
                if (!area) return false;
                const price = area.getPrice();
                if (price === undefined) return false;
                const wallet = user.extra(Wallet);
                wallet.showOnce();
                if (price > wallet.get())
                {
                    user.info(`매매가: ${priceToString(price)}\n구매 불가`);
                    return false;
                }
                user.info(`매매가: ${priceToString(price)}\n${destroy ? '한번 더 부숴주세요!' : '블럭을 부숴주세요!'}`);
                return true;
            },
            onSubmit(user, pos)
            {
                const area = getArea(pos);
                if (!area)
                {
                    user.giveItem(CID.buyblock, 0, 1);
                    return false;
                }
                return area.buy(user);
            }
        });
    }
}
