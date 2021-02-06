import { Vector3 } from "krgeometry";
import Identifier from "@mcbe/identifier";
import { realTime } from "@mcbe/timer/realtime";

import { User, blockEvent } from "@bdsx/ruakr_user";
import { restorePistonPush, restoreBlockSlow, removeBlockDrop } from "@bdsx/restoreblock";
import { Block } from "@bdsx/block";

export interface DDBlockListener 
{    
    onCheck(user:User, destroy:boolean, pos:Vector3):boolean;
    onSubmit(user:User, pos:Vector3):boolean;
}

export class DDBlockExtra
{
    accessTime:number = 0;
    accessTarget:Vector3 = Vector3.ZERO;

    static install(target:Identifier[], listener:DDBlockListener):void
    {
        blockEvent.install({
            TARGET: target,

            onPistonPush(user:User, block:Block, pistonPos:Vector3, oldPos:Vector3):boolean
            {
                return restorePistonPush(user, block, pistonPos, oldPos);
            },
            
            onInterect(user:User, block:Block):boolean
            {
                const extra = user.extra(DDBlockExtra);
                if (!listener.onCheck(user, false, block.pos)) return false;
                extra.accessTime = realTime.now + 3000;
                extra.accessTarget = block.pos;
                return true;
            },
        
            onDestroy(user:User, block:Block):void
            {
                const extra = user.extra(DDBlockExtra);
                if (extra.accessTime < realTime.now || !extra.accessTarget.equals(block.pos))
                {
                    extra.accessTime = realTime.now + 5000;
                    extra.accessTarget = block.pos;
                    listener.onCheck(user, true, block.pos);
                }
                else
                {
                    extra.accessTime = 0;
                    if (listener.onSubmit(user, block.pos))
                    {
                        removeBlockDrop(block);
                        return;
                    }
                }
                restoreBlockSlow(user, block);
            }
        });
    }
}
