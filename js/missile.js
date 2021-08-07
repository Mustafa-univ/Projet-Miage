//position, direction
class Bullet {
    constructor(char) {
        this.x = char.x;
        this.y = char.y;
        this.angle = char.angle;
    }

    draw(ctx) {
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate(this.angle);
        ctx.fillRect(0, 0, 10, 2);
        ctx.restore();
    }

  
    move(maxX, maxY) {
        this.x -= 10 * Math.cos(this.angle);
        this.y -= 10 * Math.sin(this.angle);
    }
}


class missile/* extends Char*/{
    constructor(char) {
     /*   export default class Example {
            test() {
              console.log('hello world');
            }
          }
*/

        this.x = char.x;
        this.y = char.y;
        this.angle = char.angle;
    }

    update(maxX, maxY){
        //deplacement direction + vitesse
            this.x -= 10 * Math.cos(this.angle);
            this.y -= 10 * Math.sin(this.angle);
        }


    draw(ctx) {
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate(this.angle);
        ctx.fillRect(0, 0, 10, 2);
        ctx.restore();
    }

  

}