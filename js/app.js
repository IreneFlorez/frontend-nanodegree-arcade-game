//render() method for all figures
class Figure {
    constructor (x, y, sprite){
        this.x      = x;
        this.y      = y;
        this.sprite  = sprite;
    }
    render () {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
}
}
// Player class: Player.handleInput() method event listener - listens for key presses, sends the keys
document.addEventListener('keyup', function(e) {
    let allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
// Player class: update() and handleInput() method
class Player extends Figure{
    constructor(x, y, sprite){
        super(x, y, sprite);
    }
    handleInput (allowedKeys) {
        this.pressedKey = e;
    }
    update () {
        if(this.allowedKeys === 'left') { 
            this.x = this.x - 100;
        }
        if(this.allowedKeys === 'right') { 
            this.x = this.x + 100;
        }
        if(this.allowedKeys === 'up') {
            this.y = this.y - 90;
        }
        if(this.allowedKeys === 'down') {
            this.y = this.y + 90;
        }
        if(this.y < 0) { 
            this.reset();
        }
    }
    reset () {
        this.x = 50;
        this.y = 330;
    }
    //allEnemies.forEach(function(enemy) {
    //if(self.x >= enemy.x - 25 && self.x <= enemy.x + 25) {
        //if(self.y >= enemy.y - 25 && self.y <= enemy.y + 25) {
            //self.reset();
            //}
        //}
    //});
}    

// Enemy class: update() with dt parameter and handleInput() method
class Enemy extends Figure{
    constructor(x, y, sprite, speed){
        super(x, y, sprite);
        this.speed = speed;
    }
    update (dt) {
        this.x += this.speed * dt;
    }
    //function(dt) - multiply any movement by the dt parameter to ensure the game runs at the same speed across devices
    handleInput () {
        //
    }
    //Display Enemies:
    //allEnemies.push(new Enemy(0, 50));
    //allEnemies.push(new Enemy(0, 140));
    //allEnemies.push(new Enemy(0, 230));
    //}());
}
// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
const allEnemies = [
    new Enemy(100, 100,'images/enemy-bug.png', 150),
    new Enemy(280, 180,'images/enemy-bug.png', 150),
    new Enemy(100, 300,'images/enemy-bug.png', 150),
]; 

// Place the player object in a variable called player
const player = new Player(50, 330, 'images/char-boy.png');
