let rainCloudWidth; 
let rainCloudHeight;
let overRainCloud = false;
let locked = false;
let xOffset = 0.0; 
let yOffset = 0.0; 
let imgCloud6;

class Raincloud {
    constructor() {
      this.pos = createVector (width * 0.8, height * 1.03);
      this.overRainCloud = false;
      this.isThunder = false;
    }
  
    show() {
      image(img_clouds[6], this.pos.x, this.pos.y, img_clouds[6].width * 0.8, img_clouds[6].height * 0.8);
    }
  
    display() {
      if (mouseX > this.pos.x - 250 && mouseX < this.pos.x + 250 && mouseY > this.pos.y - 625 && mouseY < this.pos.y -475) { 
        this.overRainCloud = true;
        this.isThunder = true;
      } else {
        this.overRainCloud = false;
        this.isThunder = false;
      }
    }
  
    playThunder() {
      if (thunder.isPlaying()) { 
        thunder.play()
      } else {
        thunder.stop();
      }
    }
}



