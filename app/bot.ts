import { IPlayer, Point } from './interfaces';
import { Map } from './map';
import { AIHelper } from './aiHelper';

export class Bot {
    private playerInfo: IPlayer

    public constructor() { }

    /**
     * Gets called before ExecuteTurn. This is where you get your bot's state.
     * @param  {IPlayer} playerInfo Your bot's current state.
     * @returns void
     */
    public beforeTurn(playerInfo: IPlayer): void {
        this.playerInfo = playerInfo;
    }
    /**
     * This is where you decide what action to take.
     * @param  {Map} map The gamemap.
     * @param  {IPlayer[]} visiblePlayers The list of visible players.
     * @returns string The action to take(instanciate them with AIHelper)
     */
    public executeTurn(map: Map, visiblePlayers: IPlayer[]): string {
        // Determine what action you want to take.
        return AIHelper.createMoveAction(new Point(0, 1));
    }
    /**
     * Gets called after executeTurn;
     * @returns void
     */
    public afterTurn(): void { }
}