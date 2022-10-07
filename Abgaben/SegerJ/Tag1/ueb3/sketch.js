var r;
var g;
var b;
var a;

function setup() {
  createCanvas(600, 600);
  strokeWeight(1);
  filter(BLUR);
}

function draw() {
  let a = 400;
  let b = 200;
  let c = 400;
  let d = 1;

  r = random(255); // r is a random number between 0 - 255
  g = random(100, 200); // g is a random number betwen 100 - 200
  b = random(100); // b is a random number between 0 - 100
  a = random(200, 255); // a is a random number between 200 - 255


  fill(r, g, b, a);
  ellipse(mouseX, mouseY, 100, 10);

 


}