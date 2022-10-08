let history = new Array(); //hier schreiben wir die history rein
let n = 0;
let r = 0;

let rechts = 2;
let links = 500;

let oben = 500;
let unten = 500;

function setup() {
  createCanvas(windowWidth, windowHeight);
  r = random(20);
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
  frameRate(60);
  background(100, 120, 200, 1);
  textSize(r);
  text(Records[n].latitudeE7);
  text(mouseX, mouseY, f, f);

  n++;
}