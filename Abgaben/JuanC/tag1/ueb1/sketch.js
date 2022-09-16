function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(180, 220, 30);



  fill(230,40,80);
  ellipse(180, 360, 250,280);
  fill(230,190,80);
  ellipse(180, 200, 200,200);



  fill(255,255,255);

  ellipse(140, 180, 50,50);
  ellipse(220, 180, 50,50);

  fill(255,255,255);

  fill(5,5,5);
  ellipse(mouseX / 140 + 140, mouseY / 170 + 170, 20,20);
  fill(5,5,5);
  ellipse(mouseX / 220 + 220, mouseY / 185 + 185, 20,20);

  fill(5,5,5);

  stroke(5,5,5);
  line(120,240,240,240);
  stroke(255,255,255);
  fill(255,255,255);
  text('U U U U U U U', 135, 249);
  fill(5,5,5);
  stroke(5,5,5);
  ellipse(180, 100, 200,60);
  triangle(180,10,240,110,110,110);
}
