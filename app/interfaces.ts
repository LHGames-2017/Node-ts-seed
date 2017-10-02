export interface Map {
    Tiles: Tile[][];
}

export interface Tile {
    Content: TileContent;
    Position: Point;
}

export interface GameInfo {
    Player: IPlayer;
    CustomSerializedMap: string;
    OtherPlayers: IPlayer[];
}

export interface IPlayer {
    Name: string;
    CurrentHealth: number;
    MaximumHealth: number;
    Score: number;
    CarriedResources: number;
    CarryingCapacity: number;
    Position: Point;
}

export interface Point {
    X: number;
    Y: number;
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
