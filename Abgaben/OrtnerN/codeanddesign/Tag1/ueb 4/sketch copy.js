function setup() {
  createCanvas(800, 800);
  background(240, 200, 130);
}

function draw() {
  background(0, 2, 240, 2)
  noStroke();
  ellipse(mouseX, mouseY, 30, 30);

  ellipse(width / 2, height / 2, 100, 100)
}















function keyReleased() {
  if (key == 's' || key == 'S') {
      let d = new Date();
      let now = d.getFullYear() + "" + (d.getMonth() + 1) + "" + d.getDate() + "" + (d.getHours() + 1) + "-" + (d.getMinutes() + 1) + "" + (d.getSeconds() + 1) + "-" + frameCount;
      saveCanvas(now, 'png');
  }
}