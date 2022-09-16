

let fullname = new Array(); //deklarierung
fullname[0] = "Natascha";
fullname[1] = "Alenka";
fullname[2] = "Meili";

let keyN = 0; //mausklick
let a = 20; //schriftgrösse

function setup() {
  createCanvas(windowWidth, windowHeight);//mit den JavaScript Variablen könnt ihr die aktuelle Groesse des Fensters abfragen. 
}

function draw() {
  text(fullname[keyN], mouseX, mouseY);
  textSize(a);
}

function mouseClicked(event) {
  keyN = keyN + 1;
  a = a + 20; //Schrift bei Klick um 20px vergrössern
  console.log(keyN); //Log unter "Untersuchen" im Browser
  // Kurzschreibweise n++

  console.log(fullname.length); // mit 3 Einträgen wird 3 ausgegeben 
  //Achtung bei 3 Einträgen geht der Schlüssel bis 2, weil man mit 0 beginnt. n darf nur bis 2 gehen. Deshalb 1 abzählen.

  if (keyN > fullname.length - 1) {
    keyN = 0;
  } //wenn key -1 erreicht, dann zurück auf 0
  if (a > 100) {
    a = 10;
  } //wenn Schriftgrösse 100 dann zurück auf 10
}

//Screenshot Funktion
function keyReleased() {
  if (key == 's' || key == 'S') {
    let d = new Date();
    let now = d.getFullYear() + "" + (d.getMonth() + 1) + "" + d.getDate() + "" + (d.getHours() + 1) + "-" + (d.getMinutes() + 1) + "" + (d.getSeconds() + 1) + "-" + frameCount;
    saveCanvas(now, 'png');
  }
}