function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();
}

function draw() {
  
  let cr = map(mouseX, 0, width, 0, 255);
  let cg = map(mouseY, 0, height, 0, 255);

  let sw = map(mouseX, 0, width, 0, 255);

  background(0);

  fill(cr, cg, 100);
  
  ellipse(mouseX, mouseY, sw,sw);
  
}