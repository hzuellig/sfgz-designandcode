function setup() {
  createCanvas(640, 640);
  background(355);

}

function keyReleased() {
  if (key == 's' || key == 'S') {
      let d = new Date();
      let now = d.getFullYear() + "" + (d.getMonth() + 1) + "" + d.getDate() + "" + (d.getHours() + 1) + "-" + (d.getMinutes() + 1) + "" + (d.getSeconds() + 1) + "-" + frameCount;
      saveCanvas(now, 'png');
  }
}


function draw() {
  background(50, 10)

let durchmesser = 10;
durchmesser = durchmesser + 100;

let a = 10;
a = a + 100;

durchmesser = durchmesser + 20;
stroke(10); ellipse (a, 200, durchmesser, durchmesser);

a = a + 100;
durchmesser = durchmesser + 20;
ellipse (a, 200, durchmesser, durchmesser);

a = a + 100;
durchmesser = durchmesser + 20;
ellipse (a, 200, durchmesser, durchmesser);

a = a + 100;
durchmesser = durchmesser + 20;
ellipse (a, 200, durchmesser, durchmesser);

a = a + 100;
durchmesser = durchmesser + 20;
ellipse (a, 200, durchmesser, durchmesser);

a = a + 100;
durchmesser = durchmesser + 20;
ellipse (100, a, durchmesser, durchmesser);

a = a + 100;
durchmesser = durchmesser + 20;
ellipse (100, a, durchmesser, durchmesser);

a = a + 100;
durchmesser = durchmesser + 20;
ellipse (100, a, durchmesser, durchmesser);

a = a + 100;
durchmesser = durchmesser + 20;
ellipse (100, a, durchmesser, durchmesser);

noStroke(); ellipse(mouseX, mouseY, 30, 30);
}