var xoff = 0;
var yoff = 0;

var party = false;
var color = true;
var freeze = false;
var more = false;



function setup() {
    createCanvas(windowWidth, windowHeight);
    //noStroke();

    sliderSize = createSlider(0, 600, 50, 1);

    sliderSize.position(20, 40);
    sliderSize.style('width', '300px');

}


function draw() {


    if (color) {

        let mX = map(mouseX, width, length, 0, 255)
        let mY = map(mouseY, width, length, 0, 255)
        background(mX, 0, mY, 1);

    } else {
        background(255, 0);
    }


    //// Ellipse White

    let x1 = map(noise(xoff), 0, 1, length, width);
    xoff += 0.001;

    let y1 = map(noise(yoff), 0, 1, length, width);
    yoff += 0.002;

    if (color) {

        if (party) {
            fill(random(255), random(255), random(255));
        } else {
            fill(255, 255, 255);
            stroke(0);
            strokeWeight(1);
        }
    } else {
        if (party) {
            fill(random(255));
        } else {
            fill(255, 100);
            stroke(0, 50);
            strokeWeight(0.75);
        }

    }

    ellipse(x1, y1, sliderSize.value(), sliderSize.value());
    ellipse(y1, x1, sliderSize.value(), sliderSize.value());


    //// Ellipse Yellow

    let x2 = map(noise(xoff), 0, 2, length, width);
    xoff += 0.001;

    let y2 = map(noise(yoff), 0, 2, length, width);
    yoff += 0.002;

    if (color) {

        if (party) {
            fill(random(255), random(255), random(255));
        } else {
            fill(255, 255, 100);
        }
    } else {
        if (party) {
            fill(random(255));
        } else {
            fill(255, 100);
            stroke(0, 50);
            strokeWeight(0.75);
        }
    }

    ellipse(x2, y2, sliderSize.value(), sliderSize.value());
    ellipse(y2, x2, sliderSize.value(), sliderSize.value());



    //// Ellipse Pink

    let x3 = map(noise(xoff), 1, 0, length, width);
    xoff += 0.001;

    let y3 = map(noise(yoff), 1, 0, length, width);
    yoff += 0.002;

    if (color) {

        if (party) {
            fill(random(255), random(255), random(255));
        } else {
            fill(255, 100, 255);
        }
    } else {
        if (party) {
            fill(random(255));
        } else {
            fill(255, 100);
            stroke(0, 50);
            strokeWeight(0.75);
        }
    }

    ellipse(x3, y3, sliderSize.value(), sliderSize.value());
    ellipse(y3, x3, sliderSize.value(), sliderSize.value());


    //// Ellipse Blue

    let x4 = map(noise(xoff), 2, 0, length, width);
    xoff += 0.001;

    let y4 = map(noise(yoff), 2, 0, length, width);
    yoff += 0.002;

    if (color) {

        if (party) {
            fill(random(255), random(255), random(255));
        } else {
            fill(100, 255, 255);
        }
    } else {
        if (party) {
            fill(random(255));
        } else {
            fill(255, 100);
            stroke(0, 50);
            strokeWeight(0.75);
        }
    }

    ellipse(x4, y4, sliderSize.value(), sliderSize.value());
    ellipse(y4, x4, sliderSize.value(), sliderSize.value());



    if (more) {

        //// Ellipse Green

        let x5 = map(1, noise(xoff), 2, width, length);
        xoff += 0.001;

        let y5 = map(noise(yoff), 1.5, 0, width, length);
        yoff += 0.002;

        if (color) {

            if (party) {
                fill(random(255), random(255), random(255));
            } else {
                fill(100, 255, 155);
            }
        } else {
            if (party) {
                fill(random(255));
            } else {
                fill(255, 100);
                stroke(0, 50);
                strokeWeight(0.75);
            }
        }

        ellipse(x5, y5, sliderSize.value(), sliderSize.value());
        ellipse(y5, x5, sliderSize.value(), sliderSize.value());


        //// Ellipse Orange

        xoff += 0.001;
        let x6 = map(1, noise(xoff), 2, length, width)

        let y6 = map(noise(yoff), 1.5, 0, length, width);
        yoff += 0.002

        if (color) {

            if (party) {
                fill(random(255), random(255), random(255));
            } else {
                fill(255, 155, 0);
            }
        } else {
            if (party) {
                fill(random(255));
            } else {
                fill(255, 100);
                stroke(0, 50);
                strokeWeight(0.75);
            }
        }

        ellipse(x6, y6, sliderSize.value(), sliderSize.value());
        ellipse(y6, x6, sliderSize.value(), sliderSize.value());
    } else {

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

    // Party on / off
    if (key == '1') party = false;
    if (key == '2') party = true;

    // More on / off
    if (key == '3') more = false;
    if (key == '4') more = true;

    // Color on / off
    if (key == '5') color = true;
    if (key == '6') color = false;


    // Freeze
    if (key == 'f' || key == 'F') freeze = !freeze;
    if (freeze) {
        noLoop();
    } else {
        loop();
    }

}