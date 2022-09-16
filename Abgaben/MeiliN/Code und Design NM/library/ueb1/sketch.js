function setup() {
  createCanvas(640, 640);
  background(355);
}

function draw() {
  background(50)
  rect(10,190,380,10); fill(205);
  rect(20,19,380,50); let c = color('magenta');
  fill(c); 
  strokeWeight(10); stroke(200);
  ellipse(350,150,200,200);  
  noStroke();
  ellipse(200,100,100,100);  
  noStroke(); 
  quad(mouseX, mouseY,138, 131, 120, 169, 176); 
}