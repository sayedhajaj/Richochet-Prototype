import Vector2f from "./core/Vector2f.js";


class Projectile {
    constructor(position, direction) {
        const speed = 10;
        this.position = position;
        this.velocity = direction.multiply(speed);
    } 

    update(delta) {
        this.position = Vector2f.add(this.position, this.velocity);
        if (this.position.x < 15 && this.velocity.x < 0) this.velocity.x *= -0.9;
        if (this.position.y < 15 && this.velocity.y < 0) this.velocity.y *= -0.9;
        if (this.position.x > 680 && this.velocity.x > 0) this.velocity.x *= -0.9;
        if (this.position.y > 470 && this.velocity.y > 0) this.velocity.y *= -0.9;
    }

    draw(ctx) {
        ctx.fillCircle(this.position.x, this.position.y, 30);
    }
}

export default Projectile;