
export interface BlockInfo
{
    hardness:number;
    tool:number;
    hand:number;
    wooden:number;
    stone:number;
    iron:number;
    diamond:number;
    golden:number;
    shears:number;
    sword:number;
}

export enum ToolType
{
    Any,
    Axe,
    Pickaxe,
    Shears,
    Shovel,
    Sword,
}
