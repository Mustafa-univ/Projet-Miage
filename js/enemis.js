var inputStates = {};

class Enemie {
    constructor(x, y, angle, vitesseX, vitesseY) {
        this.x = x;
        this.y = y;
        this.angle = angle;
        this.vitesseX = vitesseX;
        this.vitesseY = vitesseY;

        // Si removed = true, l'ennemi sera supprimée de la vague automatiquement.
        this.removed = false
    }

    draw(ctx) {
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate(this.angle);
        ctx.translate(-10, -10);
        
        // corps
        ctx.fillRect(0, 0, 40, 40);
        // canon
        ctx.fillRect(-20, 9, 80, 20);
        
        ctx.restore();
    }

    update() {
        this.move();

        if (this.x > width || this.y > height || this.x < 0 || this.y < 0)
          this.removed = true
    }
      
    move() {
        this.x += this.vitesseX;
        this.y += this.vitesseY;
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
  }
  