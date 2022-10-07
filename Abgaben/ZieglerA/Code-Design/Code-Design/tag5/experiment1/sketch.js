var inc = 0.01;
var scl = 20;
var cols, rows;


function setup() {
    createCanvas(window.innerWidth, window.innerHeight);
    cols = floor(width / scl);
    rows = floor(height / scl);
}

function draw() {
    var yoff = 0;
    for (var y = 0; y < rows; y++) {
        var xoff = 0;
        for (var x = 0; x < cols; x++) {
            var index = (x + y * width) * 4;
            var r = noise(xoff, yoff) * 255;
            xoff += inc;
            fill(random(255));
            rect(x * scl, y * scl, scl, scl)
        }
        yoff += inc;
    }
}