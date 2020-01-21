

class Vector2f {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    static add(left, right) {
        return new Vector2f(left.x+right.x, left.y+right.y);
    }

    static subtract(left, right) {
        return new Vector2f(left.x-right.x, left.y-right.y);
    }

    lengthSquared() {
        return this.x**2 + this.y**2;
    }

    length() {
        return Math.hypot(this.x, this.y);
    }

    normalise() {
        let length = this.length();
        return new Vector2f(this.x / length, this.y / length);
    }

    multiply(scalar) {
        return new Vector2f(this.x * scalar, this.y * scalar);
    }

    dot(other) {
        return this.x * other.x + this.y * other.y;
    }


}

export default Vector2f;