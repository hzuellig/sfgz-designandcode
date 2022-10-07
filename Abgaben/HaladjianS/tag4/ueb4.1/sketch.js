let history = new Array();
let n=0;
let y=20;

function preload() {
  let url = 'historyShort.json';
  loadJSON(url, loaded);
}

function loaded(data) {
  history = data.BrowserHistory;
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  /* noLoop(); */
  frameRate(60);
}

function draw() {
  background(255,10);
  textSize(40);
  text(history[n].title, 20, y);
  n++;
  y=y+10;
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