let lg_hfiad21 = new Array();
lg_hfiad21[0] = "flavia";
lg_hfiad21[1] = "cat";
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



function setup() {
  createCanvas(windowWidth, windowHeight);
  /* noLoop(); */
  frameRate(1);
}

function draw() {

  let x = random(windowWidth);
  let y = random(windowHeight);
  textSize(40);

  for (let i = 40; i < windowWidth; i += x) {
    line(i, 20, i + 500, windowHeight - 20);
  }

  for(let n=0; n < lg_hfiad21.length; n++){
    text(lg_hfiad21[n], n, n*50+40)
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