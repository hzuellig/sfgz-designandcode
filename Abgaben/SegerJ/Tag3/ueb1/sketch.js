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


function setup() {
  createCanvas(windowWidth, windowHeight);//mit den JavaScript Variablen könnt ihr die aktuelle Groesse des Fensters abfragen. 
  noLoop();
}

function draw() {
  textSize(30)
  for (let n = 0; n < lg_hfiad21.length; n=n+1) {
    //console.log(lg_hfiad21[n]);
    text(lg_hfiad21[n], n*20, n*30+60)
  }


  /* for (let i = 20; i < windowWidth; i += 20) {
     line(i, 10, i, 100);
   }
  */
}

function keyReleased() {
  if (key == 's' || key == 'S') {
    let d = new Date();
    let now = d.getFullYear() 
    + "" + (d.getMonth() + 1) 
    + "" + d.getDate() + "" 
    + (d.getHours() + 1) + "-" 
    + (d.getMinutes() + 1) + "" 
    + (d.getSeconds() + 1) + "-" + frameCount;
    saveCanvas(now, 'png');

  }
}

