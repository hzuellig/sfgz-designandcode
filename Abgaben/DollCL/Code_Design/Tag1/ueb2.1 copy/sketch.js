let rechts = 50;
let links = 120;

let oben = 0;
let unten = 255;


let form



function setup() {
    createCanvas(800, 800);
}

function draw() {
    background(0, 0, 0, 10);

    let d = map(mouseX, 0, width, links, rechts);
    let f = map(mouseY, 0, height, oben, unten);
    fill(mouseX, 0, mouseY);



    noStroke();
    ellipse(mouseX, mouseY, d, d);
    noFill();
    colorMode(RGB, 255, 255, 255, 0);



    strokeWeight(1);
    stroke(300, 300, 300, 10);

    ellipse(mouseX, mouseY, 100, 100, 100, 100);

    colorMode(RGB, 255, 255, 255, 0);


    ellipse(mouseX, mouseY, -0, 100, 100, 100);
    ellipse(mouseX, mouseY, 100, -0, 100, 100);
    ellipse(mouseX, mouseY, -50, 100, 100, 100);
    ellipse(mouseX, mouseY, 100, -50, 100, 100);
    ellipse(mouseX, mouseY, 100, -25, 100, 100);
    ellipse(mouseX, mouseY, -25, 100, 100, 100);
    ellipse(mouseX, mouseY, 75, 100, 100, 100);
    ellipse(mouseX, mouseY, 100, 75, 100, 100);
}