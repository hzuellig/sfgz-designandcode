let n=0;

function setup() {
  createCanvas(windowWidth, windowHeight);//mit den JavaScript Variablen könnt ihr die aktuelle Groesse des Fensters abfragen. 
}

function draw() {
    text(lg_hfiad21[n], mouseX, mouseY); 
}
function mouseClicked(event) {
  n++;
  // Kurzschreibweise n++
}

let lg_hfiad21 = new Array('Flavia','Liza','Mirjam','Sario','Cédric','Natascha','Noah','Alexandra','Robin','Katrin','Juri','Melissa','Alexandra');

