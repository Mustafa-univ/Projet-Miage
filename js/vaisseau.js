//control de vaisseau,données de position, vitesse, liste de missiles




var ctx1, width, height;
var char1;
var enemie1;
var mousepos1 = { x: 0, y: 0 };
var inputStates = {};


/*import Example from './tire';
console.log(Example.test());*/
class Vaisseau {
  constructor(x, y, angle, vitesse, tempsMinEntreTirsEnMillisecondes) {



    this.x = x;
    this.y = y;
    this.angle = angle;
    this.v = vitesse;
    this.bullets = [];
    // cadenceTir en millisecondes = temps min entre tirs
    this.delayMinBetweenBullets = tempsMinEntreTirsEnMillisecondes;


    
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
    
    this.drawBullets(ctx);

  }
  
  drawBullets(ctx) {
    for(let i = 0; i < this.bullets.length; i++) {
      let b = this.bullets[i];
      b.draw(ctx);

      b.move();
      if ((b.x < 0) || (b.y < 0) || (b.x > width) || (b.y > height))
            this.removeBullet(b)

    }
  }
  
  move(mousepos) {
        // 2) On dÃ©place la balle 
    let dx = this.x - mousepos.x;
    let dy = this.y - mousepos.y;
    this.angle = Math.atan2(dy, dx);
    
    if (distance(this.x, this.y, mousepos.x, mousepos.y) >= 10) {
        //ball.v = 0;
        this.x -= this.v * Math.cos(this.angle);
        this.y -= this.v * Math.sin(this.angle);
    }
  }
  
   addBullet(time) {
     // si le temps écoulé depuis le dernier tir est > temps max alors on tire
     var tempEcoule=0;
     
     if(this.lastBulletTime !== undefined) {
       tempEcoule = time - this.lastBulletTime;
       //console.log("temps écoulé = " + tempEcoule);
     }
     
     if((this.lastBulletTime === undefined) || (tempEcoule> this.delayMinBetweenBullets)) {
        this.bullets.push(new Bullet(this));

        // on mémorise le dernier temps.
        this.lastBulletTime = time;
     }
   }
   addEnemie(time) {
    // si le temps écoulé depuis le dernier tir est > temps max alors on tire
    var tempEcoule=0;
    
    if(this.lastEnemieTime !== undefined) {
      tempEcoule = time - this.lastEnemieTime;
      //console.log("temps écoulé = " + tempEcoule);
    }
    
    if((this.lastEnemieTime === undefined) || (tempEcoule> this.delayMinBetweenBullets)) {
       this.bullets.push(new Bullet(this));

       // on mémorise le dernier temps.
       this.lastEnemieTime = time;
    }
  }

   removeBullet(bullet) {
        let position = this.bullets.indexOf(bullet);
        this.bullets.splice(position, 1);
    }
}
/*
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
*/

function anime() {
  
    // 1) On efface l'Ã©cran
    ctx.clearRect(0, 0, canvas.width, canvas.height);


    // 2) On dessine et on déplace le char 1
     char1.draw(ctx);
     
     char1.move(mousepos);
    enemie1.draw(ctx);
     enemie1.move(mousepos1+5);
    if(inputStates.SPACE) {
      char1.addBullet(Date.now()); 
      char1.addEnemie(Date.now()); 
    }
  
    // On demande une nouvelle frame d'animation
    window.requestAnimationFrame(anime);
  
}

function distance(x1, y1, x2, y2) {
    return Math.sqrt((x1 - x2) * (x1 - x2) + (y1 - y2) * (y1 - y2));
}


function getMousePos(canvas, evt) {
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

function changeCadenceTir(value) {
  char1.delayMinBetweenBullets = value;
}
