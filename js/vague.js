// liste d'ennemis, infos sur le nb d'ennemis, les patterns...
class Vague{
    constructor(x, y, angle, vitesse) {



        this.x = x;
        this.y = y;
        this.angle = angle;
        this.v = vitesse;
    }
    update(){
        //appelle la fonction update() de tous les ennemis contenus dans la liste d'ennemi
        for (var enemy in enemies) {
            enemy.update()
          }
        
    }
    draw(){
        enemis.forEach((e) => e.draw(ctx))
    }
}