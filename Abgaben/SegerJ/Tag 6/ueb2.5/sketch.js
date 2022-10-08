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
  //text(Records[n].latitudeE7, 100, 10 * n);
  noFill();
  //ellipse(xpos, 20 * ypos, Records[n].accuracy, Records[n].accuracy,);

  b = max(Records[n].latitudeE7);
  let x = map(Records[n].latitudeE7, 1, 100000000, 0, 1) * random(20, width);
  let y = map(Records[n].longitudeE7, 1, 100000000, 0, 1) * random(50, height);

  //ellipse(ypos, xpos, Records[n].accuracy,)
  ellipse(mouseX, mouseY, Records[n].accuracy);


  console.log(x);
  console.log(y);

  n++;
  ypos++;


  if (1 * ypos > windowHeight) {
    ypos = 0;
    xpos = xpos + 100;
  }


}