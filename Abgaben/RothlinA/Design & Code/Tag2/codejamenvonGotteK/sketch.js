let lg_hfiad21 = new Array(); //deklarierung
lg_hfiad21[0] = "flavia";
lg_hfiad21[1] = "cat";
lg_hfiad21[2] = "mirj";
lg_hfiad21[3] = "sario";
lg_hfiad21[4] = "cedi";
lg_hfiad21[5] = "natascha";
lg_hfiad21[6] = "noah";
lg_hfiad21[7] = "lexi z";
lg_hfiad21[8] = "robin";
lg_hfiad21[9] = "gotte k";
lg_hfiad21[10] = "juri";
lg_hfiad21[11] = "melissa";
lg_hfiad21[12] = "lexi";
lg_hfiad21[13] = "hanna";
let keyn = 0;


function setup() {
    createCanvas(windowWidth, windowHeight); //mit den JavaScript Variablen könnt ihr die aktuelle Groesse des Fensters abfragen. 
    //background(0, 10)
}



function draw() {
    //let vorname = "lexi";
    let c = map(mouseX, 0, width, 0, 255);
    let c2 = map(mouseX, 0, width, 255, 0);
    let c3 = map(mouseY, 0, width, 255, 0);
    //let c4 = map(mouseX, 0, width, 255, 0);
    let t = map(mouseX, length, width, 300, 0);
    let t2 = map(mouseY, length, width, 0, 300);
    //let s = map(mouseX, 0, width, 300, 0);
    //let s2 = map(mouseX, 0, width, 0, 300);
    background(c3, 0, c, 10);
    textFont('Georgia')
    fill(c, c2, c3)
    text(lg_hfiad21[keyn], mouseX, mouseY); //in die Funktion draw einfügen
    if (mouseIsPressed === true) {
        textSize(t)
    } else {
        textSize(t2)
    }
}

function mouseClicked(event) {
    keyn = keyn + 1;
    // Kurzschreibweise n++
    //console.log(keyn);

    if (keyn > lg_hfiad21.length) {
        keyn = 0;
    }
}

function keyReleased() {
    if (key == 's' || key == 'S') {
        let d = new Date();
        let now = d.getFullYear() + "" + (d.getMonth() + 1) + "" + d.getDate() + "" + (d.getHours() + 1) + "-" + (d.getMinutes() + 1) + "" + (d.getSeconds() + 1) + "-" + frameCount;
        saveCanvas(now, 'png');
    }
}