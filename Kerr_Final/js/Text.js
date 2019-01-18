let wWidth = 0;
let wHeight = 0;
let fWidth = 0;
let fHeight = 0;
let overDragon = false;

class TextW {
    constructor(_x, _y) {
        this.pos = createVector(width * 0.51, height * 1.5);
    }

    render () {
        if (wWidth <= txt_water.width * 2) { 
            wWidth = wWidth + 30;
        }
        if (wHeight <= txt_water.height * 2) {
            wHeight = wHeight + 30;
        }     
        if (this.pos.y >= height * 1.3) {
            this.pos.y = this.pos.y - 30;
        }
        image(txt_water, this.pos.x, this.pos.y, wHeight); 
    }
}

class TextF {
    constructor(_x, _y) {
        this.pos = createVector(width * 0.745, -250);
        this.feed = true;
    }

    render () {
        if (this.feed = true) {
            if (mouseX > width * 0.73 && mouseX < width * 0.9 && mouseY > height * 0.55 && mouseY < height * 0.9 ) {  
            image(txt_feed, this.pos.x, this.pos.y, txt_feed.width * 0.7, txt_feed.height * 0.7); 
            }
        }
    }  
}