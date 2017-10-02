class Figure {
    constructor (x, y, speed){
        this.x      = x;
        this.y      = y;
        this.speed  = speed;
    }
}

// Player class - update(), render() and handleInput() method.
class Player extends Figure{
    constructor(sprite){
    super();
    this.sprite = 'images/char-boy.png';
}}

Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite, this.x, this.y));
};

Player.prototype.update = function(x, y) {
    if ( x === undefined || y === undefined ) { return; }
    this.x += x;
    this.y += y;
};

Player.prototype.handleInput = function(keyPress) {
  //if (direction == 'up')   
  //if (direction == 'down')  
  //if (direction == 'left')  
  //if (direction == 'right') 
};

// Player.handleInput() method - listens for key presses, sends the keys
document.addEventListener('keyup', function(e) {
    let allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});

// Enemy class - update() with dt parameter, render() and handleInput() method.
class Enemy extends Figure{
    constructor(sprite){
        super();
        this.sprite = 'images/enemy-bug.png';
}}

Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed across devices
    this.x += this.speed * dt;
};

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
const allEnemies = []; //creates an array of Enemies

    allEnemies.forEach(function(enemy) {
    if(player.x >= enemy.x - 25 && player.x <= enemy.x + 25) {
        if(player.y >= enemy.y - 25 && player.y <= enemy.y + 25) {
            player.reset();
            }
        }
    });

// Enemies
const enemy = new Enemy();

// Place the player object in a variable called player
const player = new Player();

//this function will DISPLAY Enemies:
(function displayEnemies() {
    allEnemies.push(new Enemy(0, 50));
    allEnemies.push(new Enemy(0, 140));
    allEnemies.push(new Enemy(0, 230));
}());

// Draw the enemy on the screen
//Enemy.prototype.render = function() {
  //ctx.drawImage(Resources.get(this.sprite, this.x, this.y));
//};

