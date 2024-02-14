let img;

let dvdX = 200;
let dvdY = 0;
let dvdXSpeed = 2;
let dvdYSpeed = 2;

let quadLeft = 300;
let quadRight = 500;
let quadLeftSpeed = -3;
let quadRightSpeed = 3;

let arcLimiter = 5;
let arcX = 100;
let arcY = 300;

function preload() {
  img = loadImage('./dvd_small.png');
  font = loadFont('./COMIC.TTF')
}

function setup() {
  createCanvas(800, 600);
  textFont(font);
  textSize(32);
  textAlign(CENTER, CENTER);
}

function draw() {
  background(220);

  fill("lightblue");
  stroke("blue");
  strokeWeight(10);
  quad(400,0,quadLeft,300,400,600,quadRight,300);

  quadLeft = quadLeft + quadLeftSpeed;
  quadRight = quadRight + quadRightSpeed;

  if (quadLeft < 0 || quadLeft > 300) {
    quadLeftSpeed = quadLeftSpeed * -1;
  }
  if (quadRight < 500 || quadRight > width) {
    quadRightSpeed = quadRightSpeed * -1;
  }
  
  noStroke();
  fill("purple");
  text('Made By Peter Forbes', 400, 250);
  fill("orange");
  text('Graphic Design Is My Passion', 400, 350);

  fill("yellow");
  stroke("black");
  strokeWeight(2);
  if (arcLimiter % 20 === 0) {
    arcX = random(width);
    arcY = random (height);
  }
  arc(arcX,arcY,100,100,0+QUARTER_PI,0-QUARTER_PI,PIE);
  arcLimiter++;

  image(img, dvdX, dvdY);

  dvdX = dvdX + dvdXSpeed;
  dvdY = dvdY + dvdYSpeed;

  if (dvdX < 0 || dvdX > width - 240) {
    dvdXSpeed = dvdXSpeed * -1;
  }
  if (dvdY < 0 || dvdY > height - 108) {
    dvdYSpeed = dvdYSpeed * -1;
  }
}
