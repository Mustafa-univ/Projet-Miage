window.onload = init;
let vaisseau;
let canvas, ctx, canvasLargeur, CanvasHauteur;
let scoreText;
let mousepos = {};
let userState = "rien"
let jeu = null

const UPDATE_PER_SECOND = 60

function init(vaisseau,enemis,jeu) {
    canvas = document.querySelector("#myCanvas");
    ctx = canvas.getContext('2d');
    width = canvas.width;
    height = canvas.height;

    scoreText = document.querySelector("#score");

    canvas.addEventListener('mousemove', function (evt) {
      mousepos = getMousePos(canvas, evt);
    }, false);

    var startButton = document.querySelector("#startButton");
    startButton.addEventListener('click', function(evt) {
      startButton.style.display = 'none';
      // dernier param = temps min entre tirs consecutifs. Mettre à 0 pour cadence max
      // 500 = 2 tirs max par seconde, 100 = 10 tirs/seconde
      jeu = new Jeu(ctx, new Vaisseau(100, 100, 0, 1, 100));

      var gameLoop = setInterval(function() {
        jeu.update() // Fonction de calcul
        if (jeu.removed) {
          clearInterval(gameLoop);
          startButton.style.display = 'block';
          ctx.clearRect(0, 0, canvas.width, canvas.height);
          MIN_SPEED = 0.5;
          MAX_SPEED = 2;
          return;
        }
        jeu.draw() // Fonction de rendu une fois que tout a été calculé
      }, 1000 / UPDATE_PER_SECOND)
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