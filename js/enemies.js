class Enemies{
    constructor(enemies) {
        this.x = enemies.x;
        this.y = enemies.y;
        this.angle = enemies.angle;
    }

    draw(ctx) {
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate(this.angle);
        ctx.translate(-10, -10);
        
        // corps
        ctx.fillRect(0, 0, 20, 20);
        // canon
        ctx.fillRect(-10, 9, 10, 2);
        
        ctx.restore();
        
        this.drawenemies(ctx);
    
      }
}