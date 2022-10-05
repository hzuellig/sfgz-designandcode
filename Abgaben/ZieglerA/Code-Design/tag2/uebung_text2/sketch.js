let name;
name = "Alexandra"

//let name="Lex";
// text(name, mouseX, mouseY); //in die Funktion draw einfügen

let fontRegular;
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
//if (n == 3) {
//  console.log('Bedingung wahr')
//} else {
//   console.log('Bedingung falsch')
//}

function preload() {
    fontRegular = loadFont('../../libraries/AntiqueOliveStd-Roman.otf');


}

function setup() {
    createCanvas(windowWidth, windowHeight);



}

function draw() {
    background(250)
    text(lg_hfiad21[keyN], mouseX, mouseY);
    textSize(32);
    textFont(fontRegular);
    fill(33, 220, 80);

    if (mouseIsPressed === true) {
        background(255);

    } else {}
    // textSize(45);

    // text(name, mouseX, mouseY);
}

function mouseClicked(event) {
    keyN = keyN + 1;
    // console.log(lg_hfiad21);
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