function setup() {
  createCanvas(1920, 1080);
  background(0, 180, 180);
}

function draw() {
  noStroke();
  ellipse(400, 300, 100, 75);
  stroke(0);
  ellipse(500, 200, 100, 75);
  quad(100, 200, 300, 400, 300, 63, 30, 76);

line(600, 20, 400, 20);
stroke(0);
line(85, 20, 600, 75);
stroke(0);
line(85, 700, 30, 75);


line(mouseX, mouseY, 10, 10);



rect(200,600,380,10);
ellipse(600,600,200,200);
}
