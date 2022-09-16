let Sukram;
function preload() {
  //Sukram = loadFont("../../libary/Sukram-Regular.otf");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  //textFont(Sukram);
}

let lg_hfiad21 = new Array();
lg_hfiad21[0] = "Press Z to zoom, MouseClick to change Name";
lg_hfiad21[1] = "flavia";
lg_hfiad21[2] = "liza";
lg_hfiad21[3] = "mirjam";
lg_hfiad21[4] = "sario";
lg_hfiad21[5] = "cedric";
lg_hfiad21[6] = "natascha";
lg_hfiad21[7] = "noah";
lg_hfiad21[8] = "alexandra";
lg_hfiad21[9] = "robin";
lg_hfiad21[10] = "katrin";
lg_hfiad21[11] = "juri";
lg_hfiad21[12] = "melissa";
lg_hfiad21[13] = "alexandra";

let key2 = 0;
/* let vorname = "saru"; */

var zoom = 10;

function draw() {
  background(0, 10);

  text(lg_hfiad21[key2], mouseX, mouseY);

  let c = map(mouseX, 0, width, 0, 255);
  let y = map(mouseY, 0, width, 0, 244);

  fill(y + zoom, c, c);
  textSize(zoom);
  /* text(vorname, mouseX, mouseY); */

  let xStart = 0; //zu oberst einfügen

  if (mouseIsPressed === true) {
    background(255, zoom / 11);

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
  if (key == "z" || key == "Z") {
      if(zoom < 244) {
          zoom = zoom + 11;
      } else {
          zoom = 10;
      }
  }
}
