function setup() {
    createCanvas(800, 800);
    //noStroke();
}

function draw() {
    //background(120, 20);

    //line(width / 2, 0, width / 2, height);
    //line(0, height / 2, width, height / 2);
    //background(120, 20)

    cursor(HAND);

    stroke(mouseX, 0, mouseY);
    line(0, 0, mouseX, mouseY)
    line(800, 800, mouseX, mouseY)
    line(800, 0, mouseX, mouseY)
    line(0, 800, mouseX, mouseY)



    if (mouseX < 400 && mouseY < 400) {
        background(3, 4, 94, 20);

    } else if (mouseX > 400 && mouseY < 400) {
        background(2, 62, 138, 20);

    } else if (mouseX > 400 && mouseY > 400) {
        background(0, 119, 182, 20);
    } else {
        background(0, 150, 199, 20);
    }

}