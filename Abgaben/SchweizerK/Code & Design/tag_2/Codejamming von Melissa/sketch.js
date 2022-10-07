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
lg_hfiad21[13] = "Hanna";


let keyN = 0;

function setup() {
    createCanvas(windowWidth, windowHeight); //mit den JavaScript Variablen könnt ihr die aktuelle Groesse des Fensters abfragen. 

}

function draw() {

    let x = map(mouseX, length, 200, 0, 100)
    let y = map(mouseY, length, 200, 0, 100)
    background(y, 0, x, 10);
    fill(x, 100, 200);
    textSize(x);
    textFont('Verdana');
    text(lg_hfiad21[keyN], 200, mouseY);

}

function mouseClicked(event) {
    keyN = keyN + 1;
    //console.log(keyN);

    if (keyN > 13) {
        keyN = 0;
    }
}

function mouseDragged() {
    let value = 0;
    background(value);
    value = value + 10;
    if (value > 155) {
        value = 0;
    }
}


function keyReleased() {
    if (key == 's' || key == 'S') {
        let d = new Date();
        let now = d.getFullYear() + "" + (d.getMonth() + 1) + "" + d.getDate() + "" + (d.getHours() + 1) + "-" + (d.getMinutes() + 1) + "" + (d.getSeconds() + 1) + "-" + frameCount;
        saveCanvas(now, 'png');
    }
}