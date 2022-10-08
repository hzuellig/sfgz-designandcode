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
  r = random(2);
  background(color('#000000'));
  stroke(255);
  strokeWeight(2);

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
  textSize(Records[n].accuracy);
  noFill();

  bezier(ypos, Records[n].accuracy * 3, Records[n].accuracy);

  n++;
  ypos++;

  if (0 * ypos > windowHeight) {
    ypos = 0;
    xpos = xpos + 100;
  }


}