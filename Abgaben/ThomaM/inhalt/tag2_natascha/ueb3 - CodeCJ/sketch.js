

let brush = new Array(); //deklarierung
brush[0] = "A";
brush[1] = "B";
brush[2] = "C";
brush[3] = "D";
brush[4] = "E";
brush[5] = "F";
brush[6] = "G";
brush[7] = "H";
brush[8] = "I";
brush[9] = "J";


let counter = 10;

var drop = 0;
var background = 100;

function setup() {
  createCanvas(windowWidth, windowHeight);//mit den JavaScript Variablen könnt ihr die aktuelle Groesse des Fensters abfragen.

}

function draw() {
    //fill(234,1,2);
    //text(brush[counter], 10, 10);
    //background(255,10);
    let mausx = map(mouseX,0, windowWidth, 0, 255)
    fill(50,30,5,drop);
    stroke(1);
    textSize(mausx + 10);
    textFont('Helvetica Neue');
    text(brush[counter], mouseX, mouseY);

}

function keyReleased() {
    if (key == 's' || key == 'S') {
        let d = new Date();
        let now = d.getFullYear() + "" + (d.getMonth() + 1) + "" + d.getDate() + "" + (d.getHours() + 1) + "-" + (d.getMinutes() + 1) + "" + (d.getSeconds() + 1) + "-" + frameCount;
        saveCanvas(now, 'png');
    }
    if (key == 'd' || key == 'D') {
        if (drop == 0) {
            drop = 10;
        } else {
            drop = 0;
        }
    }
    if (key == 'b' || key == 'B') {
        if (backround == 100) {
            background = 10;
        } else {
            background = 0;
        } //-> Ziel; Background ändern bei B klicken - klappt nicht :-(
    }
}

function mouseClicked() {
    if(counter < brush.length - 1) {
        counter++;
    } else {
        counter = 0;
    }
    console.log(brush[counter]);
}