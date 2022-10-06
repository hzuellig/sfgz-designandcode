let tracks = new Array();//hier speichern wir die Mausbewegung
let max = 100; // eine maximal Begrenzung von Positionen 


function setup() {
    createCanvas(window.innerWidth, window.innerHeight);
    background(0);
    frameRate(5);//frameRate verlangsamen
}
function draw() {
    
    let object = { x: mouseX, y: mouseY };
    tracks.push(object); //mit push kann ein array mit einem neuen eintrag ergänzt werden.

    if (tracks.length > max) { //damit nicht unendlich daten gesammelt werden
        console.log('array is filled up')
        saveJSON(tracks, 'tracks.json');
        noLoop();
    }
}

//Ergibt ein File mit der folgenden Struktur:
[
  {
    "x": 484,
    "y": 467
  },
  {
    "x": 558,
    "y": 473
  },
  {
    "x": 558,
    "y": 473
  }
]

function keyReleased() {
  if (key == 's' || key == 'S') {
    let d = new Date();
    let now = d.getFullYear() + "" + (d.getMonth() + 1) + "" + d.getDate() + "" + (d.getHours() + 1) + "-" + (d.getMinutes() + 1) + "" + (d.getSeconds() + 1) + "-" + frameCount;
    saveCanvas(now, 'png');
  }
}