function setup() {
  // put setup code here
  createCanvas(800, 800);
}

function draw() {
  // put drawing code here
  background(100, 220,240);
  rect(0, 0, 600, 600);
  fill(200, 150, 20);
  triangle(0, 0, 600, 0, 300, 300);
  fill(80, 150, 200);
  triangle(300, 300, 450, 150, 450, 450);
  fill(140, 150, 20);
  triangle(600, 600, 600, 300, 300, 600);
  triangle(0, 0, 300, 300, 0, 600);
  triangle(0, 600, 150, 450, 300, 600);
  
 
}