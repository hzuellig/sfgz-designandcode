let radiusLinks = 80;
let radiusRechts = 0;
let a = 150;

function setup() {
  createCanvas(1000, 400);
  frameRate(25);
}


function draw() {
  let radius = map(mouseX, 0, width, radiusLinks, radiusRechts);
  let graustufe = map(mouseY, 0, height, 0, 255);

  background(graustufe);
  fill(255, 204, 0);
  noStroke();
  square(mouseX-(a/2), mouseY-(a/2), a, radius);  
}

