function setup() {
  createCanvas(400, 400);
  background(240);
}

function draw() {
  background(300, 2)
  ellipse(mouseX, mouseY, 60, 60);

}

/* Funktion die Screenshots macht */
function keyReleased() {
  if (key == 's' || key == 'S') {
      let d = new Date();
      let now = d.getFullYear() + "" + (d.getMonth() + 1) + "" + d.getDate() + "" + (d.getHours() + 1) + "-" + (d.getMinutes() + 1) + "" + (d.getSeconds() + 1) + "-" + frameCount;
      saveCanvas(now, 'png');
  }
}