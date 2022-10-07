let namen = new Array(); //deklarierung
namen[0] = {name:"flavia", alter:29};
/*namen[1] = "cat";
namen[2] = "mirj";
namen[3] = "sario";
namen[4] = "cedi";
namen[5] = "natascha";
namen[6] = "noah";
namen[7] = "lexi z";
namen[8] = "robin";
namen[9] = "gotte k";
namen[10] = "juri";
namen[11] = "melissa";
namen[12] = "lexi";
namen[13] = "hanna";
let keyn = 0;
*/


function setup() {
  createCanvas(windowWidth, windowHeight); //mit den JavaScript Variablen könnt ihr die aktuelle Groesse des Fensters abfragen. 
  noLoop();
}

function draw() {
/*for (init; test; update) {
// Teil der Schleife
}*/
  for (let n=0; n<namen.length; n++) {
    // console.log(lg_hfiad21[n]);
    let person=namen[n]
    textSize(60)
    text(person.name, n*30, n*50+60)

  }
}

function keyReleased() {
  if (key == 's' || key == 'S') {
    let d = new Date();
    let now = d.getFullYear() + "" + (d.getMonth() + 1) + "" + d.getDate() + "" + (d.getHours() + 1) + "-" + (d.getMinutes() + 1) + "" + (d.getSeconds() + 1) + "-" + frameCount;
    saveCanvas(now, 'png');
  }
}