function setup() {
    createCanvas(1000, 1000);
    noStroke();
}

function draw() {
    background(120, 20);
    let x1 = map(mouseX, 0, width, 25, 1000);
    fill(112, 241, 131, 40);
    ellipse(x1, 25, 25, 25);
    ellipse(25, x1, 25, 25);

    ellipse(x1, 125, 25, 25);
    ellipse(125, x1, 25, 25);

    ellipse(x1, 225, 25, 25);
    ellipse(225, x1, 25, 25);

    ellipse(x1, 325, 25, 25);
    ellipse(325, x1, 25, 25);

    ellipse(x1, 425, 25, 25);
    ellipse(425, x1, 25, 25);

    let x2 = map(mouseY, 0, width, 0, 1000, true);

    fill(12, 241, 131, 40);
    ellipse(x2, 75, 25, 25);
    ellipse(75, x2, 25, 25);

    ellipse(x2, 175, 25, 25);
    ellipse(175, x2, 25, 25);

    ellipse(x2, 275, 25, 25);
    ellipse(275, x2, 25, 25);

    ellipse(x2, 375, 25, 25);
    ellipse(375, x2, 25, 25);

    ellipse(x2, 475, 25, 25);
    ellipse(475, x2, 25, 25);


    describe(`Two 25×25 white ellipses move with mouse x.
      Bottom has more range from X`);
}