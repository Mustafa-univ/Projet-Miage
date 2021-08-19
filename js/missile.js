//position, direction
class Bullet {
    constructor(char) {
        this.x = char.x;
        this.y = char.y;
        this.angle = char.angle;
        this.removed = false
    }

    draw() {
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate(this.angle);
        ctx.fillRect(0, 0, 10, 2);
        ctx.restore();
    }

    update() {
        this.move();

        if (this.x < 0 || this.y < 0 || this.x > width || this.y > height)
            this.removed = true
    }
  
    move() {
        this.x -= 10 * Math.cos(this.angle);
        this.y -= 10 * Math.sin(this.angle);
    }
}