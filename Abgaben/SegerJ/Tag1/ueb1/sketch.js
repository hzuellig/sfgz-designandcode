function setup() {
  createCanvas(400, 400);
  frameRate(60);
  colorPicker = createColorPicker('#ed225d');
  colorPicker.position(0, height + 5);
}

function draw() {
  background(colorPicker.color());
 // noFill();
 // stroke(255,);


  triangle(190, 20, 300, 400, 400, 100);
  triangle(180, 30, 280, 400, 400, 110);
  triangle(170, 40, 260, 400, 400, 120);
  triangle(160, 50, 240, 400, 400, 130);
  triangle(150, 60, 220, 400, 400, 140);
  triangle(140, 70, 200, 400, 400, 150);
  triangle(130, 80, 180, 400, 400, 160);
  triangle(120, 90, 160, 400, 400, 180);
  triangle(110, 100, 140, 400, 400, 190);
  triangle(100, 110, 120, 400, 400, 200);
  triangle(90, 120, 100, 400, 400, 210);
  triangle(80, 130, 80, 400, 400, 220);
  triangle(70, 140, 60, 400, 400, 230);
  triangle(60, 150, 40, 400, 400, 240);
  triangle(50, 160, 20, 400, 400, 250);
  triangle(40, 170, 0, 400, 400, 260);
  

}

