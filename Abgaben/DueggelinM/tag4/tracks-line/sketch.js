let tracks = new Array();//hier schreiben wir die gespeicherten mausbewegungen rein
let n=0;

function preload() { //hier Schriften, Bilder oder Daten laden
let url = "tracks.json"; //achtung, eventuell pfad anpassen!
loadJSON(url, loaded); //die funktion loaded wird aufgerufen, wenn das file fertig geladen ist (callback funktion)
}

function loaded(data) {
    tracks = data;
    console.log(tracks[10]);
}

function setup (){
  createCanvas(window.innerWidth, window.innerHeight);
  background(26,53,190);
  frameRate(10);
}

function draw(){
  textSize(200);
  line(20,20,tracks[n].x, tracks[n].y, 10, 10);
  fill(255,255,255,50);
  stroke(255, 255, 255, 100);
  strokeWeight(10);
  n++;
}

function keyReleased() {
  if (key == 's' || key == 'S') {
      let d = new Date();
      let now = d.getFullYear() + "" + (d.getMonth() + 1) + "" + d.getDate() + "" + (d.getHours() + 1) + "-" + (d.getMinutes() + 1) + "" + (d.getSeconds() + 1) + "-" + frameCount;
      saveCanvas(now, 'png');
  }
}