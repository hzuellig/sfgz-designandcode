let Sukram;
function preload() {
  Sukram = loadFont("../../libary/Sukram-Regular.otf");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  textFont(Sukram);
}

let lg_hfiad21 = new Array();
lg_hfiad21[0] = "flavia";
lg_hfiad21[1] = "liza";
lg_hfiad21[2] = "mirjam";
lg_hfiad21[3] = "sario";
lg_hfiad21[4] = "cedric";
lg_hfiad21[5] = "natascha";
lg_hfiad21[6] = "noah";
lg_hfiad21[7] = "alexandra";
lg_hfiad21[8] = "robin";
lg_hfiad21[9] = "katrin";
lg_hfiad21[10] = "juri";
lg_hfiad21[11] = "melissa";
lg_hfiad21[12] = "alexandra";

let key2 = 0;
/* let vorname = "saru"; */



function draw() {
  background(0, 10);

  text(lg_hfiad21[key2], mouseX, mouseY);

  let c = map(mouseX, 0, width, 0, 255);

  fill(255, c, c);
  textSize(c);
  /* text(vorname, mouseX, mouseY); */

  let xStart = 0; //zu oberst einfügen

  if (mouseIsPressed === true) {
    background(255);

  } else {
  }
}

function mouseClicked(event) {
  key2 = key2 + 1;

  if (key2 > lg_hfiad21.length - 1) {
    key2 = 0;
  }
}

function keyReleased() {
  if (key == "s" || key == "S") {
    let d = new Date();
    let now =
      d.getFullYear() +
      "" +
      (d.getMonth() + 1) +
      "" +
      d.getDate() +
      "" +
      (d.getHours() + 1) +
      "-" +
      (d.getMinutes() + 1) +
      "" +
      (d.getSeconds() + 1) +
      "-" +
      frameCount;
    saveCanvas(now, "png");
  }
}
