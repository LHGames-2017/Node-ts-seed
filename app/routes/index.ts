import { Request, Response, NextFunction } from 'express';
import { GameInfo, Tile, Point, TileContent } from '../interfaces';
import { AIHelper } from '../aiHelper';

module Route {

    export class Index {
        private static decompressMap(compressedMap: any, xMin: number, yMin: number): Tile[][] {
            const map = new Array<Array<Tile>>();
            compressedMap = compressedMap.substring(2, compressedMap.length - 3);
            const row = compressedMap.split('],[');
            for (let i = 0; i < row.length; i++) {
                map[i] = new Array<Tile>();
                const column = row[i].split('{');
                for (let j = 0; j < column.length - 1; j++) {
                    let content = TileContent.Empty;
                    if (column[j + 1][0] !== '}') {
                        content = +(column[j + 1].split('}')[0])
                    }
                    map[i][j] = {
                        Content: content,
                        Position: new Point(i + xMin, j + yMin)
                    };
                }
            }
            return map;
        }

        private static getAction(map: Tile[][], gameInfo: GameInfo) {
            // TODO: Implement your ai HERE.
            AIHelper.createMoveAction(new Point(1, 0));
        }

        public index(req: Request, res: Response, next: NextFunction) {
            const mapData = JSON.parse(req.body.data) as GameInfo;
            const map = Index.decompressMap(mapData.CustomSerializedMap, mapData.xMin, mapData.yMin);

            const action = Index.getAction(map, mapData);
            res.send(action);
        }
    }
}

export = Route;
