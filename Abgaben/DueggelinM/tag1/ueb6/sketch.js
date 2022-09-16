function setup() {
  createCanvas(500, 500);
  noStroke();
}

function draw() {
  let c = map(mouseX, 0, 500, 0, 255)
  background(c);
  
  
  fill(125);
  
  ellipse(125, 125, 255,255);
}