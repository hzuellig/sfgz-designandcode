function setup() {
  // put setup code here
  createCanvas(800, 800);
}

function draw() {
  // put drawing code here
  background(100, 220,240);
 noStroke();
 ellipse(56, 46, 55, 55);
 stroke(100, 220,300);
 ellipse(100, 100, 55, 55);
 triangle(30, 75, 58, 20, 86, 75);
 triangle(30, 75, 58, 20, 86, 75);
 let durchmesser = 100;
 
 ellipse(200, 200, durchmesser, durchmesser);
 durchmesser = durchmesser + 100;

 ellipse(400, 400, durchmesser, durchmesser);
 durchmesser = durchmesser + 100;

 translate(50, 50);
stroke(255, 0, 0);
beginShape();
// Exterior part of shape, clockwise winding
vertex(-40, -40);
vertex(40, -40);
vertex(40, 40);
vertex(-40, 40);
// Interior part of shape, counter-clockwise winding
beginContour();
vertex(-20, -20);
vertex(-20, 20);
vertex(20, 20);
vertex(20, -20);
endContour();
endShape(CLOSE);
}