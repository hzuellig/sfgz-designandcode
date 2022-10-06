let earthquake = new Array();
let n=0;

function preload() {
  let url = '../data/all-earthq-pastday.geojson';
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

function setup() {
  createCanvas(windowWidth, windowHeight);
  /* noLoop(); */
  frameRate(5);

  
  strokeWeight(1);
}

function draw() {

  background(255,5);

  let esize = earthquake[n].properties.mag;
  esize=map(esize, 1, 10, 50, windowWidth-200);

  var x = [];
  var y = [];
  let cr = random(20, 230);
  let cg = random(20, 230);
  let cb = random(20, 230);

  noFill();
  
  // init shape
  centerX = width / 2;
  centerY = height / 2;
  var angle = radians(360 / formResolution);
  for (var i = 0; i < formResolution; i++) {
    x.push(cos(angle * i) * esize);
    y.push(sin(angle * i) * esize);
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

  // EPLACE
  let eplace = earthquake[n].properties.place;

  fill(255);
  rect(0, 10, windowWidth, 70);

  textAlign(CENTER);
  textSize(20);
  fill(0);
  text(eplace, windowWidth/2, 40);
  text('mag '+earthquake[n].properties.mag, windowWidth/2, 65);

  n++;
  /* console.log(esize); */

  if(n > earthquake.length-1){
    noLoop();
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