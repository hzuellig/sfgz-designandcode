let myFont;
function preload() {
  myFont = loadFont('Lato.otf');
}

function setup() {
  createCanvas(600, 600);
  noStroke();
}

function draw() {
  
  textFont(myFont);
  let c=map(mouseX, 0, 600, 0,255);
  
  let d=map(mouseY, 0, 600, 5, 100);
  
  textSize(d);
  fill(125);
  
  text("Robin", mouseX, mouseY);
}