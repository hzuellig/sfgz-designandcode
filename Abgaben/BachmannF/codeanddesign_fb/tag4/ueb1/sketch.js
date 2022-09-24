let history = new Array(); //hier schreiben wir die history rein
let n = 0;

function preload() {
  let url = "BrowserHistory.json";
  loadJSON(url, loaded);
}

function loaded(data) {
  history = data.BrowserHistory;

}

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  frameRate(4);
}

function draw() {
background(255, 10);

let eintrag = history[n].title
let position = eintrag.indexOf("Google")

console.log(position)
if (position > -1) {
  fill("blue")
}
else {
  fill(200, 20, 20)
}
  text(history[n].title, n + 50, n + 10 * 10);
  textSize(100);

  n++;





}