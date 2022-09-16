// let rechts = 30;
// let links = 15;

// let oben = 0;
// let unten = 350;



// function setup() {
//   createCanvas(1920, 1020);
// }

// function draw() {

// let d = map(mouseX, 0, width, links, rechts);
// let f = map(mouseY, 0, height, oben, unten);
// fill(f);
// ellipse(mouseX, mouseY, d, d, );

// let randomRed = Math.random() * 255,
//  randomGreen = Math.random() * 255,
//  randomBlue = Math.random() * 255;
//let mapRed = Math.round(map(mouseX, 0, windowWidth, 0, 255)),
// mapBlue = Math.round(map(mouseY, 0, windowHeight, 0, 255));
// let circDist = dist(mouseX, mouseY, centerX, centerY),
//  rad = sqrt(circDist) * 4;
// randCol = floor(random(colors.length));
// let credits = select('.credits')
// credits.style('left', mouseX + 'px')
// credits.style('top', mouseY + rad / 2 + 20 + 'px')
// console.log(mapRed)
// background(255, opacity)
// }

// textSize(50);
// text('WHOO', 700, 30);
//  fill(0, 102, 153, 250);
// text('WHEE', 1330, 400);
// fill(0, 102, 153, 250);
// text('WHAT COLOUR?', 700, 790);
// fill(0, 102, 153, 250);
//  text('GO DOWN', 20, 400);

let rechts = 150;
let links = 10;
let oben = 0;
let unten = 230;

function setup() {
    createCanvas(1920, 1080);
    background(0, 220, 20);
}

function draw() {
    //background(0, 30, 20);
    let d = map(mouseX, 0, width, links, rechts);
    let f = map(mouseY, 0, height, oben, unten);
    fill(f, 0, unten);
    noStroke()
    ellipse(mouseX, mouseY, d, d);
}

function keyReleased() {
    if (key == 's' || key == 'S') {
        let d = new Date();
        let now = d.getFullYear() + "" + (d.getMonth() + 1) + "" + d.getDate() + "" + (d.getHours() + 1) + "-" + (d.getMinutes() + 1) + "" + (d.getSeconds() + 1) + "-" + frameCount;
        saveCanvas(now, 'png');
    }
}