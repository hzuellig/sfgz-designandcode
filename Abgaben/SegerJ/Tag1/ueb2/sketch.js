function setup() {
  createCanvas(600, 600);
  frameRate(60);
  colorPicker1 = createColorPicker('#ed225d');
  colorPicker1.position(0, height + 5);
  
}

function draw() {
  fill(colorPicker1.color());  triangle(0, 0, 600, 0, 300, 300);
  triangle(0, 0, 600, 0, 300, 300);
  fill(225, 60, 20);
  triangle(0, 0, 0, 600, 300, 300);
  fill(235, 80, 30);
  triangle(300, 600, 600, 300, 600, 600);
  fill(245, 100, 40);
  triangle(0, 600, 150, 450, 300, 600);
  fill(255, 120, 50);
  triangle(300, 300, 450, 150, 450, 450);
  fill(265, 140, 60);
  quad(150, 450, 300, 600, 450, 450, 300, 300);
  fill(275, 160, 70);
  quad(450, 450, 450, 150, 600, 0, 600, 300);

}

