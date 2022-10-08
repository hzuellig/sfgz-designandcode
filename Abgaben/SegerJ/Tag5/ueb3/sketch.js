
 var formResolution = 15;
 var stepSize = 2;
 var distortionFactor = 1;
 var initRadius = 150;
 var centerX;
 var centerY;
 var x = [];
 var y = [];
 
 var filled = false;
 var freeze = false;
 
 function setup() {
   createCanvas(windowWidth, windowHeight);
 
   // init shape
   centerX = width / 2;
   centerY = height / 2;
   var angle = radians(360 / formResolution);
   for (var i = 0; i < formResolution; i++) {
     x.push(cos(angle * i) * initRadius);
     y.push(sin(angle * i) * initRadius);
   }
 
   stroke(11, 10);
   strokeWeight(2);
   background(255,);
 }
 
 function draw() {
   // floating towards mouse position
   centerX += (mouseX - centerX) * 0.11;
   centerY += (mouseY - centerY) * 0.11;
 
   // calculate new points
   for (var i = 0; i < formResolution; i++) {
     x[i] += random(-stepSize, stepSize);
     y[i] += random(-stepSize, stepSize);
     // uncomment the following line to show position of the agents
     // ellipse(x[i] + centerX, y[i] + centerY, 5, 5);
   }
 
   if (filled) {
     fill(random(200));
   } else {
     noFill();
   }
 
   beginShape();
   // first controlpoint
   curveVertex(x[formResolution - 1] + centerX, y[formResolution - 1] + centerY);
 
   // only these points are drawn
   for (var i = 0; i < formResolution; i++) {
     curveVertex(x[i] + centerX, y[i] + centerY);
   }
   curveVertex(x[0] + centerX, y[0] + centerY);
 
   // end controlpoint
   curveVertex(x[1] + centerX, y[1] + centerY);
   endShape();
 }
 
 function mousePressed() {
   // init shape on mouse position
   centerX = mouseX;
   centerY = mouseY;
   var angle = radians(365 / formResolution);
   var radius = initRadius * random(600, 100);
   for (var i = 1; i < formResolution; i++) {
     x[i] = cos(angle * i) * initRadius;
     y[i] = sin(angle * i) * initRadius;
   }
 }
 
 function keyReleased() {
   if (key == 's' || key == 'S') saveCanvas(gd.timestamp(), 'png');
   if (keyCode == DELETE || keyCode == BACKSPACE) background(255);
   if (key == '1') filled = false;
   if (key == '2') filled = true;
 
   // pauze/play draw loop
   if (key == 'f' || key == 'F') freeze = !freeze;
   if (freeze) {
     noLoop();
   } else {
     loop();
   }
 }
 