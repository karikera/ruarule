
import { Vector3 } from "krgeometry";
import { fill, fillReplace } from "@mcbe/command";
import ID from "@mcbe/identifier/id";

const DIR_TO_VECTOR = [
    new Vector3(1,0,0),
    new Vector3(-1,0,0),
    new Vector3(0,0,1),
    new Vector3(0,0,-1),
];

function bedplace(axis:VectorXYZ, width:number, height:number):void
{
    fill(new Vector3(0, -10, 0).add(axis), new Vector3(width, 0, height).add(axis), ID.cobblestone);
}

export function buildTownTower(pos:Vector3):void
{
    const top = new Vector3(0, 6, 0).add(pos);

    pos = pos.add(Vector3.Y);
    fill(pos, top, ID.cobblestone);
    for (let i=0;i<4;i++)
    {
        const dir = DIR_TO_VECTOR[i];
        fill(dir.add(pos), dir.add(top), ID.torch, i+1);
    }
}

export function removeTownTower(pos:VectorXYZ):void
{
    const top = new Vector3(0, 16, 0).add(pos);
    for (let i=0;i<4;i++)
    {
        const dir = DIR_TO_VECTOR[i];
        fillReplace(dir.add(pos), dir.add(top), ID.air, 0, ID.torch, i+1);
    }
    fillReplace(pos, top, ID.air, 0, ID.cobblestone, 0);
}
