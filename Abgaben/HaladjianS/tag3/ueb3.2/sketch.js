let tracks = new Array();//hier speichern wir die Mausbewegung
let max = 100; // eine maximal Begrenzung von Positionen 


function setup() {
    createCanvas(window.innerWidth, window.innerHeight);
    background(0);
    frameRate(5);
}
function draw() {
let object = {
  x: mouseX,
  y: mouseY
}

console.log(mouseX, mouseY);

tracks.push(object);

if(tracks.length > max){
  saveJSON(tracks, 'tracks.json');
  noLoop();
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