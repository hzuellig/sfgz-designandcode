let history = new Array(); //hier schreiben wir die history rein
let n=0;
let y=30;

function preload() {
    let url = "BrowserHistory.json";
    loadJSON(url, loaded);
}
function loaded(data){
  history = data.BrowserHistory;
}
function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  frameRate(10);
  background(250)
}

function draw() {
  background(26,53,190,20)
  textSize(60);
  fill(255, 255, 255);
  text(history[n].title, 20, y );
  n++;
  y=y+10;
}

function keyReleased() {
  if (key == 's' || key == 'S') {
      let d = new Date();
      let now = d.getFullYear() + "" + (d.getMonth() + 1) + "" + d.getDate() + "" + (d.getHours() + 1) + "-" + (d.getMinutes() + 1) + "" + (d.getSeconds() + 1) + "-" + frameCount;
      saveCanvas(now, 'png');
  }
}
