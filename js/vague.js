const MIN_SPEED = 0.5
const MAX_SPEED = 2

// liste d'ennemis, infos sur le nb d'ennemis, les patterns...
class Vague{
    constructor(ctx) {
        this.initialX = (Math.random() * canvas.width) | 0;
        this.initialY = (Math.random() * canvas.height) | 0;
        this.vitesseX = -(MIN_SPEED + normalize(Math.abs(this.initialX - canvas.width / 2), 0, canvas.width / 2) * (MAX_SPEED - MIN_SPEED));
        this.vitesseY = -(MIN_SPEED + normalize(Math.abs(this.initialY - canvas.height / 2), 0, canvas.height / 2) * (MAX_SPEED - MIN_SPEED));
        this.angle = (Math.random() * 360) | 0;
        this.angle = this.angle * Math.PI / 180; // Transformer degrés en radian

        console.log(this.initialX + " - " + this.initialY + " - " + this.vitesseX + " - " + this.vitesseY + " - " + this.angle)
        console.log(canvas.width / 2 + " - " + canvas.height / 2)

        this.enemies = [];

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
        for (var enemy of this.enemies) {
            enemy.update()
        }
    }

    draw(){
        this.enemies.forEach((e) => e.draw(ctx))
    }
}

// Renvoie une valeur comprise entre 0 et 1 d'une manière proportionnelle.
function normalize(val, max, min) {
    return (val - min) / (max - min);
}