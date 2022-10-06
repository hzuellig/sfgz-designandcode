function setup() {
  createCanvas(600, 600);
  noLoop();
}

function keyReleased() {
  if (key == 's' || key == 'S') {
      let d = new Date();
      let now = d.getFullYear() + "" + (d.getMonth() + 1) + "" + d.getDate() + "" + (d.getHours() ) + "-" + (d.getMinutes() + 1) + "" + (d.getSeconds() + 1) + "-" + frameCount;
      saveCanvas(now, 'png');
  }
}

function draw() {
  background('#DA9F93');

  
  //Variabeln

  //Kreisgrösse
  let durchmesser = 400;
  let xachse = 220;
  let yachse= 220;

  //RGB
  let blau = 255; 

  //Strichdicke
  let rotdick = 20;
  let rotduenn = 1;
  
  //Code
  noFill()
  strokeWeight(rotdick);
  stroke(255, 204, blau)
  ellipse(xachse,yachse, durchmesser, durchmesser);
  durchmesser = durchmesser -30;
  xachse = xachse +50;
  yachse = yachse +50;
  blau = blau -30


  strokeWeight(rotduenn);
  ellipse(xachse,yachse, durchmesser, durchmesser);
  durchmesser = durchmesser -50;
  xachse = xachse +30;
  yachse = yachse +30;
  
  strokeWeight(rotdick);
  stroke(255, 204, blau)
  ellipse(xachse,yachse, durchmesser, durchmesser);
  durchmesser = durchmesser -30;
  xachse = xachse +50;
  yachse = yachse +50;
  blau = blau -30


  strokeWeight(rotduenn);
  ellipse(xachse,yachse, durchmesser, durchmesser);
  durchmesser = durchmesser -50;
  xachse = xachse +30;
  yachse = yachse +30;
  strokeWeight(rotdick);
  stroke(255, 204, blau)
  ellipse(xachse,yachse, durchmesser, durchmesser);
  durchmesser = durchmesser -30;
  xachse = xachse +50;
  yachse = yachse +50;
  blau = blau -30


  strokeWeight(rotduenn);
  ellipse(xachse,yachse, durchmesser, durchmesser);
  durchmesser = durchmesser -50;
  xachse = xachse +30;
  yachse = yachse +30;
  strokeWeight(rotdick);
  stroke(255, 204, blau)
  ellipse(xachse,yachse, durchmesser, durchmesser);
  durchmesser = durchmesser -30;
  xachse = xachse +50;
  yachse = yachse +50;
  blau = blau -30


  strokeWeight(rotduenn);
  ellipse(xachse,yachse, durchmesser, durchmesser);
  durchmesser = durchmesser -50;
  xachse = xachse +30;
  yachse = yachse +30;
  strokeWeight(rotdick);
  stroke(255, 204, blau)
  ellipse(xachse,yachse, durchmesser, durchmesser);
  durchmesser = durchmesser -30;
  xachse = xachse +50;
  yachse = yachse +50;
  blau = blau -30


  strokeWeight(rotduenn);
  ellipse(xachse,yachse, durchmesser, durchmesser);
  durchmesser = durchmesser -50;
  xachse = xachse +30;
  yachse = yachse +30;
  

 

  
  //durchmesser wird wie eine Zahl benutzt
}

function keyReleased() {
  if (key == 's' || key == 'S') {
      let now = new Date().toISOString();
      saveCanvas(now, 'png');
  }
}