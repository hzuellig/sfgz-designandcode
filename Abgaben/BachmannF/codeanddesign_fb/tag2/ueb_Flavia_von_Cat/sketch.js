let lg_hfiad21 = new Array(); //deklarierung
lg_hfiad21[0] = "Flavia";
lg_hfiad21[1] = "Cat";
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

let value = 0;

let keyN = 0;

let xStart = 0;

let groesse = 60;


function setup() {
    createCanvas(windowWidth, windowHeight); //mit den JavaScript Variablen könnt ihr die aktuelle Groesse des Fensters abfragen. 

}

function draw() {
    let x = map(mouseX, length, width, 0, 255)
    let y = map(mouseY, length, width, 0, 255)
    background(0); //in die Funktion draw einfügen
    for (let x = xStart; x < width; x += 100) {
        for (let y = 0; y < height; y += 50) {
            fill(x, 0, y);
            text('HI', x, y);

        }
    }
    xStart--;
    textSize(groesse);

    textFont('sans-serif');
    fill(value, 0, y);
    text(lg_hfiad21[keyN], mouseX, mouseY); //in die Funktion draw einfügen
}


function mouseClicked() {
    keyN = keyN + 1;
    console.log(keyN);

    if (keyN > lg_hfiad21.length - 1) {
        keyN = 0;
    }

}




function mouseMoved() {
    value = value + 5;
    if (value > 250) {
        value = 0;
    }
}

function mousePressed(event) {

    groesse++;

}

function keyReleased() {
    if (key == 's' || key == 'S') {
        let d = new Date();
        let now = d.getFullYear() + "" + (d.getMonth() + 1) + "" + d.getDate() + "" + (d.getHours() + 1) + "-" + (d.getMinutes() + 1) + "" + (d.getSeconds() + 1) + "-" + frameCount;
        saveCanvas(now, 'png');
    }
}