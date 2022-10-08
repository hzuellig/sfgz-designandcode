let history = new Array(); //hier schreiben wir die history rein
let n = 0;
let r = 0;
let xpos = 0; //Spalte
let ypos = 0; //Zeilen
let slider;
let slider2;

let rechts = 2;
let links = 500;

let oben = 500;
let unten = 500;

let myColor;
var gui;


function setup() {
  createCanvas(windowWidth, windowHeight);
  r = random(2);
  myColor = color(255, 0, 0)
  gui.addGlobals('myColor');
  gui = createGui();


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

  background(20, 150, 20, 1);
  frameRate(20);
  //background(20, 150, 20, 1);
  textSize(Records[n].accuracy);
  text(Records[n].latitudeE7, 100, 10 * n);
  noFill();
  //ellipse(xpos, 20 * ypos, val, Records[n].accuracy,);
  bezier(xpos + 10, ypos, val, xpos + 10, val2, 100, 100, 100);

  n++;
  ypos++;

  let myColor = 100;
  let myColor = 0;
  let myColor = 1000;
  let myColor = 10;
  gui.addGlobals('myNumber');


  if (20 * ypos > windowHeight) {
    ypos = 0;
    xpos = xpos + 100;
  }











}