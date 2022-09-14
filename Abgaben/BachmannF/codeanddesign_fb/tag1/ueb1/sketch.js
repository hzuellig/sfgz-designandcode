function setup() {
  createCanvas(1200, 600);
}

function draw() {
  let m = map(mouseX, 0, 600, 0, 255);
  background(m);

  strokeWeight(3);
  stroke('#ffffff');
  line(0, 600, 600, 0);
  strokeWeight(3);
  stroke('#ffffff');
  line(0, 0, 300, 300);
  strokeWeight(3);
  stroke('#ffffff');
  line(150, 450, 300, 600);

  let f = map(mouseX, 0, 600, 0, 255);
  strokeWeight(f);
  fill(0, 221, 221, 100);
  let a = mouseX;
  let b = mouseY;
  let c = mouseX;
  let d = 50;
  ellipse(a, b, c, d);
  a += 15;
  b += 20;
  c += 2;
  ellipse(a, b, c, d);
  a += 15;
  b += 20;
  c += 2;
  ellipse(a, b, c, d);
  a += 15;
  b += 20;
  c += 2;
  ellipse(a, b, c, d);
  a += 15;
  b += 20;
  c += 2;
  ellipse(a, b, c, d);
  a += 15;
  b += 20;
  c += 2;
  ellipse(a, b, c, d);
  a += 15;
  b += 20;
  c += 2;
  ellipse(a, b, c, d);
  a += 15;
  b += 20;
  c += 2;
  ellipse(a, b, c, d);
  a += 15;
  b += 20;
  c += 2;
  ellipse(a, b, c, d);
  a += 15;
  b += 20;
  c += 2;
  ellipse(a, b, c, d);
  a += 15;
  b += 20;
  c += 2;
  ellipse(a, b, c, d);
  a += 15;
  b += 20;
  c += 2;
  ellipse(a, b, c, d);
  a += 15;
  b += 20;
  c += 2;
  ellipse(a, b, c, d);
  a += 15;
  b += 20;
  c += 2;
  ellipse(a, b, c, d);
  a += 15;
  b += 20;
  c += 2;
  ellipse(a, b, c, d);
  describe(
    'a 78 pixels long line running from mid-top to bottom-right of canvas'
  );
}
function keyReleased() {
  if (key == 's' || key == 'S') {
    let d = new Date();
    let now = d.getFullYear() + "" + (d.getMonth() + 1) + "" + d.getDate() + "" + (d.getHours() + 1) + "-" + (d.getMinutes() + 1) + "" + (d.getSeconds() + 1) + "-" + frameCount;
    saveCanvas(now, 'png');
  }
}