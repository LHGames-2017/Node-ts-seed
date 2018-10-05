import { AIHelper } from './aiHelper';
import { Player } from './interfaces';
import { Map } from './map';
import { Point } from './point';

export class Bot {
    protected playerInfo: Player;

    public constructor() { }

    /**
     * Gets called before ExecuteTurn. This is where you get your bot's state.
     * @param  {Player} playerInfo Your bot's current state.
     * @returns void
     */
    public beforeTurn(playerInfo: Player): void {
        this.playerInfo = playerInfo;
    }
    /**
     * This is where you decide what action to take.
     * @param  {Map} map The gamemap.
     * @param  {Player[]} visiblePlayers The list of visible players.
     * @returns string The action to take(instanciate them with AIHelper)
     */
    public executeTurn(map: Map, visiblePlayers: Player[]): string {
        // Determine what action you want to take.
        return AIHelper.createMoveAction(new Point(0, 1));
    }
    /**
     * Gets called after executeTurn
     * @returns void
     */
    public afterTurn(): void { }
}
