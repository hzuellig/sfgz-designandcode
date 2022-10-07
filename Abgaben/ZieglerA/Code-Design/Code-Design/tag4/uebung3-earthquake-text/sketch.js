let earthquake = new Array();
let n = 0;

let letters;

function preload() {
    let url = 'all_day.geojson';
    loadJSON(url, loaded);
}

function loaded(data) {
    earthquake = data.features;
    letters = JSON.stringify(earthquake);
}

//let esize = earthquake[n].properties.mag;

'use strict';

var x = 0;
var y = 0;
var stepSize = 5.0;

var font = 'Georgia';
//var letters = JSON.stringify(earthquake);
var fontSizeMin = 3;
var angleDistortion = 0.0;

var counter = 0;

function setup() {
    // use full screen size
    createCanvas(displayWidth, displayHeight);
    background(25, 66, 233);
    cursor(CROSS);

    x = mouseX;
    y = mouseY;

    textFont(font);
    textAlign(LEFT);
    fill(0);
}

function draw() {

    if (mouseIsPressed && mouseButton == LEFT) {
        var d = dist(x, y, mouseX, mouseY);
        textSize(fontSizeMin + d / 2);
        var newLetter = letters.charAt(counter);
        stepSize = textWidth(newLetter);

        if (d > stepSize) {
            var angle = atan2(mouseY - y, mouseX - x);

            push();
            translate(x, y);
            rotate(angle + random(angleDistortion));
            text(newLetter, 0, 0);
            pop();

            counter++;
            if (counter >= letters.length) counter = 0;

            x = x + cos(angle) * stepSize;
            y = y + sin(angle) * stepSize;
        }
    }
}

function mousePressed() {
    x = mouseX;
    y = mouseY;
}


function keyReleased() {
    if (key == 's' || key == 'S') saveCanvas(gd.timestamp(), 'png');
    if (keyCode == DELETE || keyCode == BACKSPACE) background(255);
}

function keyPressed() {
    // angleDistortion ctrls arrowkeys up/down
    if (keyCode == UP_ARROW) angleDistortion += 0.1;
    if (keyCode == DOWN_ARROW) angleDistortion -= 0.1;
}