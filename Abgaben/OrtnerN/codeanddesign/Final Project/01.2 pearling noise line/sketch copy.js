//let xoff1 = 0;
//let xoff2 = 500; 
let rechts = 200;
let links = 0;

let oben = 0;
let unten = 10;

let move 



function setup() {
  createCanvas(windowWidth, windowHeight);
  //background(51);

  //background(1501, 200, 110, 80);
}


function draw() {
  
  //let d = map(mouseX, 0, width, links, rechts);
  let d = map(mouseX, 0, width, links, rechts);
  let f = map(mouseY, 0, height, oben, unten);
  background(d, 40, d);


  //let x = map(noise(xoff1), 0, 1, 0, width);
  //let y = map(noise(xoff2), 0, 1, 0, width);

  //xoff1 += 0.005;
  //xoff2 += 0.005;
  
  //noFill();
  //ellipse(x, y, 26, 26);
  //stroke(105,20, 30);
  //noFill();
  fill(d);
  beginShape(); //verbindet die punkte miteinander
  let waves = 0;




  for (let x =0; x < width; x++) {
    stroke(20, d, 20);
    strokeWeight(f);

    let y = noise(waves) * height;
    vertex(x, y);

    waves += 0.02;

  }
  endShape();
  //noLoop();
  //frameRate(2);
  
move += 1;
}

function mouseReleased() {
  
}

function mousepressed(){

  



}
















function keyReleased() {
  if (key == 'S' || key == 'S') {
      let d = new Date();
      let now = d.getFullYear() + "" + (d.getMonth() + 1) + "" + d.getDate() + "" + (d.getHours() + 1) + "-" + (d.getMinutes() + 1) + "" + (d.getSeconds() + 1) + "-" + frameCount;
      saveCanvas(now, 'png');
  }
}