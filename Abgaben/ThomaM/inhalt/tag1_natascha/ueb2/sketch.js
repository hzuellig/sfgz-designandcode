function setup() {
  createCanvas(640, 640);
  background(355);
}

function draw() {
  background(50)
fill(255,12,30); triangle(0, 0, 600, 0, 300, 300); 
fill(220,12,3); triangle(0, 0, 0, 600, 300, 300); 
fill(255,120,3); triangle(300, 600, 0, 600, 150, 450); 
fill(255,12,30); triangle(600, 300, 600, 600, 300, 600); 
fill(255,102,3); triangle(450, 450, 450, 150, 300, 300); 
}