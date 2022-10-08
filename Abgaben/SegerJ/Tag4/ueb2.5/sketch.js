let history = new Array(); //hier schreiben wir die history rein
let n = 0;
let r = 0;
let xpos = 0; //Spalte
let ypos = 0; //Zeilen

let rechts = 2;
let links = 500;

let oben = 500;
let unten = 500;

function setup() {
  createCanvas(windowWidth, windowHeight);
  r = random(100);
}
function preload() {
  let url = "Records.json";
  loadJSON(url, loaded);
}
function loaded(data) {
  Records = data.Records;
}

function draw() {
  let d = map(mouseX, 0, width, links, rechts);
  let f = map(mouseY, 0, width, oben, unten);
  frameRate(100);
  background(255, 200, 280, 6);
  textSize(Records[n].accuracy);
  text(Records[n].latitudeE7, 100, 10 * n);
  noFill();
  strokeWeight(0.8);
  ellipse(xpos, 20 * ypos, Records[n].accuracy, Records[n].accuracy);
  n++;
  ypos++;


  if (20 * ypos > windowHeight) {
    ypos = 0;
    xpos = xpos + 20;
  }

  











}