import Vector2f from './core/Vector2f.js';
import Projectile from './Projectile.js';


class Cannon {
    constructor(position, dimensions) {
        this.position = position;
        this.dimensions = dimensions;
        this.radius = 30;
        this.angle = 0;
        this.angleVelocity = 1;
        this.image = new Image(dimensions.x, dimensions.y);
        this.image.src = "Cannon.png";  
    }

    update(delta) {
        this.angle += this.angleVelocity;
        if (this.angle < -90) this.angleVelocity = Math.abs(this.angleVelocity);
        if (this.angle > 90) this.angleVelocity = -Math.abs(this.angleVelocity);
        if (this.projectile) this.projectile.update(delta);
    }

    launch() {
        let direction = new Vector2f(
            Math.cos(Math.toRadians(this.angle-90)), 
            Math.sin(Math.toRadians(this.angle-90))
        );
        let projectile = new Projectile(
            Vector2f.add(this.position, this.dimensions.multiply(0.5)), 
            direction);
        this.projectile = projectile;
    }

    draw(ctx) {
        ctx.translate(this.position.x+this.dimensions.x/2, this.position.y+this.dimensions.y/2);
        ctx.rotate(Math.toRadians(this.angle));
        ctx.translate(-(this.position.x+this.dimensions.x/2), -(this.position.y+this.dimensions.y/2));
        ctx.drawImage(this.image, this.position.x, this.position.y, this.dimensions.x, this.dimensions.y);
        ctx.setTransform(1, 0, 0, 1, 0, 0);

        if (this.projectile) this.projectile.draw(ctx);
    }
}

export default Cannon;