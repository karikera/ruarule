import { User, UserExtra } from "@bdsx/ruakr_user";
import ID from "@mcbe/identifier/id";
import { testforblock, execute, setblock, silentCommander } from "@mcbe/command";
import { CID } from "../customid";

export enum OverworldState
{
    Overworld,
    NotOverworld,
    Unknown,
}

export class NetherChecker implements UserExtra
{
    public overworld = OverworldState.Unknown;

    constructor(private readonly user:User)
    {
    }

    onUpdateSlow():void
    {
        const pos = this.user.position.floor();
        const bottom = {x:pos.x, y:0, z:pos.z};
        silentCommander.setblock(bottom, CID.nether_checker);
        execute(this.user.name).testforblock(bottom, CID.nether_checker).then(res=>{
            this.overworld = res ? OverworldState.Overworld : OverworldState.NotOverworld;
        });
        silentCommander.setblock(bottom, ID.bedrock);
    }
}
