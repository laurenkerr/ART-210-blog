let seed;

class RandomWalker {
	constructor() {
		this.pos = createVector(width * 0.57, -220);
		this.vel = createVector(2, 0);
		this.acc = createVector();
    }
    
	update() {
		this.vel.add(this.acc);
		this.pos.add(this.vel);
		this.vel.x = map(this.pos.x, 0, width * 0.485, 10, 0);
			if (this.vel.x <= 9.0) {
				this.vel.y += 0.9;
			}
		  return this;
  }
    
	display() {
        noStroke();
        fill(140, 42, 42);
        ellipse(this.pos.x, this.pos.y, 16, 32);
		return this;
  }

  edges() {
		if (this.pos.y >= (height * 1.5) ){
			this.vel.y *= 0;
			this.vel.x *= 0;
		}
		return this;
  }

  playSound() {
	seedSound.play();
	}
	
	run() {
		if (spit.isSpitting) {
		  return this.update().display().edges();
		}
	}
}