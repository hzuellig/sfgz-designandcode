

function setup() {
  createCanvas(windowWidth, windowHeight);//mit den JavaScript Variablen könnt ihr die aktuelle Groesse des Fensters abfragen. 

}

function draw() {
  let name = "Hanna";

  text(name, mouseX, mouseY); //in die Funktion draw einfügen
}

function keyReleased() {
  if (key == 's' || key == 'S') {
    let d = new Date();
    let now = d.getFullYear() + "" + (d.getMonth() + 1) + "" + d.getDate() + "" + (d.getHours()) + "-" + (d.getMinutes()) + "" + (d.getSeconds()) + "-" + frameCount;
    saveCanvas(now, 'png');
  }
}