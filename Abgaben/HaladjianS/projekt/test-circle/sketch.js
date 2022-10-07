let earthquake = new Array();
let n=0;

function preload() {
  let url = 'all_day.geojson';
  loadJSON(url, loaded);
}

function loaded(data) {
  earthquake = data.features;
  
}



'use strict';

var formResolution = 15;
var stepSize = 2;
var distortionFactor = 1;
var centerX;
var centerY;

var filled = false;
 
function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(30);

  stroke(0, 50);
  strokeWeight(0.75);
  background(255);
}
 
 function draw() {

   let esize = earthquake[n].properties.mag;
   esize=map(esize, 1, 10, 50, windowWidth-200);

  var x = [];
  var y = [];

   // init shape
  centerX = width / 2;
  centerY = height / 2;
  var angle = radians(360 / formResolution);
  for (var i = 0; i < formResolution; i++) {
    x.push(cos(angle * i) * esize);
    y.push(sin(angle * i) * esize);
  }
 
   if (filled) {
     fill(random(255));
   } else {
     noFill();
   }
 
   beginShape();
   // first controlpoint
   curveVertex(x[formResolution - 1] + centerX, y[formResolution - 1] + centerY);
 
   // only these points are drawn
   for (var i = 0; i < formResolution; i++) {
     curveVertex(x[i] + random(-stepSize, stepSize) + centerX, y[i] + random(-stepSize, stepSize) + centerY);
   }
   curveVertex(x[0] + centerX, y[0] + centerY);
 
   // end controlpoint
   curveVertex(x[1] + centerX, y[1] + centerY);
   endShape();

   n++;
   /* console.log(esize); */

   if(n > earthquake.length-1){
     noLoop();
  }
 }

 function mousePressed() {
   // init shape on mouse position
   centerX = mouseX;
   centerY = mouseY;
   var angle = radians(360 / formResolution);
   var radius = initRadius * random(0.5, 1);
   for (var i = 0; i < formResolution; i++) {
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

 function keyReleased() {
  if (key == "s" || key == "S") {
    let d = new Date();
    let now =
      d.getFullYear() +
      "" +
      (d.getMonth() + 1) +
      "" +
      d.getDate() +
      "" +
      (d.getHours() + 1) +
      "-" +
      (d.getMinutes() + 1) +
      "" +
      (d.getSeconds() + 1) +
      "-" +
      frameCount;
    saveCanvas(now, "png");
  }
}