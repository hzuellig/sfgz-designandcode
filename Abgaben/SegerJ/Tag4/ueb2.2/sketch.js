let history = new Array(); //hier schreiben wir die history rein
let n = 0;
let r = 0;

let rechts = 2;
let links = 500;

let oben = 500;
let unten = 500;

function setup() {
  createCanvas(windowWidth, windowHeight);
  r = random(2);
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
  frameRate(2);
  background(200, 200, 200, 1);
  textSize(Records[n].accuracy);
  text(Records[n].latitudeE7, 100, 10*n);
  //text(mouseX, mouseY, f, f);

  n++;
}