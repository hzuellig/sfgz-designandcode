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
  frameRate(1);
}

function draw() {
    if(history[n].page_transition == "LINK") {
        background(255,10);
        fill(255,0,0);
    } else {
        background(255, 0, 255, 10);
        fill(255,255,0);
    }
    text(history[n].title, 20, 20 * n);
    n++;

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
