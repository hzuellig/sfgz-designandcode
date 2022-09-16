function setup() {
  createCanvas(600, 600);
  noStroke();
}

function draw() {
  
  let c = map(mouseX, 0, 600, 0, 255);
  
  
  background(c);
  
  
  fill(125);
  
  ellipse(125, 125, 255,255);
}

function keyReleased() {
  if (key == 's' || key == 'S') {
      let d = new Date();
      let now = d.getFullYear() + "" + (d.getMonth() + 1) + "" + d.getDate() + "" + (d.getHours() + 1) + "-" + (d.getMinutes() + 1) + "" + (d.getSeconds() + 1) + "-" + frameCount;
      saveCanvas(now, 'png');
  }
}