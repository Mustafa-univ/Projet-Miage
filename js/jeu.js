class Jeu{
    constructor(ctx,vaisseau,vague) {

        this.ctx = ctx;


        this.vague = vague;
        this.vaisseau = vaisseau;
    
    
        
      }
    //calculs et gestion de vagues

update(){
    // appelle la fonction update() du vaisseau et des vagues
  //  this.vague.update();
  //  this.vaisseau.update();
}



Draw(){
//affichages
this.vag.draw();
this.v.draw();
this.vague.draw(ctx);
}
}