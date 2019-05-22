var canvas = document.getElementById("canvas");
var context = canvas.getContext("2d");

// Load the Flappy Bird game images

var flappyBird = new Image();
var background = new Image();
var ground = new Image();
var topPipe = new Image();
var bottomPipe = new Image();

var date = new Date();

// Loads the Flappy Bird sprite.
flappyBird.src = "https://raw.githubusercontent.com/RikkuX491/RikkuX491.github.io/master/images/FlappyBird_WingUp.png";

// The background is determined by the time of day.
// If it's between 8:00 pm and 4:00 am, the night background will display.
// Else, the day background will display.
if(date.getHours() <= 4 || date.getHours() >= 20){
  background.src = "https://raw.githubusercontent.com/RikkuX491/RikkuX491.github.io/master/images/Background_Night.png";
}
else background.src = "https://raw.githubusercontent.com/RikkuX491/RikkuX491.github.io/master/images/Background_Day.png";

// Loads the ground image.
ground.src = "https://raw.githubusercontent.com/RikkuX491/RikkuX491.github.io/master/images/Ground.png";
// Loads the Top Pipe sprite.
topPipe.src = "https://raw.githubusercontent.com/RikkuX491/RikkuX491.github.io/master/images/Pipe_Top_Green2.png";
// Loads the Bottom Pipe sprite.
bottomPipe.src = "https://raw.githubusercontent.com/RikkuX491/RikkuX491.github.io/master/images/Pipe_Bottom_Green.png";

// A boolean variable: Can we start the game yet?
var startGame = false;

// A boolean variable: Is the game over yet?
var gameOver = false;

// The distance between the Top Pipe and the Bottom Pipe.
var pipeGap = 85;
var fullPipeGap;

// The x coordinate of the Flappy Bird sprite.
var fbX = 125;
// The y coordinate of the Flappy Bird sprite.
var fbY = 200;

// The gravity (how quickly Flappy Bird will fall to the ground).
// Initially set to 0, since the game has not started yet.
var gravity = 0;

// The player's current score. Initially set to 0.
var score = 0;

// The audio sound for when Flappy Bird flaps its wings.
var flySound = new Audio();
// The audio sound that plays each time the player passes a pipe
// and earns a point.
var scoreSound = new Audio();
// The audio sound that plays when Flappy Bird collides with a pipe,
// or falls to the ground. Plays on collision.
var collisionSound = new Audio();

// Imports the flySound.
flySound.src = "https://raw.githubusercontent.com/RikkuX491/RikkuX491.github.io/master/soundEffects/sfx_wing.wav";
// Imports the scoreSound.
scoreSound.src = "https://raw.githubusercontent.com/RikkuX491/RikkuX491.github.io/master/soundEffects/sfx_point.wav";
// Imports the collisionSound.
collisionSound.src = "https://raw.githubusercontent.com/RikkuX491/RikkuX491.github.io/master/soundEffects/sfx_hit.wav";

// When any key is pressed on the keyboard, Flappy bird
// will flap its wings and fly up.
document.addEventListener("keydown",moveUp);

// Start the Flappy Bird game.
function startTheGame(){
    startGame = true;
    // Set the gravity to 1.5.
    gravity = 2.0;
}

// Flappy Bird will flap its wings and fly up.
function moveUp(){
    // If the game is over, Flappy Bird can no longer move.
    if(gameOver != true){
      // Otherwise, if the game has begun, Flappy Bird
      // will flap its wings and fly up.
      if(startGame == true){
        gravity = 2.0;
        fbY -= 33;
        flySound.play();
      }
      // If the game has not started yet, start the game.
      else startTheGame();
    }
}

// pipe coordinates
var pipe = [];

pipe[0] = {
    x : canvas.width,
    y : 0
};
// draw images

function draw(){

    context.drawImage(background,0,0);

    if(startGame == true){

      for(var i = 0; i < pipe.length; i++){

          fullPipeGap = topPipe.height+pipeGap;
          context.drawImage(topPipe,pipe[i].x,pipe[i].y);
          context.drawImage(bottomPipe,pipe[i].x,pipe[i].y+fullPipeGap);

          // If the game is over, stop the movement of the pipes.
          // Otherwise, the pipes will continue to move as the
          // game continues.
          if(gameOver != true) pipe[i].x--;

          if( pipe[i].x == 125 ){
              pipe.push({
                x : canvas.width,
                y : Math.floor(Math.random()*topPipe.height)-topPipe.height
              });
          }

          // detect collision
          if(fbX + flappyBird.width >= pipe[i].x && fbX <= pipe[i].x + topPipe.width && (fbY <= pipe[i].y + topPipe.height || fbY+flappyBird.height >= pipe[i].y+fullPipeGap) || fbY + flappyBird.height >=  canvas.height - ground.height){
            if(gameOver != true) endTheGame();
            //location.reload(); // reload the page
          }

          if(pipe[i].x + topPipe.width == fbX){
            score++;
            scoreSound.play();
          }

          if(gameOver == true){
            // Display the Game Over message.
            context.fillText("GAME OVER", 85, (canvas.height / 2) - 35);
          }
      }
    }

    context.drawImage(ground,0,canvas.height - ground.height);

    context.drawImage(flappyBird,fbX,fbY);

    fbY += gravity;
    if(startGame && !gameOver) gravity += 0.1;

    context.fillStyle = "#000";
    context.font = "20px Verdana";
    context.fillText("Score: "+score,100,canvas.height-20);
    //context.fillText("GAME OVER", 85, (canvas.height / 2) - 35);

    requestAnimationFrame(draw);
}

draw();

// End the Flappy Bird game.
function endTheGame(){
    gameOver = true;

    // Play the collision sound effect.
    collisionSound.play();

    // Stop Flappy Bird from moving.
    gravity = 0;
}
