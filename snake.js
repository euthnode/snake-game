const c = document.getElementById("canvas");
const ctx = c.getContext("2d");

var snakeDirection;

var size = 20;

/*

MAJOR OVERHAUL:

ADD ARRAYS WITH THE SNAKE
REMOVE VAR SNAKE
CHANGE SNAKE VARIABLES TO NEW ARRAY

*/


var snake = [];

snake[0] = {
  x: 12 * size,
  y: 12 * size
}

var snakeX;
var snakeY;

score = 0;

//draws the snake
function drawSnake() {

    //makes the snake
    for(var i = 0; i <snake.length; i++){
    ctx.fillRect(snake[i].x, snake[i].y, size, size);
  }


    //check if the snake hit the wall

/* REMOVE ME
  gameOver();
*/
    //call the function to move the snake
    move();

    remove();
}



//moves the snake
function move() {

  snakeX = snake[0].x;
  snakeY = snake[0].y;

    //move up
    if (snakeDirection == "up") {
        snakeY -= size;

    //move down
    } else if (snakeDirection == "down") {
        snakeY += size;

    //move left
    } else if (snakeDirection == "left") {
        snakeX -= size;

    //move right
    } else if (snakeDirection == "right") {
        snakeX += size;
    }

}

function remove(){
  snake.pop();

  var newHead = {
    x:snakeX,
    y:snakeY
  }

  snake.unshift(newHead);
}

function gameOver() {

    //checks x axis
    if (snake.x < 0 || snake.x > c.width - size) {
        ctx.clearRect(0, 0, c.width, c.height);
        snake.x = 240;
        snake.y = 240;
        snakeDirection = null;

    //checks y axis
    } else if (snake.y < 0 || snake.y > c.height - size) {
        ctx.clearRect(0, 0, c.width, c.height);
        snake.x = 240;
        snake.y = 240;
        snakeDirection = null;
    }
}

//clears canvas and draws snake
function draw() {
    ctx.clearRect(0, 0, c.width, c.height);
    drawSnake();
}

//checks for key presses
document.addEventListener("keydown", function(event) {
    var key = event.keyCode;

    //up
    if ((key == 119 || key == 87 || key == 38) && snakeDirection != "down") {
        snakeDirection = "up";

    //down
    } else if ((key == 115 || key == 83 || key == 40) && snakeDirection != "up") {
        snakeDirection = "down";

    //left
    } else if ((key == 97 || key == 65 || key == 37) && snakeDirection != "right") {
        snakeDirection = "left";

    //right
    } else if ((key == 100 || key == 68 || key == 39) && snakeDirection != "left") {
        snakeDirection = "right";
    }
});

//create a timer to run the game
var init = (function() {
    var game = setInterval(draw, 70);
}());
