let gui;
var backgroundColour = (20, 30, 0, 20)
var theTextColour = [0, 255, 0];
var theText = "Type some text here";
var theTextSize = 14;
var sliderSize;
var sliderR;
var sliderG;
var sliderB;
var sliderX;
var sliderY;



function setup() {
    createCanvas(windowWidth, windowHeight - 30);
    //gui = createGui('Change the background colour');
    //gui.addGlobals('backgroundColour', "theText", "theTextColour", "theTextSize");
    sliderSize = createSlider(0, 1000, 500);
    sliderX = createSlider(0, 1000, 500);
    sliderY = createSlider(0, 1000, 500);
    sliderR = createSlider(0, 255, 100);
    sliderG = createSlider(0, 255, 100);
    sliderB = createSlider(0, 255, 100);


}

function draw() {
    background(backgroundColour, 20);
    noStroke();
    //fill(theTextColour);
    //textSize(theTextSize);
    //text(theText, 10, height / 2);
    fill(sliderR.value(), sliderG.value(), sliderB.value());
    ellipse(sliderX.value(), sliderY.value(), sliderSize.value(), sliderSize.value())
}

if (filled) {
    fill(random(255));
} else {
    noFill();
}


function keyReleased() {
    if (key == 's' || key == 'S') {
        let d = new Date();
        let now = d.getFullYear() + "" + (d.getMonth() + 1) + "" + d.getDate() + "" + (d.getHours() + 1) + "-" + (d.getMinutes() + 1) + "" + (d.getSeconds() + 1) + "-" + frameCount;
        saveCanvas(now, 'png');
    }
}