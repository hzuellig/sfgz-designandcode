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


function preload() {
  fontRegular = loadFont('../../libraries/Krisha-Regular.otf');
}


function setup() {
  createCanvas(windowWidth, windowHeight); //mit den JavaScript Variablen könnt ihr die aktuelle Groesse des Fensters abfragen. 
  noLoop();
}

function draw() {
//  textSize(1);
  textFont(fontRegular);

  for (let i = 50; i < windowWidth; i += 10) {
    line(i, 0, -500, 1000);
    strokeWeight(1);
    stroke(20,i,20);
  }

  for (let n = 0; n < lg_hfiad21.length; n=n+1) {
    //   console.log(lg_hfiad21[n]);
    strokeWeight(1);
    stroke(n*20,n*1,n*40);
    textSize(n*50+50);
    noFill();
    text(lg_hfiad21[n], n*5+50, n*50+50)
    }
  
}








function keyReleased() {
  if (key == 's' || key == 'S') {
    let d = new Date();
    let now = d.getFullYear() + "" + (d.getMonth() + 1) + "" + d.getDate() + "" + (d.getHours() + 1) + "-" + (d.getMinutes() + 1) + "" + (d.getSeconds() + 1) + "-" + frameCount;
    saveCanvas(now, 'png');
  }
}







