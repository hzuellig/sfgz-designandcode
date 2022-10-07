let noiseScale = 0.02;
let n = 0;

function setup() {
    createCanvas(window.innerWidth, window.innerHeight);
    frameRate(20);
    background(30, 40, 80)
}

function draw() {

    for (let x = 0; x < width; x++) {
        let noiseVal = noise((mouseX + x) * noiseScale, mouseY * noiseScale);
        push();
        translate(0, n * -2);

        stroke(noiseVal * 255);
        line(x, noiseVal * 120, x, height);
        pop();
    }
    n++;
    describe(`horizontal wave pattern effected by mouse x-position
    & updating noise values.`);
}