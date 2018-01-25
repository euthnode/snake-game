const c = document.getElementById("canvas");
const ctx = c.getContext("2d");

var snakeDirection;

var snake = {
    x: 240, //middle
    y: 240, //middle
    size: 20,
};

//draws the snake
function drawSnake() {

    //makes the snake
    ctx.fillRect(snake.x, snake.y, snake.size, snake.size);

    //check if the snake hit the wall
    gameOver();

    //call the function to move the snake
    move();
}

//moves the snake
function move() {

    //move up
    if (snakeDirection == "up") {
        snake.y -= snake.size;

    //move down
    } else if (snakeDirection == "down") {
        snake.y += snake.size;

    //move left
    } else if (snakeDirection == "left") {
        snake.x -= snake.size;

    //move right
    } else if (snakeDirection == "right") {
        snake.x += snake.size;
    }
}

function gameOver() {

    //checks x axis
    if (snake.x < 0 || snake.x > c.width - snake.size) {
        ctx.clearRect(0, 0, c.width, c.height);
        snake.x = 240;
        snake.y = 240;
        snakeDirection = null;

    //checks y axis
    } else if (snake.y < 0 || snake.y > c.height - snake.size) {
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
