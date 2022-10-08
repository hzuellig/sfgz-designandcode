let vorname; //initialisieren
vorname = "(;-))"; //wert zuweisen

vorname = ";-)";

let rechts = 50;
let links = 120;

let oben = 0;
let unten = 255;

let smiley = new Array(); //deklarierung
smiley[0] = ":-)";
smiley[1] = ";-)";
smiley[2] = ";-D";
smiley[3] = ":-(";
smiley[4] = "B-)";
smiley[5] = ":-O";
smiley[6] = "LOL";

let key1 = 0;


let groesse = 60;

function setup() {
    createCanvas(windowWidth, windowHeight); //mit den JavaScript Variablen könnt ihr die aktuelle Groesse des Fensters abfragen. 
    noLoop();

}

function draw() {
    background(0, 0, 0, 10);


    let d = map(mouseX, 0, width, links, rechts);
    let f = map(mouseY, 0, height, oben, unten);
    fill(mouseX, 0, mouseY, d);
    textSize(groesse);
    textFont('comic Sans Ms');



    //text(smiley[key1], mouseX, mouseY);
    textSize(100);
    for (let n = 0; n < smiley.length; n++) {
        // console.log(smiley[n]);

        text(smiley[n], n * 50, n * 100 + 100)
    }

    for (let i = 20; i < windowWidth; i += 5) {
        line(i, 100, i, 500);
    }

}

async function newMethodName() {

}

function mouseClicked(event) {
    key1 = key1 + 1;
    console.log(key1);
    // key++;async newMethodName()
    //Kurzschreibweise n++
    if (key1 > smiley.length - 1) {
        key1 = 0;

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