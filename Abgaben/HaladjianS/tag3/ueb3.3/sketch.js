let tracks = new Array();
let n=0;

function preload() {
  let url = 'tracks.json';
  loadJSON(url, loaded);
}

function loaded(data) {
  tracks = data;
  console.log(tracks[0]);
}

function setup() {
    createCanvas(window.innerWidth, window.innerHeight);
    background(255);
    frameRate(5);
}

function draw (){
  textSize(32);
  text("S", tracks[n].x, tracks[n].y);
  n++;
}

function keyReleased() {
  if (key == "s" || key == "S") {
    let d = new Date();
    let now =
      d.getFullYear() +
      "" +
      (d.getMonth() + 1) +
      "" +
      d.getDate() +
      "" +
      (d.getHours() + 1) +
      "-" +
      (d.getMinutes() + 1) +
      "" +
      (d.getSeconds() + 1) +
      "-" +
      frameCount;
    saveCanvas(now, "png");
  }
}