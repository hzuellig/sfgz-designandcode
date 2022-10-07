let earthquake = new Array();
let n = 0;

function preload() {
    let url = 'all_day.geojson';
    loadJSON(url, loaded);
}

function loaded(data) {
    earthquake = data.features;
}

function setup() {
    createCanvas(windowWidth, windowHeight);
    /* noLoop(); */
    frameRate(30);
}

function draw() {
    background(255, 50);

    let esize = earthquake[n].properties.mag;
    //map(esize, 1, 10, 10, windowWidth);

    let cr = random(20, 230);
    let cg = random(20, 230);
    let cb = random(20, 230);

    fill(cr, cg, cb);
    noStroke();
    ellipse(windowWidth / 2, windowHeight / 2, esize * 40);


    // rectangle überlagern
    let eplace = earthquake[n].properties.place;
    textAlign(CENTER);
    textSize(20);
    fill(0);
    text(eplace, windowWidth / 2, 40);

    console.log(esize);
    n++;
}

function keyReleased() {
    if (key == "s" || key == "S") {
        let d = new Date();
        let now =
            d.getFullYear() +
            "" +
            (d.getMonth() + 1) +
            "" +
            d.getDate() +
            "" +
            (d.getHours() + 1) +
            "-" +
            (d.getMinutes() + 1) +
            "" +
            (d.getSeconds() + 1) +
            "-" +
            frameCount;
        saveCanvas(now, "png");
    }
}