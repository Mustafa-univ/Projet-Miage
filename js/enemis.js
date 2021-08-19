class Enemie {
    constructor(x, y, angle, vitesseX, vitesseY) {
        this.x = x;
        this.y = y;
        this.angle = angle;
        this.vitesseX = vitesseX;
        this.vitesseY = vitesseY;
        this.size = { x:40, y:40 };
        this.time = 0; // Utilisé pour le pattern

        // Si removed = true, l'ennemi sera supprimée de la vague automatiquement.
        this.removed = false
    }

    draw(ctx) {
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate(this.angle);
        ctx.translate(-10, -10);
        
        // corps
        ctx.fillRect(0, 0, this.size.x, this.size.y);
        // canon
        //ctx.fillRect(-20, 9, 80, 20);
        
        ctx.restore();
    }

    update() {
        this.move();

        if (this.x > width || this.y > height || this.x < 0 || this.y < 0)
          this.removed = true
    }
      
    move() {
        this.time += 0.1;
        this.x += this.vitesseX;
        this.y += this.vitesseY * Math.sin(this.time);
    }
}
  