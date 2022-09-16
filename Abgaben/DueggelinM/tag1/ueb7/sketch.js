let rechts = 50;
let links = 5;

let weiss = 0; // weiss 
let schwarz = 255; // schwarz



function setup() {
  createCanvas(400, 400);
}

function draw() {
  let r = map(mouseY, 0, 400, weiss, schwarz);
  let g = map(mouseX, 0, 400, weiss, schwarz);
  let b = 70;
  background(r, g, b);
  noStroke();
  fill(0);
  circle(mouseX, mouseY, 55, 55);
}

