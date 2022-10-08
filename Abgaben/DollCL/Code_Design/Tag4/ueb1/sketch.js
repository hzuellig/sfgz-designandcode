let history = new Array();
let n = 0;

function preload() {
    let url = "BrowserHistory.json";
    loadJSON(url, loaded);

}

function loaded(data) {
    history = data.BrowserHistory;
}

function setup() {
    createCanvas(window.innerWidth, window.innerHeight);
    frameRate(1); //frameRate verlangsamen
}

function draw() {
    background(255, 10, 100);

    ellipse(100, 100);

}


function keyReleased() {
    if (key == 's' || key == 'S') {
        let d = new Date();
        let now = d.getFullYear() + "" + (d.getMonth() + 1) + "" + d.getDate() + "" + (d.getHours() + 1) + "-" + (d.getMinutes() + 1) + "" + (d.getSeconds() + 1) + "-" + frameCount;
        saveCanvas(now, 'png');
    }
}

function mouseClicked() {

}