let tracks = new Array(); //hier speichern wir die Mausbewegung
let max = 100; // eine maximal Begrenzung von Positionen 


function setup() {
    createCanvas(window.innerWidth, window.innerHeight);
    background(100, 20, 60, 20);
    frameRate(30); //frameRate verlangsamen
}

function draw() {
    ellipse(mouseX, mouseY, 100, 20)

    let object = {

        x: mouseX,
        y: mouseY

    }

    tracks.push(object);
    if (tracks.length > max) {
        saveJSON(tracks, 'tracks.json');
        noLoop();


    }

}