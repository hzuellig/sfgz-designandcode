function setup() {
  createCanvas(600, 600);
}

function draw() {
  //background(20, 22, 13);
  background(25,1);

let mausx = map(mouseX, 0, width, 0, 255);
fill(mausx, 69, 69);
ellipse(mouseX, mouseY, mausx + 1, mausx + 1);

}
