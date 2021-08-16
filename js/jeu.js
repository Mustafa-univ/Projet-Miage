class Jeu{
  constructor(ctx, vaisseau) {
    this.ctx = ctx;

    this.vague = new Vague(ctx);
    this.vaisseau = vaisseau;
  }
    
  //calculs et gestion de vagues
  update() {
    // appelle la fonction update() du vaisseau et des vagues
    this.vaisseau.update();
    this.vague.update();
  }



  draw(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    //affichages
    this.vaisseau.draw(ctx);
    this.vague.draw(ctx);
  }
}