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

let drop = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);//mit den JavaScript Variablen könnt ihr die aktuelle Groesse des Fensters abfragen.
  //noLoop();
  //frameRate(24);
}

function draw() {
    background(255);
    //fill(231,34,76,drop);
    textSize(mouseY / 20);
    for (let i = 0; i < lg_hfiad21.length; i++) {
        //textSize(random(20,50));
        //text(lg_hfiad21[i],mouseX, i * mouseY + 40);
        text(lg_hfiad21[i],mouseX, i * 20 + mouseY);
    }

}


function keyReleased() {
    if (key == 's' || key == 'S') {
        let d = new Date();
        let now = d.getFullYear() + "" + (d.getMonth() + 1) + "" + d.getDate() + "" + (d.getHours() + 1) + "-" + (d.getMinutes() + 1) + "" + (d.getSeconds() + 1) + "-" + frameCount;
        saveCanvas(now, 'png');
    }
    if (key == 'd' || key == 'D') {
        if (drop == 0) {
            drop = 50;
        } else {
            drop = 0;
        }
    }
}

function mouseClicked() {

}
