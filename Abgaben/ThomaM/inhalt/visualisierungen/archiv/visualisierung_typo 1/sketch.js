let history = new Array(); //hier schreiben wir die history rein
let n=0;
let y=30;
let a=40;

function preload() {
    let url = "BrowserHistory.json";
    loadJSON(url, loaded);
}
function loaded(data){
  history = data.BrowserHistory;
}
function setup() {
  createCanvas(window.innerWidth, 5000);
  frameRate(10);
  background(20, 20, 45)
}
function draw() {
  fill(100);
  textSize(a);
  fill(0,100,100);
  stroke(255);
  noFill();
  text(history[n].page_transition, 20, y );
  n++;
  y=y+10;
  a++;
}

function keyReleased() {
  if (key == 's' || key == 'S') {
      let d = new Date();
      let now = d.getFullYear() + "" + (d.getMonth() + 1) + "" + d.getDate() + "" + (d.getHours() + 1) + "-" + (d.getMinutes() + 1) + "" + (d.getSeconds() + 1) + "-" + frameCount;
      saveCanvas(now, 'png');
  }
}