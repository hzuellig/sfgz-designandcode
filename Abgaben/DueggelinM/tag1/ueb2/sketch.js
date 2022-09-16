function setup() {
  createCanvas(600, 600);
  //noLoop();
  frameRate(1);
}

function draw() {
  background(100, 204, 0);
  fill(255, 204, 0);
  triangle(0, 0, 600, 0, 300, 300);
  fill(255, 50, 50);
  triangle(0, 0, 300, 300, 0, 600);
  fill(14, 54, 198);
  triangle(0, 600, 150, 450, 300, 600);
  triangle(300, 600, 600, 600, 600, 300);
  triangle(450, 150, 450, 450, 300, 300);
describe('white triangle with black outline in mid-right of canvas');
}




/* Kommentar */