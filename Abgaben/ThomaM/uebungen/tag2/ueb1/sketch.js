let name="Melissa";



var r = 0;
var b = 255;

var c = 40;
var j = 100;
var k = 150;

let rechts = 400;
let links = 5;

let oben = 0;
let unten = 255;

function setup() {
  createCanvas(windowWidth, windowHeight); 
}

function draw() {

  r = map (mouseX, 0, 600, 0, 255);
  b = map (mouseX, 0, 600, 255, 0);
  background(r, 0, b);


  fill(c, 25, j);
  textSize(80);
  textFont('Helvetica');
  textStyle(ITALIC);
  text('Melissa', 100, 200);
  fill(100);
  text('Melissa', 100, 500);
  fill(155, 25, 100);
  text('Melissa', 500, 500);
  fill(100, 25, 20);
  text('Melissa', 500, 200);

  
}