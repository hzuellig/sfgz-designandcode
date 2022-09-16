function setup() {
    createCanvas(800, 800);
    //noStroke();
}

function draw() {
    //background(120, 20);

    //line(width / 2, 0, width / 2, height);
    //line(0, height / 2, width, height / 2);

    if (mouseX < 400 && mouseY < 400) {
        //cursor(CROSS);
        background(3, 4, 94);
    } else if (mouseX > 400 && mouseY < 400) {
        //cursor('progress');
        background(2, 62, 138);
    } else if (mouseX > 400 && mouseY > 400) {
        //cursor('https://avatars0.githubusercontent.com/u/1617169?s=16');
        background(0, 119, 182);
    } else {
        //cursor('grab');
        background(0, 150, 199);
    }
    line(width / 2, 0, width / 2, height);
    line(0, height / 2, width, height / 2);
}