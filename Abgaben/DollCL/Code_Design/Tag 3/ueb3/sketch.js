let tracks = new Array(); //hier schreiben wir die gespeicherten mausbewegungen rein
let n = 0;

function preload() {

    let url = 'tracks.json'; //achtung, eventuell pfad anpassen!
    loadJSON(url, loaded); //die funktion loaded wird aufgerufen, wenn das file fertig geladen ist (callback funktion)
}

function loaded(data) {
    tracks = data;
    console.log(tracks[10]);
}

function setup() {
    createCanvas(window.innerWidth, window.innerHeight);
    frameRate(5); //frameRate verlangsamen
}

function draw() {


    textSize(32);
    text('O', tracks[n].x, tracks[n].y);
    n++;




}