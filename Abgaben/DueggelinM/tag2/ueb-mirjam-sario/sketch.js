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

function setup() {
  createCanvas(windowWidth, windowHeight);//mit den JavaScript Variablen könnt ihr die aktuelle Groesse des Fensters abfragen. 
  
}

function draw() {
  if (mouseIsPressed === true) {
    background(200, 30, 20, 10);
  } else {
    background(200, 255, 20, 10);
  }

text(lg_hfiad21[keyN], mouseX, mouseY);

let ts1 = map(mouseX, 0, width, 0, 255);
let ts2 = map(mouseY, 0, width, 0, 255);

if (mouseIsPressed === true) {
  textSize(ts1);
  fill(14, 54, 198);
  } else {
    fill(255, 0, 0);
    textSize(ts2);
  }
}

function mouseClicked(event) {
  keyN=keyN+1;

  if(keyN > lg_hfiad21.length - 1){
  keyN=0;
  }
  // n=n+1; Kurzschreibweise n++ 
}

function keyReleased() {
    if (key == 's' || key == 'S') {
        let d = new Date();
        let now = d.getFullYear() + "" + (d.getMonth() + 1) + "" + d.getDate() + "" + (d.getHours() + 1) + "-" + (d.getMinutes() + 1) + "" + (d.getSeconds() + 1) + "-" + frameCount;
        saveCanvas(now, 'png');
    }
}
