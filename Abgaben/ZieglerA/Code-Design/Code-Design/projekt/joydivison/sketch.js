let earthquake = new Array();
let n = 0;

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
    frameRate(20);
    angleMode(DEGREES);
    background(127, 255, 170);
}

var yoff = 0.0;

function draw() {
    background(1, 5);

    if (n < earthquake.length - 1) {

        let esize = earthquake[n].properties.mag;

        fill(color(193, 161, 242, 1));
        stroke(193, 161, 242);

        beginShape();

        var xoff = 0;


        for (var x = 0; x <= width; x += 5) {

            var y = (noise(xoff, yoff) * esize * 300);

            vertex(x, y);
            xoff += esize / 500;
        }

        yoff += esize / 1000;

        vertex(width, height);
        vertex(0, height);
        endShape(CLOSE);



        n++;

        console.log(esize);

    } else {
        n = 0;

    }

    /*   let d = day();
      let m = month();
      let y = year();

      textAlign(CENTER);
      textSize(20);
      fill(200);
      noStroke();
      text('earthquakes ' + d + '.'+ m +'.' + y, windowWidth/2, windowHeight-30); */
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