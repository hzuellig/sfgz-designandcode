let tracks = new Array(); //hier schreiben wir die gespeicherten mausbewegungen rein
let n = 0;

function preload() {

    let url = "tracks-5.json"; //achtung, eventuell pfad anpassen!
    loadJSON(url, loaded); //die funktion loaded wird aufgerufen, wenn das file fertig geladen ist (callback funktion)
}

function loaded(data) {
    tracks = data;
    console.log(tracks);
}

function setup() {
    createCanvas(window.innerWidth, window.innerHeight);
    background(20, 30);
    frameRate(5); //frameRate verlangsamen

}

function draw() {
    textSize(80);
    text("M", tracks[n].x, tracks[n].y);
    n++;

}