import Identifier from "@mcbe/identifier";
import { BREAKING } from "./breaking_data";

// class BlockInfo
// {
//     public readonly hardness:number;
//     public readonly tool:ToolType;

//     constructor(line:string)
//     {

//     }
// }

const HARDNESS_TO_SECONDS_CAN = 1.5;
const HARDNESS_TO_SECONDS_CANNOT = 5;
const HASTE_2 = 1.4;
const EFFICIENCY_5 = 26; 

function getBreakingPower(hand:Identifier, block:Identifier):void
{
    const data = BREAKING.get(block);
    if (!data) return;
    data.diamond;
}
