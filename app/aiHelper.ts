import { Point } from './interfaces';

export class AIHelper {

    public static createStealAction(position: Point): string {
        return AIHelper.createAction('StealAction', position);
    }

    public static createAttackAction(position: Point): string {
        return AIHelper.createAction('AttackAction', position);
    }

    public static createCollectAction(position: Point): string {
        return AIHelper.createAction('CollectAction', position);
    }

    public static createMoveAction(newPosition: Point): string {
        return AIHelper.createAction('MoveAction', newPosition);
    }

    private static createAction(name: string, target: Point): string {
        const action = {
            ActionName: name,
            Content: JSON.stringify(target)
        };

        return JSON.stringify(action);
    }
}