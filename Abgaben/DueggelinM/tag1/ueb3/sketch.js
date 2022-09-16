function setup() {
  createCanvas(400, 400);
  //noLoop();
  frameRate(1);
}

function draw() {
  background(100, 204, 0);
  noStroke();
  ellipse(200, 100, 40, 40);

  let durchmesser = 100;

  ellipse(200, 200, durchmesser, durchmesser);

  durchmesser = durchmesser / 5;

  ellipse(200, 200, durchmesser, durchmesser);

}


/* Kommentar */