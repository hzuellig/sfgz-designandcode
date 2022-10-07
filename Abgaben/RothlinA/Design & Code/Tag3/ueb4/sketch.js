let tracks = new Array();//hier schreiben wir die gespeicherten mausbewegungen rein
function preload() {

    let url = 'tracks.json'; //achtung, eventuell pfad anpassen!
    loadJSON(url, loaded); //die funktion loaded wird aufgerufen, wenn das file fertig geladen ist (callback funktion)
}

function loaded(data) {
    tracks = data;
    console.log(tracks)
}
function setup() {
    createCanvas(window.innerWidth, window.innerHeight);
    background(255);
    frameRate(5);//frameRate verlangsamen
}
let n=0;
function draw() {
    if (tracks.length > 0) {
        text("Stalker", tracks[n].x, tracks[n].y);
        n++;

        if (n > tracks.length - 1) {
            noLoop();
        }
    }

}


function keyReleased() {
  if (key == 's' || key == 'S') {
    let d = new Date();
    let now = d.getFullYear() + "" + (d.getMonth() + 1) + "" + d.getDate() + "" + (d.getHours() + 1) + "-" + (d.getMinutes() + 1) + "" + (d.getSeconds() + 1) + "-" + frameCount;
    saveCanvas(now, 'png');
  }
}