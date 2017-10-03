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
    update () {
        //methods for items that need to happen every frame. none needed at present.
    }
    handleInput (allowedKeys) {
        this.allowedKeys = allowedKeys;
        if(this.allowedKeys === 'left' && this.x > 0) { //player isn't on left edge
            this.x = this.x - 90;
        }
        if(this.allowedKeys === 'right' && this.x < 400) { //player isn't on right edge
            this.x = this.x + 90;
        }
        if(this.allowedKeys === 'up' && this.y > 0) {
            this.y = this.y - 90;
        }
        if(this.allowedKeys === 'down' && this.y < 400) {
            this.y = this.y + 90;
        }
        if(this.y < 0) { //player reaches water, position reset
            this.reset();
        }
    }
    reset () {
        this.x = 100;
        this.y = 400;
    }
}    
// Enemy class: update() with dt parameter and handleInput() method
class Enemy extends Figure{
    constructor(x, y, sprite, speed){
        super(x, y, sprite);
        this.speed = speed;
    }
    update (dt) { //multiply any movement by the dt parameter to ensure the game runs at the same speed across devices
        this.x += this.speed * dt;
    }
    handleInput () {
        //not needed at present.
    }
    reset () {
        this.x = 100;
        this.y = 100;
    }
    collision(){
        if(player.x >= this.x - 35 && player.x <= this.x + 35) {
            if(player.y >= this.y - 35 && player.y <= this.y + 35) {
                player.reset();
                this.reset();
                console.log("hit");
                }
            }
        }
}
// Place all enemy objects in an array called allEnemies
const allEnemies = [
    new Enemy(100, 100,'images/enemy-bug.png', 150),
    new Enemy(280, 180,'images/enemy-bug.png', 150),
    new Enemy(100, 300,'images/enemy-bug.png', 150),
]; 

// Now instantiate your objects.
const displayEnemies = function(Enemy) {
    enemy = new Enemy(0, 100, 100+ Math.floor(Math.random() * 512));
    allEnemies.push(enemy);
}
// Place the player object in a variable called player
const player = new Player(400, 390, 'images/char-boy.png');
