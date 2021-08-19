class Jeu{
  constructor(ctx, vaisseau) {
    this.ctx = ctx;
    this.score = 0

    this.vague = new Vague();
    this.vaisseau = vaisseau;

    // Fin du jeu, removed = true
    this.removed = false;
  }
    
  //calculs et gestion de vagues
  update() {
    // appelle la fonction update() du vaisseau et des vagues
    this.vaisseau.update();
    this.vague.update();

    // Collision des missiles, vaisseau et des ennemis
    for (var enemy of this.vague.enemies) {
      if (this.vaisseau.x >= enemy.x && this.vaisseau.x <= enemy.x + enemy.size.x
        && this.vaisseau.y >= enemy.y && this.vaisseau.y <= enemy.y + enemy.size.y) {
          this.removed = true;
          return;
      }

      for (var bullet of this.vaisseau.bullets) {
        if (bullet.x >= enemy.x && bullet.x <= enemy.x + enemy.size.x
          && bullet.y >= enemy.y && bullet.y <= enemy.y + enemy.size.y) {
            bullet.removed = true;
            enemy.removed = true;
            this.score += 50;
            scoreText.textContent = this.score;
            this.vaisseau.v = 2 * Math.log(Math.ceil((this.score + 200) / 100));
        }
      }
    }
  }

  draw(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    //affichages
    this.vaisseau.draw(ctx);
    this.vague.draw(ctx);
  }
}