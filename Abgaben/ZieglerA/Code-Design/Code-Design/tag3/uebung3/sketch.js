let tracks = new Array(); //hier speichern wir die Mausbewegung
let n = 0;

function preload() {
    let url = "tracks.json";
    loadJSON(url, loaded);
}

function loaded(data) {
    tracks = data;
    console.log(tracks[10]);
}

function setup() {
    createCanvas(window.innerWidth, window.innerHeight);
    background(44, 70, 220);
    frameRate(10); //frameRate verlangsamen

}

function draw() {

    fill(220, 20, 280)
    textSize(45);
    text("A", tracks[n].x, tracks[n].y);
    n++;

}