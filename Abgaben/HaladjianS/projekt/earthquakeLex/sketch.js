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
  for (let i = 0; i < 5; i++) {
      vibrations.push(new Particle(random(width), random(height)));
  }
}

let vibrations = [];
let letters;

function draw() {
  background(210, 210, 112);

  for (let i = 0; i < vibrations.length; i++) {
      vibrations[i].show();
      vibrations[i].update();
  }
}

//*function mousePressed() {
// vibrations.push(new Particle(mouseX, mouseY));
//}

if (n < earthquake.length-1){
  n++;
} else {
  n=0;
}

class Particle {

  constructor(x, y) {
      this.x = x;
      this.y = y;
      this.history = [];
  }

  update() {

      let esize = earthquake[n].properties.mag;

      this.x = this.x + random(-80, 80) * esize;
      this.y = this.y + random(-80, 80) * esize;

      let v = createVector(this.x, this.y);

      this.history.push(v);
      //console.log(this.history.length);

      if (this.history.length > 100) {
          this.history.splice(0, 1);
      }
  }

  show() {
      stroke(133, 50, 210);
      beginShape();
      for (let i = 0; i < this.history.length; i++) {
          let pos = this.history[i];
          noFill();
          vertex(pos.x, pos.y);
          endShape();
      }

      noStroke();
      fill(40, 60, 20);
      ellipse(this.x, this.y, 10, 10);
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