let history = new Array(); //hier schreiben wir die history rein
let n = 0;

function preload() {
    let url = "BrowserHistory.json";
    //let url = "favicon_url";
    loadJSON(url, loaded);
}

function loaded(data) {
    history = data.BrowserHistory;

}

function setup() {
    createCanvas(window.innerWidth, window.innerHeight);
    frameRate(10);
}

function draw() {
    background(255, 10);
    text(history[n].title, n + 50 * 5, n + 50 * 5);
    n++;
}




function keyReleased() {
    if (key == 's' || key == 'S') {
        let d = new Date();
        let now = d.getFullYear() + "" + (d.getMonth() + 1) + "" + d.getDate() + "" + (d.getHours() + 1) + "-" + (d.getMinutes() + 1) + "" + (d.getSeconds() + 1) + "-" + frameCount;
        saveCanvas(now, 'png');
    }
}