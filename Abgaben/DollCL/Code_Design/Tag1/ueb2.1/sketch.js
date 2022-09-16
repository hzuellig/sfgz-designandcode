colorMode(HSB, 100);
for (let i = 0; i < 100; i++) {
    for (let j = 0; j < 100; j++) {
        stroke(i, j, 100);
        point(i, j);
    }
}

let c = (0, 252, 255)


function setup() {
    createCanvas(1000, 800);
    background(0, 0, 100, 100)

}

function draw() {
    background(0, 0, 0, 20);

    noStroke


    let d = map(mouseX, 0, width, links, ro);

    fill(0, 150, 150);
    let f = map(mouseY, 0, height, oben, unten);
    noStroke();



    noFill();
    colorMode(RGB, 255, 255, 255, 0);
    strokeWeight(3);
    stroke(0, 150, 150, 10);
    ellipse(mouseX, mouseY, 100, 100, 100, 100);
    ellipse(mouseX, mouseY, -0, 100, 100, 100);
    ellipse(mouseX, mouseY, 100, -0, 100, 100);
    ellipse(mouseX, mouseY, -50, 100, 100, 100);
    ellipse(mouseX, mouseY, 100, -50, 100, 100);
    ellipse(mouseX, mouseY, 100, -25, 100, 100);
    ellipse(mouseX, mouseY, -25, 100, 100, 100);
    ellipse(mouseX, mouseY, 75, 100, 100, 100);
    ellipse(mouseX, mouseY, 100, 75, 100, 100);









}