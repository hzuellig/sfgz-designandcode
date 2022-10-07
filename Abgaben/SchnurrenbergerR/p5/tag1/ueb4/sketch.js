let opacity = 50

let windowWidth = window.innerWidth,
  windowHeight = window.innerHeight;

let centerX = windowWidth / 2,
  centerY = windowHeight / 2,
  mouseOffSet = 0;

function setup() {

  let credits = createDiv();

  frameRate(3);

  credits.addClass('credits')
  credits.style('position', 'fixed')
  credits.style('font-family', 'sans-serif')
  credits.style('text-transform', 'uppercase')
  credits.style('font-size', '1em')

  createCanvas(windowWidth, windowHeight);
}

function draw() {

  let randomRed = Math.floor(Math.random() * 255),
    randomGreen = Math.floor(Math.random() * 255),
    randomBlue = Math.floor(Math.random() * 255);

  let rad = 10;

  let credits = select('.credits');
  credits.style('left', mouseX + 'px');
  credits.style('top', mouseY + rad / 2 + 20 + 'px');
  credits.style('color', 'rgb(' + randomRed + ',' + randomGreen + ',' + randomBlue + ')')

  background(0, opacity);

  credits.html(randomRed + ', ' + randomGreen + ', ' + randomBlue);

  circle(mouseX - mouseOffSet, mouseY - mouseOffSet, rad);
  fill(randomRed, randomGreen, randomBlue);
  strokeWeight(0);
}

function keyReleased() {
  if (key == 's' || key == 'S') {
    let d = new Date();
    let now = d.getFullYear() + "" + (d.getMonth() + 1) + "" + d.getDate() + "" + (d.getHours()) + "-" + (d.getMinutes()) + "" + (d.getSeconds()) + "-" + frameCount;
    saveCanvas(now, 'png');
  }
}