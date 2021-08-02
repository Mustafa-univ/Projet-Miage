window.onload = init;

let canvas, ctx, canvasLargeur, CanvasHauteur;
let mousepos = {};
let userState = "rien"

function init() {
    canvas = document.querySelector("#myCanvas");
    ctx = canvas.getContext('2d');
    width = canvas.width;
    height = canvas.height;
  
    // dernier param = temps min entre tirs consecutifs. Mettre à 0 pour cadence max
    // 500 = 2 tirs max par seconde, 100 = 10 tirs/seconde
    char1 = new Char(100, 100, 0, 1, 100);

    canvas.addEventListener('mousemove', function (evt) {
        mousepos = getMousePos(canvas, evt);
    }, false);

    window.addEventListener('click', function (evt) {
        // on passe le temps en parametres, en millisecondes
        char1.addBullet(Date.now()); 
      
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

    anime();
}


  function startGame(assetsLoaded) {
    canvas = document.querySelector("#myCanvas");
    ctx = canvas.getContext("2d");
    test = canvas.getContext("2d");
    canvasLargeur = canvas.width;
    canvasHauteur = canvas.height;
  

  
    canvas.onmousedown = traiteMouseDown;
    canvas.onmouseup = traiteMouseUp;
    canvas.onmousemove = traiteMouseMove;
  
    requestAnimationFrame(animationLoop);
  }