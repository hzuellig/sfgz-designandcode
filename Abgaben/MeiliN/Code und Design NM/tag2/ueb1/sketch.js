

let fullname = new Array(); //deklarierung
fullname[0] = "Natascha";
fullname[1] = "Alenka";
fullname[2] = "Meili";

let keyN = 0; //mausklick
let a=20; //schriftgrösse

function setup() {
  createCanvas(windowWidth, windowHeight);//mit den JavaScript Variablen könnt ihr die aktuelle Groesse des Fensters abfragen. 
  
}

function draw() {
  text(fullname[keyN], mouseX, mouseY); 
  textSize(a);
}

function mouseClicked(event) {
  keyN=keyN+1;
  a=a+20;
  console.log(keyN); //Log unter "Untersuchen" im Browser//
  // Kurzschreibweise n++
}

//Screenshot Funktion
function keyReleased() {
    if (key == 's' || key == 'S') {
        let d = new Date();
        let now = d.getFullYear() + "" + (d.getMonth() + 1) + "" + d.getDate() + "" + (d.getHours() + 1) + "-" + (d.getMinutes() + 1) + "" + (d.getSeconds() + 1) + "-" + frameCount;
        saveCanvas(now, 'png');
    }
}