class Jeu{
    constructor() {
        let vaisseau = new vaisseau();
        let vague = new vague();



        this.vague = vague;
        this.vaisseau = vaisseau;
    
    
        
      }
    //calculs et gestion de vagues

update(){
    // appelle la fonction update() du vaisseau et des vagues
    this.vag.update();
    this.v.update();
}



Draw(){
//affichages
this.vag.draw();
this.v.draw();

}
}