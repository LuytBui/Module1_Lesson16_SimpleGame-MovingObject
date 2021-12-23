/**
 * Created by nhatnk on 4/26/17.
 */

function Hero(image, top, left, size) {
    this.image = image;
    this.top = top;
    this.left = left;
    this.size = size;
    this.speed = 20;

    this.getHeroElement = function () {
        return '<img width="' + this.size + '"' +
            ' height="' + this.size + '"' +
            ' src="' + this.image + '"' +
            ' style="top: ' + this.top + 'px; left:' + this.left + 'px;position:absolute;" />';
    }
    this.setSpeed = function (speed) {
        this.speed = speed;
    }
    this.moveRight = function () {
        this.left += this.speed;
    }
    this.moveLeft = function () {
        this.left -= this.speed;
    }
    this.moveUp = function () {
        this.top -= this.speed;
    }
    this.moveDown = function () {
        this.top += this.speed;
    }

}

var hero = new Hero('img/santa.png', 20, 30, 200);
hero.setSpeed(120);

function moveObj(evt) {
    switch (evt.keyCode) {
        case 38:
            hero.moveUp();
            break;
        case 40:
            hero.moveDown();
            break;
        case 37:
            hero.moveLeft();
            break;
        case 39:
            hero.moveRight();
            break;
    }

}
window.addEventListener('keydown', moveObj);

function draw() {
    document.getElementById('game').innerHTML = hero.getHeroElement();
    setTimeout(draw, 200)
}
draw();