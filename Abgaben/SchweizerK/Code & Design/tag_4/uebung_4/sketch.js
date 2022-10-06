let gui;
var backgroundColour = (20, 130, 200, 20)
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
    createCanvas(windowWidth, windowHeight);
    //gui = createGui('Change the background colour');
    //gui.addGlobals('backgroundColour', "theText", "theTextColour", "theTextSize");
    sliderSize1 = createSlider(0, 1000, 500);
    sliderSize2 = createSlider(0, 1000, 500);

    sliderX = createSlider(0, 1000, 500);
    sliderY = createSlider(0, 1000, 500);
    sliderR = createSlider(0, 255, 200);
    sliderG = createSlider(0, 255, 100);
    sliderB = createSlider(0, 255, 80);

    sliderSize1.position(20, 20);
    sliderSize1.style('width', '500px');
    sliderSize2.position(20, 40);
    sliderSize2.style('width', '500px');

}

function draw() {
    background(sliderB.value(), sliderR.value(), sliderG.value(), 20);
    noStroke();
    //fill(theTextColour);
    //textSize(theTextSize);
    //text(theText, 10, height / 2);
    fill(sliderR.value(), sliderG.value(), sliderB.value());
    ellipse(sliderX.value(), sliderY.value(), sliderSize1.value(), sliderSize2.value())
    ellipse(sliderY.value(), sliderX.value(), sliderSize2.value(), sliderSize1.value())

}

function keyReleased() {
    if (key == 's' || key == 'S') {
        let d = new Date();
        let now = d.getFullYear() + "" + (d.getMonth() + 1) + "" + d.getDate() + "" + (d.getHours() + 1) + "-" + (d.getMinutes() + 1) + "" + (d.getSeconds() + 1) + "-" + frameCount;
        saveCanvas(now, 'png');
    }
}