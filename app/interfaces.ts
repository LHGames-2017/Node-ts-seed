export interface Tile {
    Content: TileContent;
    Position: Point;
}

export interface GameInfo {
    Player: IPlayer;
    CustomSerializedMap: string;
    OtherPlayers: IPlayer[];
    xMin: number;
    yMin: number;
}

export interface IPlayer {
    Health: number;
    MaxHealth: number;
    CarriedResources: number;
    CarryingCapacity: number;
    AttackPower: number;
    Defence: number;
    TotalResources: number;
    Position: Point;
    HouseLocation: Point;
    Score: number;
    Name: string;
}

export class Point {
    public X: number;
    public Y: number;

    public constructor(x: number, y: number) {
        this.X = x;
        this.Y = y;
    }

    public Distance(other: Point): number {
        const xDist = other.X - this.X;
        const yDist = other.Y - this.Y;
        return Math.sqrt(xDist * xDist + yDist * yDist);
    }
}

export enum TileContent {
    Empty,
    Wall,
    House,
    Lava,
    Resource,
    Shop,
    Player
}

export enum UpgradeType {
    CarryingCapacity,
    AttackPower,
    Defence,
    MaximumHealth,
    CollectingSpeed
}

export enum PurchasableItem {
    MicrosoftSword,
    UbisoftShield,
    DevolutionsBackpack,
    DevolutionsPickaxe,
    HealthPotion,
}
