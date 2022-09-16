function setup() {
  createCanvas(400, 400);
  //noLoop();
  frameRate(1);
}

function draw() {
  background(77, 204, 0);
  noStroke();
  ellipse(100, 100, 40, 40);
  stroke(0);
  triangle(300, 100, 100, 20, 86, 75);
}