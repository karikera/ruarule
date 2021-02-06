import { UserExtra, User } from "@bdsx/ruakr_user";
import { Vector3 } from "krgeometry";
import { DimensionId } from "bdsx/common";

export class NetherTop implements UserExtra
{
    constructor(public readonly user:User)
    {
    }

    onUpdateSlow():void
    {
        const pos = this.user.position;
        if (pos.y >= 128 && this.user.dimension === DimensionId.Nether)
        {
            this.user.tp(pos.add(new Vector3(0, -5, 0)));
        }
    }
}
