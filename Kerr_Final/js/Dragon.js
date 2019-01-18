let img_dragon = [];
let index = 0;
let dragonWalking = false;
let dragon;
let isClicked = false;
let dragonAlive = true;

class Dragon {
    constructor(_x, _y) {
        this.pos = createVector(width * 0.82, -150);
        this.vel = createVector();
        this.acc = createVector();
        this.dragonWalking = false;
        this.isBerryClicked = false;
        this.eatingBerry = false;
        this.isClicked = false;
    }

    update() {
        this.vel.add(this.acc);
        this.pos.add(this.vel);
        if (this.dragonWalking) {
            this.vel.x = -5;
        } else {
            this.vel.x = 0;
        }
        if (this.pos.x > width * 0.645 && this.pos.x < width * 0.65) {
            this.vel.mult(0);
            this.dragonWalking = false;
            this.eatingBerry = true;
        }
    }
    display() {
        if (this.dragonWalking) {
            image(img_dragon[index], this.pos.x, this.pos.y, img_dragon[index].width * 0.6, img_dragon[index].height * 0.6);
            index = (index + 1) % img_dragon.length;
        } else {
            image(img_dragon[index], this.pos.x, this.pos.y, img_dragon[index].width * 0.6, img_dragon[index].height * 0.6);
        }
    }

    playSprite() {
        if (this.isBerryClicked ) {
            this.dragonWalking = true;
        } else {
            this.dragonWalking = false;
        }
    }

    run() {
        this.update();
        this.display();
        this.playSprite();
    }
}

