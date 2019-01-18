let clouds;
let img_clouds = [];

//Big Cloud
let imgBcloud, imgTBcloud, imgBBcloud, imgOBcloud;

class Clouds {
    constructor() {
    this.pos = createVector();
    this.float = 18;
		this.maxHeight = 42;
		this.minHeight = 33;
		this.floatSpeed = .04;
    }
    
    update() {
      this.float = map(sin((millis() * 0.05) * this.floatSpeed), -1.0, 1.0, this.maxHeight, this.minHeight)	
      return this;
    }
    
    display() {
       image(img_clouds[0], map(mouseX, 0, width, width*0.21, width*0.26), height * 1.1 + this.float, img_clouds[0].width * 0.8, img_clouds[0].height * 0.8);
       image(img_clouds[1], map(mouseX, 0, width, width*0.72, width*0.67), height * 0.85 + this.float, img_clouds[1].width * 0.8, img_clouds[1].height * 0.8);
       image(img_clouds[4], map(mouseX, 0, width, width*0.74, width*0.79), -600 + this.float, img_clouds[4].width * 0.8, img_clouds[4].height * 0.8);
       image(img_clouds[3], map(mouseX, 0, width, width*0.86, width*0.81), -500  + this.float, img_clouds[3].width * 0.8, img_clouds[3].height * 0.8);
       image(img_clouds[5], map(mouseX, 0, width, width*0.07, width*0.12),-500 + this.float, img_clouds[5].width * 0.8, img_clouds[5].height * 0.8);
       image(img_clouds[2], map(mouseX, 0, width, width*0.4, width*0.35), 400 + this.float, img_clouds[2].width * 0.8, img_clouds[2].height * 0.8);

      //Big Cloud 
       image(imgBcloud, width * 0.5, -20, imgBcloud.width * 0.8, imgBcloud.height * 0.7);
       image(imgBTcloud, width * 0.5, -90, imgBTcloud.width * 0.8, imgBTcloud.height * 0.8);
       return this;
    }

    render() {
		return this.update().display();
	  }
}

