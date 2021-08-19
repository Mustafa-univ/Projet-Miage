let MIN_SPEED = 0.5;
let MAX_SPEED = 2;

// liste d'ennemis, infos sur le nb d'ennemis, les patterns...
class Vague{
    constructor() {
        this.enemies = [];

        // Recréer une vague si plus d'ennemis au bout de 5 secondes.
        setInterval(function() {
            if (this.enemies.length == 0) {
                console.log('t')
                // On augmente la vitesse
                MIN_SPEED += 0.5;
                MAX_SPEED += 0.5;

                this.initVague();
            }
        }.bind(this), 5000);
    }

    initVague() {
        this.vitesseX = MIN_SPEED + Math.random() * MAX_SPEED;
        this.vitesseY = MIN_SPEED + Math.random() * MAX_SPEED;

        if (Math.random() < 0.5) {
            this.initialX = 0;
        } else {
            this.initialX = canvas.width;
            this.vitesseX = -this.vitesseX;
            this.vitesseY = -this.vitesseY;
        }
        
        this.initialY = 100 + (Math.random() * (canvas.height - 200));
        
        this.angle = (Math.random() * 360) | 0;
        this.angle = this.angle * Math.PI / 180; // Transformer degrés en radian

        // Spawn des ennemies
        var i = 0;
        var nbEnemies = 5 + (Math.random() * 5);

        var enemySpawnInterval = setInterval(function() {
            this.enemies.push(new Enemie(this.initialX, this.initialY, this.angle, this.vitesseX, this.vitesseY));
            i++;
            if (i >= nbEnemies)
                clearInterval(enemySpawnInterval);
        }.bind(this), 500);
    }

    update(){
        this.enemies = this.enemies.filter(e => !e.removed);
        //appelle la fonction update() de tous les ennemis contenus dans la liste d'ennemi
        this.enemies.forEach((e) => e.update());
    }

    draw(){
        this.enemies.forEach((e) => e.draw(ctx));
    }
}

// Renvoie une valeur comprise entre 0 et 1 d'une manière proportionnelle.
function normalize(val, max, min) {
    return (val - min) / (max - min);
}