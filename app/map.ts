import { TileContent } from './interfaces';
import { Tile } from './tile';


export class Map {

    private tiles: Tile[][]
    private xMin: number;
    private yMin: number;
    private xMax: number;
    private yMax: number;

    // tslint:disable-next-line:variable-name
    private _visibleDistance: number;

    /**
     * How far your Bot can see.
     * @returns number
     */
    public get visibleDistance(): number {
        return this._visibleDistance;
    }

    public constructor(customSerializedMap: string, xMin: number, yMin: number) {
        this.xMin = xMin;
        this.yMin = yMin;
        this.deserializeMap(customSerializedMap);
        this.initMapSize();
    }
    /**
     *  Returns the TileType at this location. If you try to look outside 
     *  of your visible region, it will always return TileType.Tile (Empty
     *  tile).
     *
     *  Negative values are valid since the map wraps around when you reach
     *  the end.
     * @param  {number} x X Coordinate.
     * @param  {number} y Y Coordinate.
     * @returns TileContent The content of the tile.
     */
    public getTileAt(x: number, y: number): TileContent {
        if (x < this.xMin || x > this.xMax || y < this.yMin || y > this.yMax) {
            return TileContent.Empty;
        }
        return this.tiles[x - this.xMin][y - this.yMin].tileType;
    }
    /**
     * Deserialize the map received from the game server.
     * DO NOT MODIFY THIS.
     * @param  {string} serializedMap The map received from the server.
     * @returns void
     */
    private deserializeMap(serializedMap: string): void {
        serializedMap = serializedMap.substring(1, serializedMap.length - 2);
        const rows = serializedMap.split('[');
        let column = rows[1].split('{');
        this.tiles = new Array<Tile[]>();
        for (let i = 0; i < rows.length - 1; i++) {
            this.tiles[i] = new Array<Tile>();
            column = rows[i + 1].split('{');
            for (let j = 0; j < column.length - 1; j++) {
                let tileType = TileContent.Empty;
                if (column[j + 1][0] !== '}') {
                    const infos = column[j + 1].split('}');
                    tileType = parseInt(infos[0], 10) as TileContent;
                }
                this.tiles[i][j] = new Tile(tileType, i + this.xMin, j + this.yMin);
            }
        }
    }

    /**
     * Initializes the XMax, YMax and VisibleDistance.
     * @returns void
     */
    private initMapSize(): void {
        if (this.tiles !== undefined) {
            this.xMax = this.xMin + this.tiles.length;
            this.yMax = this.yMin + this.tiles[0].length;
            this._visibleDistance = (this.xMax - this.xMin - 1) / 2;
        }
    }
}
