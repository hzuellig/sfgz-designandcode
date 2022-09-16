let fullname = new Array(); //deklarierung
fullname[0] = "Melissa";
fullname[1] = "Natascha";
fullname[2] = "Lexi";

let keyN = 0; //mausklick
let a = 20; //schriftgrösse

let n = 3;

function setup() {
  createCanvas(windowWidth, windowHeight); //mit den JavaScript Variablen könnt ihr die aktuelle Groesse des Fensters abfragen. 

}

function draw() {
  background(237, 34, 93);
  fill(0);
  text(fullname[keyN], mouseX, mouseY);
  textSize(a);

  if (mouseIsPressed === true) {
    ellipse(300, 50, 400, 400);
  } else {
    rect(400, 25, 100, 100);
  }

  print(mouseIsPressed);
  describe(`black 50-by-50 rect becomes ellipse with mouse click/press.
    fuchsia background.`);
}

//Screenshot Funktion
function keyReleased() {
  if (key == 's' || key == 'S') {
    let d = new Date();
    let now = d.getFullYear() + "" + (d.getMonth() + 1) + "" + d.getDate() + "" + (d.getHours() + 1) + "-" + (d.getMinutes() + 1) + "" + (d.getSeconds() + 1) + "-" + frameCount;
    saveCanvas(now, 'png');
  }
}