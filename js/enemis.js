//position, direction
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
        char1.draw(ctx1);



        test.save();
        test.translate(2,2);
        this.drawenemies(test);
        test.draw(test);
      }
     
}