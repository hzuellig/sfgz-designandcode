let history = new Array(); //hier schreiben wir die history rein
let n = 0;
let r = 0;
let xpos = 0; //Spalte
let ypos = 0; //Zeilen

let rechts = 2;
let links = 500;

let oben = 500;
let unten = 500;

let slider;
let slider2;
let slider3;
let slider4;





function setup() {
  createCanvas(windowWidth, windowHeight);
  r = random(2);

  slider = createSlider(0, 255, 100);
  slider.position(10, 900);
  slider.style('width', '98vw');

  slider2 = createSlider(100, 255, 100);
  slider2.position(10, 850);
  slider2.style('width', '98vw');

  slider3 = createSlider(0, 255, 100);
  slider3.position(10, 800);
  slider3.style('width', '98vw');

  slider4 = createSlider(0, 255, 100);
  slider4.position(10, 750);
  slider4.style('width', '98vw');
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
  let val2 = slider2.value();
  let val3 = slider3.value();
  let val4 = slider4.value();



  frameRate(10);
  background(100, 150, 200, 0);
  textSize(Records[n].accuracy);
  text(Records[n].latitudeE7, 100, 10 * n);
  noFill();
  strokeWeight(0.8);
  bezier(xpos * 10, ypos + 20, r, 100, val, val3, val2, val4);

  n++;
  ypos++;


  if (20 * ypos > windowHeight) {
    ypos = 20;
    xpos = xpos + 10;
  }











}