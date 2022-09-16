let rechts = 200;
let links = 5;

let oben = 0;
let unten = 255;



function setup() {
  createCanvas(1400,800);
}

function draw() {
  background(250);
  
  let d = map(mouseX, 0, width, links, rechts);
  let f = map(mouseY, 0, height, oben, unten);
  
  fill(f, 0, unten);
  noStroke()
  ellipse(mouseX, mouseY, d, d);

  textSize(32);
text('blue', 700, 30);
fill(0, 102, 153, 250);
text('big', 1330, 400);
fill(0, 102, 153, 250);
text('pink', 700, 790);
fill(0, 102, 153, 250);
text('smal', 20, 400);
}







function keyReleased() {
  if (key == 's' || key == 'S') {
      let d = new Date();
      let now = d.getFullYear() + "" + (d.getMonth() + 1) + "" + d.getDate() + "" + (d.getHours() + 1) + "-" + (d.getMinutes() + 1) + "" + (d.getSeconds() + 1) + "-" + frameCount;
      saveCanvas(now, 'png');
  }
}