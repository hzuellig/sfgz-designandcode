function setup() {
    // put setup code here
    createCanvas(800, 800)
}

function draw() {
    background(0, 100, 100, );

    stroke(0, 100, 100);
    strokeWeight(4);

    fill(0, 80, 80);
    triangle(0, 400, 0, 800, 400, 400);
    describe('white triangle with black outline in mid-right of canvas');

    fill(0, 125, 125);
    rect(0, 0, 400, 400);
    rect(400, 400, 400, 400);
    triangle(400, 400, 400, 200, 600, 400);
    triangle(400, 400, 200, 600, 400, 800);

    fill(0, 100, 100);
    triangle(400, 400, 400, 200, 200, 400)

    fill(0, 150, 150);
    triangle(400, 200, 800, 0, 600, 400);

    let durchmesser = 150;
    ellipse(200, 200, durchmesser, durchmesser);

    ellipse(600, 600, durchmesser, durchmesser)

    let a = 0;
    fill(0, 125);

    a += 60;
    ellipse(400, a, 70, 70);

    a += 60;
    ellipse(400, a, 70, 70);

    a += 60;
    ellipse(400, a, 70, 70);

    a += 60;
    ellipse(400, a, 70, 70);

    a += 60;
    ellipse(400, a, 70, 70);

    a += 60;
    ellipse(400, a, 70, 70);

    a += 60;
    ellipse(400, a, 70, 70);

    a += 60;
    ellipse(400, a, 70, 70);

    a += 60;
    ellipse(400, a, 70, 70);

    a += 60;
    ellipse(400, a, 70, 70);

    a += 60;
    ellipse(400, a, 70, 70);

    a += 60;
    ellipse(400, a, 70, 70);

    fill(0, 280, 280);
    durchmesser = durchmesser - 30;
    ellipse(400, 400, durchmesser, durchmesser);

    durchmesser = durchmesser - 50;
    ellipse(200, 200, durchmesser, durchmesser);

    ellipse(600, 600, durchmesser, durchmesser)

}