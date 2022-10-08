let tracks = new Array();//hier speichern wir die Mausbewegung
let max = 400; // eine maximal Begrenzung von Positionen 

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  background(20, 200, 100);
  frameRate(14);//frameRate verlangsamen
}

function draw() {
  fill(10,20,129);
  ellipse(mouseX, mouseY, 1000, 1);

  let object = {
    x: mouseX,
    y: mouseY
  }

  tracks.push(object);

  if (tracks.length > max){
    saveJSON(tracks, 'tracks.json')
    noLoop();
  }
}
