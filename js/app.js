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
            this.x = this.x - 100;
        }
        if(this.allowedKeys === 'right' && this.x < 400) { //player isn't on right edge
            this.x = this.x + 100;
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
    update (dt) { //multiply any movement by the dt parameter to ensure the game runs at the same speed across devices
        this.x += this.speed * dt;
    }
    handleInput () {
        //not needed at present.
    }
    collision(){
        //
    }
}
// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
const allEnemies = [
    //new Enemy(100, 100,'images/enemy-bug.png', 150),
    //new Enemy(280, 180,'images/enemy-bug.png', 150),
    //new Enemy(100, 300,'images/enemy-bug.png', 150),
]; 
    displayEnemies() {
    allEnemies.push(new Enemy(0, 50,'images/enemy-bug.png', 150));
    allEnemies.push(new Enemy(0, 140));
    allEnemies.push(new Enemy(0, 230));
    }
// Place the player object in a variable called player
const player = new Player(100, 400, 'images/char-boy.png');
