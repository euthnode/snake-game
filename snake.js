const c = document.getElementById("canvas");
const ctx = c.getContext("2d");

var snakeDirection;

var snake = {
    x: 240, //middle
    y: 240, //middle
    width: 20,
    height: 20
};

//draws the snake
function drawSnake() {

    //makes the snake
    ctx.fillRect(snake.x, snake.y, snake.width, snake.height);

    //check if the snake hit the wall
    if ((snake.x < 0 || snake.x > c.width - snake.width) || (snake.y < 0 || snake.y > c.height - snake.Height)) {
        //clear screen
        ctx.clearRect(0, 0, c.width, c.height);
        snake.x = 240;
        snake.y = 240;
        snakeDirection = 0;
    }

    //call the function to move the snake
    move();

}

//moves the snake
function move() {

    //move up
    if (snakeDirection == 1) {
        snake.y -= 20;

    //move down
    } else if (snakeDirection == -1) {
        snake.y += 20;

    //move left
    } else if (snakeDirection == 2) {
        snake.x -= 20;

    //move right
    } else if (snakeDirection == -2) {
        snake.x += 20;

    }
}

//checks for key presses
document.addEventListener("keydown", function(event) {
    var key = event.keyCode;

    //up
    if ((key == 119 || key == 87 || key == 38) && snakeDirection != -1) {
        snakeDirection = 1;

    //down
    } else if ((key == 115 || key == 83 || key == 40) && snakeDirection != 1) {
        snakeDirection = -1;

    //left
    } else if ((key == 97 || key == 65 || key == 37) && snakeDirection != -2) {
        snakeDirection = 2;

    //right
    } else if ((key == 100 || key == 68 || key == 39) && snakeDirection != 2) {
        snakeDirection = -2;
    }
});

//create a timer to run the game
var init = (function() {
    var game = setInterval(drawSnake, 100);
}());
