let radiusLinks = 40;
let radiusRechts = 0;

function setup() {
  createCanvas(400, 400);
  frameRate(25);
}


function draw() {
  background(100, 204, 0);
  let radius = map(mouseX, 0, 400, radiusLinks, radiusRechts);
  fill(255, 204, 0);
  square(mouseX, mouseY, 60, radius);  
}

