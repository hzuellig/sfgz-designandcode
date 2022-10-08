let history = new Array();//hier speichern wir die Mausbewegung
let n = 0;

let rechts = 255;
let links = 10;

let oben = 1;
let unten = 255;



function preload() {
  let url = "BrowserHistory.json";
  loadJSON(url, loaded);
}

function loaded(data) {
  history = data.BrowserHistory;
  //console.log(data)
}

function setup() {
  createCanvas(600, 600);
  frameRate(10);
}
function draw() {
  background(255, 1);
  textSize(12);
 // fill(100, 100, 200)
  //text(history[n].title, 20,20);
  text(mouseX, mouseY, d, d);
  n++;
 // let d = map(mouseX, 0, width, links, rechts);
 // let f = map(mouseY, 0, width, oben, unten);
}

