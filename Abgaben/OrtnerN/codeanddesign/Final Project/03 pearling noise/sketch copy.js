//let xoff1 = 0;
//let xoff2 = 500; 
let move 



function setup() {
  createCanvas(windowWidth, windowHeight);
  background(51);

  background(1501, 200, 110, 80);
}


function draw() {
  background(150, 200, 110, 20);


  //let x = map(noise(xoff1), 0, 1, 0, width);
  //let y = map(noise(xoff2), 0, 1, 0, width);

  //xoff1 += 0.005;
  //xoff2 += 0.005;
  
  //noFill();
  //ellipse(x, y, 26, 26);

  for (let x =0; x < width; x++) {
stroke(255);
    point(x, 200);

  }
  
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