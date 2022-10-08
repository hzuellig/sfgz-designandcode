let history = new Array(); //hier schreiben wir die history rein
let n = 0;
let r = 0;
let xpos = 0; //Spalte
let ypos = 0; //Zeilen

let rechts = 2;
let links = 500;

let oben = 500;
let unten = 500; $

let slider;

function setup() {
  slider = createSlider(0, 360, 60, 40);
  slider.position(10, 10);
  slider.style('width', '80px');


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
  let val = slider.value();

  frameRate(40);
  background(100, 150, 200, 0);
  textSize(Records[n].accuracy);
  text(Records[n].latitudeE7, 100, 10 * n);
  noFill();
  strokeWeight(0.8);
  bezier(xpos + 10, ypos, 100, xpos + 10, val2, 100, 100, 100);

  n++;
  ypos++;


  if (20 * ypos > windowHeight) {
    ypos = 20;
    xpos = xpos + 50;
  }











}