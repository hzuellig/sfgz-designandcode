function setup() {
  createCanvas(600, 600);
  background(0); 
  // put setup code here
}

function draw() {
  // put drawing code here
  background(0); 
  stroke('white');
  strokeWeight(1);
  fill('#F1E4F3');
  triangle(0,0,300,300,600,0);
  fill('#EDCF8E');
  triangle(0,0,300,300,0,600);
  fill('#8EEDF7');
  triangle(300,600,600,300,600,600);
  fill('#A1CDF1');
  quad(450,150,600,0, 600, 300, 450, 450);
  fill('#F4BBD3');
  triangle(300,300,450,150,450,450);
  fill('#AA9ABA');
  quad(150,450,300,300, 450, 450, 300, 600);
  fill('#E3B9BC');
  triangle(0,600,150,450,300,600);
  
}
function keyReleased() {
  if (key == 's' || key == 'S') {
      let now = new Date().toISOString();
      saveCanvas(now, 'png');
  }
}