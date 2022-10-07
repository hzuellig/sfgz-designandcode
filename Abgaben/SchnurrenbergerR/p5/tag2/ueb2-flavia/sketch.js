let name;
name = "Robin"

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

let key = 0;
let random = (100);

function preload() {
    fontRegular = loadFont('../../library/atc.ttf');
}

function setup() {
    createCanvas(windowWidth, windowHeight);
    background(250, 220, 200);
}

function draw() {
    let x = map(mouseX, length, width, 0, 255)
    let y = map(mouseY, length, width, 0, 255)
    let randomRed = Math.floor(Math.random() * 255),
    randomGreen = Math.floor(Math.random() * 255),
    randomBlue = Math.floor(Math.random() * 255);
    text(lg_hfiad21[key], mouseX, mouseY);
    textSize(random);
    textFont(fontRegular);
    fill(randomRed, randomGreen, randomBlue);
    // textSize(45);

    // text(name, mouseX, mouseY);
}

function mouseClicked(event) {
    key = key + 1;
    // Kurzschreibweise n++
}


function keyReleased() {
    if (key == 's' || key == 'S') {
        let d = new Date();
        let now = d.getFullYear() + "" + (d.getMonth() + 1) + "" + d.getDate() + "" + (d.getHours() + 1) + "-" + (d.getMinutes() + 1) + "" + (d.getSeconds() + 1) + "-" + frameCount;
        saveCanvas(now, 'png');
    }
}