let rain = [];
let isRaining = false;

class Rain {
  constructor() {
    this.pos = createVector(random(width * 0.37, width * 0.65), random(height, height * 1.6));
    this.gravity = 0;
    this.isRaining = false;
  }

  show() {
    noStroke();
    fill(0, 0, 139);
    ellipse(this.pos.x, this.pos.y, 4, 16);
  }

  update() {
    this.speed = random(15, 25);
    this.gravity = 1.05;
    this.pos.y = this.pos.y + this.speed * this.gravity;

    if (this.pos.y > height * 1.6) {
      this.pos.y = random(height, height * 1.6);
      this.gravity = 0;
    }
  }

  run() {
      this.show();
      this.update();
  }

  killRain() { 
  rain.splice(0,1);
  this.isRaining = false;
  beanstalk.isGrowing = true;
  }   
}