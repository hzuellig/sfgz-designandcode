let name = "Cédric";

let lg_hfiad21 = new Array(); //deklarierung
lg_hfiad21[0] = "Flavia";
lg_hfiad21[1] = "Catharina";
lg_hfiad21[2] = "Mirjam";
lg_hfiad21[3] = "Sario";
lg_hfiad21[4] = "Cédric";
lg_hfiad21[5] = "Natascha";
lg_hfiad21[6] = "Noah";
lg_hfiad21[7] = "Alexandra";
lg_hfiad21[8] = "Robin";
lg_hfiad21[9] = "Katrin";
lg_hfiad21[10] = "Juri";
lg_hfiad21[11] = "Melissa";
lg_hfiad21[12] = "Alexandra";

let brush = new Array(); //deklarierung
brush[0] = "|";
brush[1] = "o";
brush[2] = "x";
brush[3] = "-";
brush[4] = "_";
brush[5] = ".";
brush[6] = "0";
brush[7] = "<";
brush[8] = "D";
brush[9] = "!";


let counter = 0;

var drop = 0;

var rand = 2;

function setup() {
  createCanvas(windowWidth, windowHeight);//mit den JavaScript Variablen könnt ihr die aktuelle Groesse des Fensters abfragen.

}

function draw() {
    //fill(234,1,2);
    //text(brush[counter], 10, 10);
    background(112,1);
    let mausx = map(mouseX,0, windowWidth, 0, 255)
    fill(234,1,rand,drop);
    //stroke(1);
    textSize(mausx + 100);
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
            rand = random(2,234);
        } else {
            drop = 0;
        }
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
