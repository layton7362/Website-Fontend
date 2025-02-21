export function clamp(value: number, min: number, max: number): number {
    return Math.max(min, Math.min(max, value));
}

export class Vector2 {
    constructor(public x: number = 0, public y: number = 0) { }

    get magnitude(): number {
        return Math.sqrt(this.x * this.x + this.y * this.y);
    }

    normalize(): Vector2 {
        const mag = this.magnitude;
        return mag > 0 ? new Vector2(this.x / mag, this.y / mag) : new Vector2();
    }

    add(other: Vector2): Vector2 {
        return new Vector2(this.x + other.x, this.y + other.y);
    }

    subtract(other: Vector2): Vector2 {
        return new Vector2(this.x - other.x, this.y - other.y);
    }

    scale(factor: number): Vector2 {
        return new Vector2(this.x * factor, this.y * factor);
    }

    distanceTo(other: Vector2): number {
        return Math.sqrt((this.x - other.x) ** 2 + (this.y - other.y) ** 2);
    }

    distanceToSquared(other: Vector2): number {
        return (this.x - other.x) ** 2 + (this.y - other.y) ** 2;
    }

    clone(): Vector2 {
        return new Vector2(this.x, this.y);
    }
}

export class Rect2 {
    constructor(
        public position: Vector2 = new Vector2(),  
        public end: Vector2 = new Vector2()       
    ) { }

    get width(): number {
        return Math.abs(this.end.x - this.position.x);
    }

    get height(): number {
        return Math.abs(this.end.y - this.position.y);
    }

    get center(): Vector2 {
        return new Vector2(
            (this.position.x + this.end.x) / 2,
            (this.position.y + this.end.y) / 2
        );
    }

    hasPoint(point: Vector2): boolean {
        return (
            point.x >= this.position.x &&
            point.x <= this.end.x &&
            point.y >= this.position.y &&
            point.y <= this.end.y
        );
    }

    overlap(other: Rect2): boolean {
        return !(
            this.position.x > other.end.x || // Links vom anderen
            this.end.x < other.position.x || // Rechts vom anderen
            this.position.y > other.end.y || // Unterhalb des anderen
            this.end.y < other.position.y    // Oberhalb des anderen
        );
    }

    move(vec: Vector2): void {
        this.position.add(vec);
        this.end.add(vec);
    }

    scale(factor: number): void {
        const center = this.center;
        const halfWidth = (this.width * factor) / 2;
        const halfHeight = (this.height * factor) / 2;

        this.position = new Vector2(center.x - halfWidth, center.y - halfHeight);
        this.end = new Vector2(center.x + halfWidth, center.y + halfHeight);
    }

    clone(): Rect2 {
        return new Rect2(new Vector2(this.position.x, this.position.y), new Vector2(this.end.x, this.end.y));
    }
}