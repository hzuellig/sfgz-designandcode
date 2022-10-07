let x = 1;
let y = 1;
let easing = 0.05;

var two = true;
var four = false;
//var six = false;



function setup() {
    createCanvas(windowWidth, windowHeight);
    //noStroke();

    //sliderSize = createSlider(0, 600, 50, 66);
    //sliderSize.position(20, 40);
    //sliderSize.style('width', '300px');


}

function draw() {

    let mX = map(mouseX, width, length, 0, 255)
    let mY = map(mouseY, width, length, 0, 255)
    background(mX, 0, mY, 1);


    let targetX = mouseX;
    let dx = targetX - x;
    x += dx * easing;

    let targetY = mouseY;
    let dy = targetY - y;
    y += dy * easing;


    //fill(0, mY, mX, 80);
    //if (six) {
    //} else {
    //    fill(255, 255, 255);
    //
    //}

    if (four) {
        fill(0, mY, mX, 80);
    } else {
        fill(255, 255, 255, 80);
    }

    if (two) {
        triangle(x, y, y, x);
    } else {
        triangle(x, y, y, x, 0, 0);
    }


}


function keyReleased() {

    // ScreenShot
    if (key == 's' || key == 'S') {
        let d = new Date();
        let now = d.getFullYear() + "" + (d.getMonth() + 1) + "" + d.getDate() + "" + (d.getHours() + 1) + "-" + (d.getMinutes() + 1) + "" + (d.getSeconds() + 1) + "-" + frameCount + ".png";
        saveCanvas(now, 'png');
    }

    // Reset Background
    if (keyCode == DELETE || keyCode == BACKSPACE) background(255);

    if (key == '1') two = true;
    if (key == '2') two = false;
    if (key == '3') four = false;
    if (key == '4') four = true;
    //if (key == '5') six = false;
    //if (key == '6') six = true;

}

//function mousePressed() {
clear();
background(mX, 0, mY, 1)

//}