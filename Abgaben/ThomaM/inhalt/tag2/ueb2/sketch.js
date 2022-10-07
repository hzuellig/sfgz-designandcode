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

let n=0; //zuweisung Namen
let a=20; // Schriftgrössen

function setup() {
  createCanvas(windowWidth, windowHeight); 
  background (255, 0, 255);
}

function draw() {
  text(lg_hfiad21[n], mouseX, mouseY); 
  textSize(a);
  textFont('Georgia');

}

function mouseClicked(event) {
  n=n+1;
  a=a+10;
  console.log(n)

}