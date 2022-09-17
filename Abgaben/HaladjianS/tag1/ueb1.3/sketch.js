function setup() {
  createCanvas(800, 800);
}

function draw() {
background(0, 10);
fill('#fff')

let a=0
let b=0
let durchmesser=0

let c = map(25, 0, 255, )

a=a+30
b=b+20
durchmesser=durchmesser+10
ellipse(a, b, durchmesser, durchmesser)


a=a+30
b=b+20
durchmesser=durchmesser+10
ellipse(a, b, durchmesser, durchmesser)

a=a+30
b=b+20
durchmesser=durchmesser+10
ellipse(a, b, durchmesser, durchmesser)

a=a+30
b=b+20
durchmesser=durchmesser+10
ellipse(a, b, durchmesser, durchmesser)

a=a+30
b=b+20
durchmesser=durchmesser+10
ellipse(a, b, durchmesser, durchmesser)

a=a+30
b=b+20
durchmesser=durchmesser+10
ellipse(a, b, durchmesser, durchmesser)

a=a+30
b=b+20
durchmesser=durchmesser+10
ellipse(a, b, durchmesser, durchmesser)

a=a+30
b=b+20
durchmesser=durchmesser+10
ellipse(a, b, durchmesser, durchmesser)

a=a+30
b=b+10
durchmesser=durchmesser+10
ellipse(a, b, durchmesser, durchmesser)

a=a+30
b=b+20
durchmesser=durchmesser+10
ellipse(a, b, durchmesser, durchmesser)

a=a+30
b=b+20
durchmesser=durchmesser+10
ellipse(a, b, durchmesser, durchmesser)

a=a+30
b=b+20
durchmesser=durchmesser+10
ellipse(a, b, durchmesser, durchmesser)

a=a+30
b=b+20
durchmesser=durchmesser+10
ellipse(a, b, durchmesser, durchmesser)

a=a+30
b=b+20
durchmesser=durchmesser+10
ellipse(a, b, durchmesser, durchmesser)

a=a+30
b=b+20
durchmesser=durchmesser+10
ellipse(mouseX, mouseY, durchmesser, durchmesser)

}

function keyReleased() {
  if (key == 's' || key == 'S') {
      let d = new Date();
      let now = d.getFullYear() + "" + (d.getMonth() + 1) + "" + d.getDate() + "" + (d.getHours() + 1) + "-" + (d.getMinutes() + 1) + "" + (d.getSeconds() + 1) + "-" + frameCount;
      saveCanvas(now, 'png');
  }
}