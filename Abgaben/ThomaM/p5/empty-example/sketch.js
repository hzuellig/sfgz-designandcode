function setup() {
  createCanvas(800, 800);
}

function draw() {
  background(220);
  noStroke();
  ellipse(400, 300, 100, 75);
  stroke(0);
  ellipse(500, 200, 100, 75);
  quad(100, 200, 300, 400, 69, 63, 30, 76);
}
