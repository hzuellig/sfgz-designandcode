let myData;
let slider;

var tileCount = 20;
var actRandomSeed = 100;

var circleAlpha = 130;
var circleColor;

function preload() {
    myData = loadJSON('2018_March.json');
}


function draw() {
    translate(width / tileCount / 1, height / tileCount / 1);

    background(255);

    randomSeed(actRandomSeed);

    stroke(circleColor);
    strokeWeight(mouseY / myData);

    for (var gridY = 0; gridY < tileCount; gridY++) {
        for (var gridX = 0; gridX < tileCount; gridX++) {

            var posX = width / tileCount * gridX;
            var posY = height / tileCount * gridY;

            var shiftX = random(-mouseX, mouseX) / -100;
            var shiftY = random(-mouseX, mouseX) / -100;

            ellipse(posX + shiftX, posY + shiftY, mouseY / 5, mouseY / 5);
        }
    }
}

function setup() {
    createCanvas(windowWidth, windowHeight);
    noFill();
    console.log(myData);
    circleColor = color(0, 200, 200, circleAlpha);
    colorMode(HSB);
    slider = createSlider(0, 360, 60, 40);
    slider.position(10, 10);
    slider.style('width', '80px');
}

function mousePressed() {
    actRandomSeed = random(100000);
}

function keyReleased() {
    if (key == 's' || key == 'S') saveCanvas(gd.timestamp(), 'png');
}