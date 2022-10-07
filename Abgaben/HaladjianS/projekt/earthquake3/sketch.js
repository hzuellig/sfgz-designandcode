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
  frameRate(60);
  background(1);
}

var yoff = 0.0;

function draw() {
  background(1,5);

  if (n < earthquake.length-1){

    let esize = earthquake[n].properties.mag;
  
    fill(color(1, 1));
    stroke(255);

    beginShape();
  
    var xoff = 0;
    
    for (var x = 0; x <= width; x += 5) {
  
        var y = (noise(xoff, yoff) * esize * 200);
  
        vertex(x, y);
        xoff += esize / 400;
    }
  
    yoff += esize / 1000;
  
    vertex(width, height);
    vertex(0, height);
    endShape(CLOSE);

    n++;

    console.log(esize);

  } else {
    n=0;
    background(1);
  }
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