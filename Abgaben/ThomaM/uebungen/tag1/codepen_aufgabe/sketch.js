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
  createCanvas(600, 600);
}

function draw() {
  //background  
  r = map (mouseX, 0, 600, 0, 255);
  b = map (mouseX, 0, 600, 255, 0);
  background(r, 0, b);

  //ellipse
  let d = map(mouseX, 0, width, links, rechts);
  j = map(mouseY, 0, height, 0, unten);
  c = map(mouseY, 0, height, oben, 0);

  ellipse(mouseX, mouseY, d, d);
  fill(j, 0, c);
}