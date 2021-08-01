class Jeu{
    constructor( Vague vag,  Vaisseau v) {



        this.vag = vag;
        this.v = v;
    
    
        
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