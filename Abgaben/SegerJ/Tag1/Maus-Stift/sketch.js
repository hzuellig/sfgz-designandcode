let rechts = 100;
let links = 10;

let oben = 1;
let unten = 255;



function setup() {
  createCanvas(600, 600);
}

function draw() {

  let d = map(mouseX, 0, width, links, rechts);
  let f = map(mouseY, 0, width, oben, unten);
  noFill();
  background(240, 0);


  ellipse(mouseX, mouseY, d, d);



}