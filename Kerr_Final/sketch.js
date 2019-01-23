let imgSky, imgHills, imgSun, imgPot

let potX = 0;
let seedY = 500;

//AUDIO
let music, seedSound, thunder, audRain, audMunch, audSpit;
let isThunder = false;
let isPlaying = false;

//CONSTANTS
let spitNUM_IMAGES = 9;
let NUM_IMAGES = 9;
let beanNUM_IMAGES = 8;
let berryNUM_IMAGES = 18;
let cloudsNUM_IMAGES = 7;

let txt_water, txt_feed, textW, textF;
let notRaining = true;
let rainCanSound = true;

//FULLSCREEN
let canvas, ctx, sizeRect, scroll, burner;

function preload() {
  imgHills = loadImage('assets/Hills.png');
  imgSun = loadImage('assets/Sun.png');
  imgPot = loadImage('assets/background/pot.svg');
  txt_water = loadImage('assets/water.png');
  txt_feed = loadImage('assets/feed.png');
  
  for (let i = 0; i < NUM_IMAGES; i++) {
    img_dragon[i] = loadImage("assets/dragons/dragon" + i + ".png");
  }

  for (let i = 0; i < berryNUM_IMAGES; i++) {
    img_berry[i] = loadImage("assets/berries/berry" + i + ".png");                     
  }
       
  for (let i = 0; i < beanNUM_IMAGES; i++) {
  	img_beanstalk[i] = loadImage("assets/beanstalks/beanstalk" + i + ".png");
  }

  for (let i = 0; i < spitNUM_IMAGES; i ++) {
    img_spit[i] = loadImage("assets/spit/spit" + i + ".png");
  }

  for (let i = 0; i < cloudsNUM_IMAGES; i ++) {
    img_clouds[i] = loadImage("assets/Clouds/Cloud" + i + ".png");
  }

//Big Cloud  
  imgBcloud = loadImage('assets/gray outline of big cloud.png');
  imgBTcloud = loadImage('assets/top of big cloud.png');
  imgBBcloud = loadImage('assets/bottom of big cloud.png');
  imgOBcloud = loadImage('assets/background/cloudopening.svg');
  
//Audio
  soundFormats('mp3', 'ogg', 'wav');
  music = loadSound('assets/audio/Snack_Time.mp3');
  seedSound = loadSound('assets/audio/seed.mp3');
  audRain = loadSound('assets/audio/rain.wav');
  thunder = loadSound('assets/audio/thunder.wav');
  audMunch = loadSound('assets/audio/munch.mp3');
  audSpit = loadSound('assets/audio/spitsound.wav');
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
	ctx = canvas.drawingContext;
	sizeRect = width;
	rectMode(CENTER);
  scroll = -9692;
  
//RAIN
  for (var i = 0; i < 100; i++) {
    rain[i] = new Rain();
  }
   
   rainCloudX = width*0.57;
   rainCloudY = height * 0.74;

//AUDIO
  music.setVolume(0.03);
  music.play();  
  seedSound.setVolume(0.03);
  seedSound.play();
  audRain.setVolume(20);
  thunder.setVolume(.5);
  audMunch.setVolume(1);
  audRain.setVolume(1);
  audSpit.setVolume(.08);

//CLASSES 
  rainCloud = new Raincloud(); 
  dragon = new Dragon(width * 0.7, height * 0.4);
  beanstalk = new Beanstalk(width * 0.5, height * 0.9);
  berry = new Berry();
  spit = new Spit(width * 0.5, height * 0.4);
  seed = new RandomWalker();
  clouds = new Clouds();
  textW = new TextW();
  textF = new TextF();
}
 
function mouseWheel(event) {
	scroll += event.delta * 2;
	if (scroll >= 12230) {
		scroll = 12230;
	}
	if (scroll <= -9692) {
		scroll = -9692;
	}
  return false;
}

function draw() {
 background(51);
  fill(135, 206, 250);
	push();
	translate(0, map(scroll, 0, height, 0, 42));
	ctx.fillRect(0, -windowHeight, sizeRect, window.innerHeight * 3);
  // console.log(frameRate()); 
  
//BACKGROUND IMAGES
  imageMode(CENTER);
  image(imgHills, width * 0.5, height * 1.56, imgHills.width*.8, imgHills.height*.8);
  image(imgSun, width * 0.29, height * 1.09, imgSun.width * 0.8, imgSun.height *0.8);
  clouds.render();

//Seed
  push();
  noStroke();
  fill(140, 42, 42);
  ellipse(width * 0.51, seedY, 16, 32);
  if (potX >= width * 0.5) {
    if (seedY > height * 1.5) {
      seedY = seedY - 40;
    }
    seedY = seedY + 40
  }
  pop();

//Second seed 
  seed.run();

//Pot
  push();
  image(imgPot, potX, height * 1.47, imgPot.width * 1.2, imgPot.height* 1.2);
  if (potX > width * 0.5) {
    potX = potX - 35;
  }
  potX = potX + 35
  pop();
 
//RAIN 
  Rain
  if (isRaining) {
    for (var i = 0; i < rain.length; i++) {
      rain[i].run();
      setTimeout(rain[i].killRain, 4000);
      notRaining = false;
    }
  }
    rainCloud.show();
    rainCloud.display();
  
//BEANSTALK
  beanstalk.grow();
  beanstalk.ungrow();
 
  image(imgBBcloud, width * 0.5, height * .1, imgBBcloud.width, imgBBcloud.height);
  image(imgOBcloud, width * 0.5, height * 0, imgOBcloud.width, imgOBcloud.height);

//DRAGON
if (dragonAlive){
 dragon.run();
 }

//Spit
 spit.run();

//TEXT
if (notRaining) {
  if (seedY >= height * 1.5) {
    textW.render();
  } 
}

textF.render();

pop();
}


function mouseClicked() {
      if (beanstalk.isGrowing) {
      if (mouseX > width * 0.51 && mouseX < width * 0.57) {
      dragon.isBerryClicked = true;
      text.feed = false;
      setTimeout(berry.playMunch, 4500);
    } 
  }
  if (berry.isDead) {
    if (mouseX > width * 0.63 && mouseX < width * 0.66) {
      dragon.isClicked = true;
      audSpit.play();
      setTimeout(seed.playSound, 2000);
    }
  }
}


function mousePressed() {
  if (rainCanSound) {
  if(rainCloud.overRainCloud) { 
    locked = true; 
    thunder.play();
  } else {
    locked = false;
    thunder.stop();
  }
}
  xOffset = mouseX-rainCloud.pos.x; 
  yOffset = mouseY-rainCloud.pos.y; 
}

function mouseDragged() {
  if(locked) {
    rainCloud.pos.x = mouseX-xOffset; 
    rainCloud.pos.y = mouseY-yOffset; 
  }
}

function mouseReleased() {
  locked = false;
    if (rainCloud.pos.x > width * 0.4 && rainCloud.pos.x < width * 0.6 && mouseX > width * 0.4 && mouseX < width * 0.6) {  
      isRaining = true; 
    }else{
      isRaining = false;
    }
  if (isRaining){
    if (rainCanSound) {
   audRain.play();  
  }
 }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

