function setup() {
    createCanvas(800, 800);
    //noStroke();
}


function draw() {

    cursor(HAND);
    //noCursor()

    let x = map(mouseX, length, width, 0, 255)
    let y = map(mouseY, length, width, 0, 255)


    if (mouseIsPressed === true) {
        background(y, 0, x, 10);
        stroke(x, 150, y);

        line(0, 0, mouseX, mouseY)
        line(0, 200, mouseX, mouseY)
        line(0, 600, mouseX, mouseY)
        line(0, 400, mouseX, mouseY)
        line(0, 800, mouseX, mouseY)

        line(200, 0, mouseX, mouseY)
        line(400, 0, mouseX, mouseY)
        line(600, 0, mouseX, mouseY)
        line(800, 0, mouseX, mouseY)

        line(800, 200, mouseX, mouseY)
        line(800, 400, mouseX, mouseY)
        line(800, 600, mouseX, mouseY)

        line(200, 800, mouseX, mouseY)
        line(400, 800, mouseX, mouseY)
        line(600, 800, mouseX, mouseY)
        line(800, 800, mouseX, mouseY)


    } else {
        background(x, y, 0, 10);
        stroke(y, 150, x);
        line(0, 0, mouseX, mouseY)
        line(0, 800, mouseX, mouseY)
        line(800, 0, mouseX, mouseY)
        line(800, 800, mouseX, mouseY)

    }


}