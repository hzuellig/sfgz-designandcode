function setup() {
  createCanvas(800, 800);
  background(0);
}

function draw() {
line(0, 0, 800, 800);
stroke(50, 800, 800);
triangle(0, 0, 0, 500, 310, 310)
fill(100, 0, 100)
line(800, 0, 0, 800);
line(310, 0, 310, 800);
line(600, 0, 600, 800);
triangle(0, 0, 800, 300, 800, 0);
fill(10, 0, 100);
line(200, 0, 600, 800);
line(800, 0, 500, 600);
stroke(0, 200, 0);
line(800, 0, 500, 600);
triangle(800, 0, 500, 300, 800, 800);
fill(100, 0, 200);
}
