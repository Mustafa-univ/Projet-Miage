window.onload = init;
let vaisseau;
let canvas, ctx, canvasLargeur, CanvasHauteur;
let mousepos = {};
let userState = "rien"
let jeu = null

const UPDATE_PER_SECOND = 60

function init(vaisseau,enemis,jeu) {
    canvas = document.querySelector("#myCanvas");
    ctx = canvas.getContext('2d');
    width = canvas.width;
    height = canvas.height;

    canvas.addEventListener('mousemove', function (evt) {
      mousepos = getMousePos(canvas, evt);
    }, false);

    // dernier param = temps min entre tirs consecutifs. Mettre à 0 pour cadence max
    // 500 = 2 tirs max par seconde, 100 = 10 tirs/seconde
    jeu = new Jeu(ctx, new Vaisseau(100, 100, 0, 1, 100));

    setInterval(function() {
      jeu.update() // Fonction de calcul
      jeu.draw() // Fonction de rendu une fois que tout a été calculé
    }, 1000 / UPDATE_PER_SECOND)

    window.addEventListener('click', function (evt) {
        // on passe le temps en parametres, en millisecondes
        char1.addBullet(Date.now()); 
        enemie1.addEnemie(Date.now());
        // NOTE : si tu n'utilises pas inputStates.MOUSEDOWN
        // ici, mais juste l'évébement click au lieu de mousedown
        // tu ne pourras pas tirer plus vite, il te faudra
        // marteler le bouton.
        // compare en gardant space appuyé avec la cadence de
        // tir à zero.  
    });
  
  window.addEventListener('keydown', function(evt) {
    inputStates.SPACE = true;
  });
  
  window.addEventListener('keyup', function(evt) {
    
    inputStates.SPACE = false;
  });
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


/*  function startGame() {
    canvasLargeur = canvas.width;
    canvasHauteur = canvas.height;
  

  
    canvas.onmousedown = traiteMouseDown;
    canvas.onmouseup = traiteMouseUp;
    canvas.onmousemove = traiteMouseMove;
  
    requestAnimationFrame(animationLoop);
  } */