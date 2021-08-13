//position, direction

let a = 20;
let b = 20;

var enemies1;
var inputStates = {};
class Enemie {

    constructor(enemie,x,y) {
       
        this.x = enemie.x;
        this.y = enemie.y;
        this.angle = enemie.angle;
        this.enemies = [];
    }

    draw(ctx) {
        ctx.save();
        ctx.translate(a, b);
        ctx.rotate(this.angle);
        ctx.translate(-10, -10);
        
        // corps
        ctx.fillRect(0, 0, 40, 40);
        // canon
        ctx.fillRect(-20, 9, 80, 20);
        
        ctx.restore();
        
        this.drawEnemies(ctx);
        a+10;
        b+10;
    
      }
      
    move() {
      
        a += 10;
        b += 10;
    }


      drawEnemies(ctx) {
        for(let i = 0; i < this.enemies.length; i++) {
          let b = this.enemies[i];
          b.draw(ctx);
    
          b.move();
          if ((b.x < 0) || (b.y < 0) || (b.x > width) || (b.y > height))
                this.removeEnemie(b)
    
        }
      }
      
      move(mousepos) {
            // 2) On dÃ©place la balle 
        let dx = this.x - mousepos.x+ 20;
        let dy = this.y -mousepos.y+ 20;
        this.angle = Math.atan2(dy, dx);
        
        if (distance(this.x, this.y, mousepos.x, mousepos.y) >= 10) {
            //ball.v = 0;
            this.x -= this.v * Math.cos(this.angle);
            this.y -= this.v * Math.sin(this.angle);
        }
      }
      
       addEnemie(time) {
         // si le temps écoulé depuis le dernier tir est > temps max alors on tire
         var tempEcoule=0;
         
         if(this.lastEnemieTime !== undefined) {
           tempEcoule = time - this.lastEnemieTime;
           //console.log("temps écoulé = " + tempEcoule);
         }
         
         if((this.lastEnemieTime === undefined) || (tempEcoule> this.delayMinBetweenEnemies)) {
            this.enemies.push(new Enemie(this));
    
            // on mémorise le dernier temps.
            this.lastEnemieTime = time;
         }
       }

       update(){
        this.move();
       }


        getMousePos(canvas, evt) {
        // get canvas position
        var obj = canvas;
        var top = 0;
        var left = 0;
        while (obj && obj.tagName != 'BODY') {
            top += obj.offsetTop;
            left += obj.offsetLeft;
            obj = obj.offsetParent;
        }
    
        // return relative mouse position
        var mouseX = evt.clientX - left + window.pageXOffset;
        var mouseY = evt.clientY - top + window.pageYOffset;
        return {
            x: mouseX,
            y: mouseY
        };
    }
  }
  