let tracks = new Array();//hier speichern wir die Mausbewegung
let n=0;


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
  background(200, 200, 100);
  frameRate(5);//frameRate verlangsamen
}

function draw() {
    textSize (32);
    text("A", tracks[n].x, tracks[n].y);
    n++;
}
