let earthquake = new Array();
let n = 0;

function preload() {
    let url = 'https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_day.geojson';
    loadJSON(url, loaded);
}

function loaded(data) {
    earthquake = data.features;
}

'use strict';

var formResolution = 15;
var stepSize = 10;
var distortionFactor = 1;
var centerX;
var centerY;

function setup() {
    createCanvas(windowWidth, windowHeight);
    frameRate(20);
    strokeWeight(1);
    background(1);
}

function draw() {
    stroke(255, 30);

    let esize = earthquake[n].properties.mag;
    esize = map(esize, 1, 10, 50, windowWidth - 200);

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
        //damit es beim Schliessen sauber aufgeht
        //die ersten zwei Punkte, die später wiederverwendet werden, nicht mit random verändern
        if (i > 1) {
            curveVertex(x[i] + random(-stepSize, stepSize) + centerX, y[i] + random(-stepSize, stepSize) + centerY);
        } else {
            curveVertex(x[i] + centerX, y[i] + centerY);
        }

    }

    curveVertex(x[0] + centerX, y[0] + centerY);

    // end controlpoint
    curveVertex(x[1] + centerX, y[1] + centerY);
    endShape();

    // EPLACE
    let eplace = earthquake[n].properties.place;

    if (n < earthquake.length - 1) {} else {
        n = 0;
        background(1);
    }

    /*
      fill(255,1);
      rect(0, 10, windowWidth, 70);

      textAlign(CENTER);
      textSize(20);
      fill(0);
      text(eplace, windowWidth/2, 40);
      text('mag '+earthquake[n].properties.mag, windowWidth/2, 65); */

    textAlign(CENTER);
    textSize(20);
    fill(200);
    noStroke();
    text('earthquakes today', windowWidth / 2, windowHeight - 30);

    n++;
    /* console.log(esize); */

    if (n > earthquake.length - 1) {
        noLoop();
    }
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
    frameRate(20);
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