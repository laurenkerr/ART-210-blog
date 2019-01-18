let img_spit = [];
let spit;

class Spit {
    constructor(_x, _y) {
        this.pos = createVector(width * 0.65, -150);
        this.index = 0;
        this.isSpitting = false;
    }

    run() {
        if (dragon.isClicked){
            this.isSpitting = true; 
            dragonAlive = false;
             if (this.index >= 8) {
                this.index = 8;
             } else {
                this.index = (this.index + 1); 
             }
         image(img_spit[this.index], this.pos.x, this.pos.y, img_spit[this.index].width * 0.85, img_spit[this.index].height * 0.85); 
        }
    }
}  


