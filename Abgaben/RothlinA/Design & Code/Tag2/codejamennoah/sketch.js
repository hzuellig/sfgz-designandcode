let vorname = "Noah";
let lg_hfiad21 = new Array(); //deklarierung
lg_hfiad21[0] = "Flavia";
lg_hfiad21[1] = "Liza";
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

let keyN = 0;

let n = 3;

let myFont;

function preload() {
    myFont = loadFont('CamelSans-Bold.otf');

}


function setup() {
    createCanvas(windowWidth, windowHeight); //mit den JavaScript Variablen könnt ihr die aktuelle Groesse des Fensters abfragen. 

}

function draw() {
    cursor(CROSS);
    let c2 = map(mouseX, 0, width, 255, 0);
    let c3 = map(mouseY, 0, width, 255, 0);
    let c4 = map(mouseX, 0, width, 255, 0);
    if (mouseIsPressed === true) {
        textSize(40)
        background(c3,c2,c2)
    } else {
        textSize(80)
        background(c4,c3,c4,10)
    }
    fill(c4, c3, c2);
    textFont(myFont);
    text(lg_hfiad21[keyN], mouseX, mouseY);

}

function mouseClicked(event) {
    keyN = keyN + 1;

    if (keyN > lg_hfiad21.length - 1) {
        keyN = 0;
    }
    // Kurzschreibweise n++
}



function keyReleased() {
    if (key == 's' || key == 'S') {
        let d = new Date();
        let now = d.getFullYear() + "" + (d.getMonth() + 1) + "" + d.getDate() + "" + (d.getHours() + 1) + "-" + (d.getMinutes() + 1) + "" + (d.getSeconds() + 1) + "-" + frameCount;
        saveCanvas(now, 'png');
    }
}