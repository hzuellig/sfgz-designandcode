let tracks = new Array();//hier speichern wir die Mausbewegung
let max = 100; // eine maximal Begrenzung von Positionen 


function setup() {
    createCanvas(window.innerWidth, window.innerHeight);
    background(0);
    frameRate(5);//frameRate verlangsamen
}
function draw() {
    
  ellipse(mouseX, mouseY, 5, 5);

  let object ={
    x:mouseX,
    y:mouseY
  }

  tracks.push(object);

  if(tracks.length > max){
    saveJSON(tracks, 'tracks.json');
    noLoop();
  }
    }