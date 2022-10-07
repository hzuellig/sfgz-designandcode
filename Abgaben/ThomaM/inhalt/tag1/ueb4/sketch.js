function setup() {
  createCanvas(600, 600);
  noStroke();
}

function draw() {
  
  let c = map (mouseX, 0, 600, 0, 255);
  
  background(c);
  
  fill(50, 50, 100);

  ellipse(125, 125, 255, 255);

}