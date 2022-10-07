
let tracks = new Array();//hier speichern wir die Mausbewegung
let n = 0;


function preload() {
    let url = 'tracks.json';
    loadJSON(url, loaded);
}

function loaded(data) {
    tracks = data;
    console.log(tracks[10]);
}


function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  background(255);
  //noLoop();
  frameRate(60);
}

function draw() {
    textSize(30);
    if(n < tracks.length){
        text('0', tracks[n].x, tracks[n].y);
        n++;
    } else {
        noLoop();
    }

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
