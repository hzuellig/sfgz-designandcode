/*let position = {
    x: 145,
    y: 765,
    b: 's',
    name: 'sexy lexy'
};

let user = {
    age: 24,
    sex: 'f',
    wohnorte: ['Winterthur', 'Zürich', 'Basel', 'Minsk']
}

//für die Ausgabe eines Wohnorts

console.log(user.wohnorte[3])

//für die Ausgabe von x
console.log(position.name);*/


let tracks = new Array(); //hier speichern wir die Mausbewegung
let max = 100; // eine maximal Begrenzung von Positionen 

function setup() {
    /*createCanvas(windowWidth, windowHeight);
    background(33, 70, 280)
    noLoop();*/

    createCanvas(window.innerWidth, window.innerHeight);
    background(33, 12, 280);
    frameRate(5); //frameRate verlangsamen



}

function draw() {

    fill(20, 30, 180)
    ellipse(mouseX, mouseY, 5, 5);

    let object = {
        x: mouseX,
        y: mouseY
    }

    tracks.push(object);

    if (tracks.length > max) {
        saveJSON(tracks, 'tracks.json')
        noLoop();

    }


}