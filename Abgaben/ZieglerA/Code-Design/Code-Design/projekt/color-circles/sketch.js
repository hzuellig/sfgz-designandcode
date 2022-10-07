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
    background(10, 5, 105);
    /* noLoop(); */
    frameRate(5);
}

function draw() {
    background(255, 10);

    let esize = earthquake[n].properties.mag;
    //map(esize, 1, 10, 10, windowWidth);

    //let cr = random(20, 230);
    // let cg = random(20, 230);
    // let cb = random(20, 230);

    fill(229, 255, 103, 80);
    noStroke();
    ellipse(windowWidth / 2, windowHeight / 2 - 80, esize * 50);
    ellipse(windowWidth / 2, windowHeight / 2 + 50, esize * 80);
    fill(250, 255, 103, 80);
    noStroke();
    /*ellipse(windowWidth / 1, windowHeight / 2 + 20, esize * 120);*/
    ellipse(windowWidth / 2 + 20, windowHeight / 1, esize * 120);
    ellipse(windowWidth / 4 + 20, windowHeight / 2, esize * 120);
    /* ellipse(windowWidth / 3, windowHeight / 2 + 40, esize * 80);*/
    /*ellipse(windowWidth / 6, windowHeight / 2 + 40, esize * 100);*/
    /*ellipse(windowWidth / 4, windowHeight / 2 + 120, esize * 80);*/


    // rectangle überlagern
    /*let eplace = earthquake[n].properties.place;
    textAlign(screenLeft);
    textSize(20);
    fill(0);
    text(eplace, windowWidth / 2, 40);*/

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