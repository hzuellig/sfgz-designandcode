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
  frameRate(30);
  angleMode(DEGREES);
  background(1);
}

let h1 = 10;

function draw() {
  background(1,3);
  

  if (n < earthquake.length-1){

    let esize = earthquake[n].properties.mag;

    push();
    stroke(255);
    strokeWeight(1);
    noFill();

    beginShape();
    vertex(0, h1);

    vertex(windowWidth/4, h1);

    vertex(windowWidth/2, h1*esize);

    vertex(windowWidth/4*3, h1);

    vertex(windowWidth, h1);
    endShape(CLOSE);

    n++;
    h1 = h1+5;
    console.log(h1);

  } else {
    n=0;
    h=10;
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