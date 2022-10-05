let tracks = new Array(); //hier schreiben wir die gespeicherten mausbewegungen rein
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
  background(255);
  frameRate(10); //frameRate verlangsamen
}


function draw() {
  textSize(30);
  text("M", tracks[n].x, tracks[n].y);
  n++;

}