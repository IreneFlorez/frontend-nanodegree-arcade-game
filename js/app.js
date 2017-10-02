class Figure {
    constructor (x, y, sprite){
        this.x      = x;
        this.y      = y;
        this.sprite  = sprite;
    }
    render () {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
}
};

// Player class - update(), render() and handleInput() method.
class Player extends Figure{
    constructor(x, y, sprite){
        super(x, y, sprite);
}
    update () {
        //
    }
}

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
    constructor(x, y, sprite, speed){
        super(x, y, sprite);

        this.speed = speed;
    }
    update (dt) {
        this.x += this.speed * dt;
    }
    //function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed across devices
    //
}

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
const allEnemies = [
    new Enemy(300, 100,'images/enemy-bug.png', 150)
]; //creates an array of Enemies

    //allEnemies.forEach(function(enemy) {
    //if(player.x >= enemy.x - 25 && player.x <= enemy.x + 25) {
        //if(player.y >= enemy.y - 25 && player.y <= enemy.y + 25) {
            //player.reset();
            //}
        //}
    //});

// Enemies


// Place the player object in a variable called player
const player = new Player(400, 200, 'images/char-boy.png');

//this function will DISPLAY Enemies:
//(function displayEnemies() {
    //allEnemies.push(new Enemy(0, 50));
    //allEnemies.push(new Enemy(0, 140));
    //allEnemies.push(new Enemy(0, 230));
//}());



