export class Point {
    public X: number;
    public Y: number;

    public constructor(x: number, y: number) {
        this.X = x;
        this.Y = y;
    }

    public distance(other: Point): number {
        return Math.sqrt(this.distanceSquared(other));
    }

    public distanceSquared(other: Point): number {
        const xDist = other.X - this.X;
        const yDist = other.Y - this.Y;
        return xDist * xDist + yDist * yDist;
    }
}