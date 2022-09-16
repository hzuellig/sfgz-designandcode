let name;
name = "Alexandra"

//let name="Lex";
// text(name, mouseX, mouseY); //in die Funktion draw einfügen

let fontRegular;
let lg_hfiad21 = new Array(); //deklarierung
lg_hfiad21[0] = "Hi Flavia";
lg_hfiad21[1] = "Hi Cat";
lg_hfiad21[2] = "Hi Mirjam";
lg_hfiad21[3] = "Hi Sario";
lg_hfiad21[4] = "Hi Cédric";
lg_hfiad21[5] = "Hi Natascha";
lg_hfiad21[6] = "Hi Noah";
lg_hfiad21[7] = "Hi Alexandra";
lg_hfiad21[8] = "Hi Robin";
lg_hfiad21[9] = "Hi Katrin";
lg_hfiad21[10] = "Hi Juri";
lg_hfiad21[11] = "Hi Melissa";
lg_hfiad21[12] = "Hi Alexandra";

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
    frameRate(10);

}

function draw() {
    let x = map(mouseX, length, width, 0, 255)
    let y = map(mouseY, length, width, 0, 255)
    let randomRed = Math.floor(Math.random() * 255),
    randomGreen = Math.floor(Math.random() * 255),
    randomBlue = Math.floor(Math.random() * 255);
    background(x, 0, y)
    text(lg_hfiad21[keyN], mouseX, mouseY);
    textSize(200);
    textFont(fontRegular);
    fill(randomRed, randomGreen, randomBlue);
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