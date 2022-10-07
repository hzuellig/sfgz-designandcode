let earthquake = new Array();
let n=0;

function preload() {
  let url = 'https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_day.geojson';
  loadJSON(url, loaded);
}

function loaded(data) {
  earthquake = data.features;
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  /* noLoop(); */
  frameRate(60);
  angleMode(DEGREES);
  background(1);
}

var easing = 0.05;
let rot1 = 1;

function draw() {

  background(1,3);
  let esize = earthquake[n].properties.mag;

/* Lines vertical 
if (n < earthquake.length-1){
    line(x, y, x, y-esize*140);
    x=x+3;
    n++;
  } else {
    x=0;
    y=900;
    n=0;
  } */

  if (n < earthquake.length-1){

    push();
    stroke(255);
    strokeWeight(1);

    translate(width / 2, height / 2);
    rotate(rot1);
    line(0, 0, esize*140, 0);
    pop();

    n++;
    rot1=rot1+random(4);

  } else {
    n=0;
  }

  let d = day();
  let m = month();
  let y = year();

  textAlign(CENTER);
  textSize(20);
  fill(200);
  noStroke();
  text('earthquakes ' + d + '.'+ m +'.' + y, windowWidth/2, windowHeight-30);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  frameRate(60);
  angleMode(DEGREES);
  stroke(255);
  strokeWeight(1);
  background(1);
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