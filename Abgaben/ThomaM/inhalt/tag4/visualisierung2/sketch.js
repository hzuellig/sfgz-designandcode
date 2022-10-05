//Zeichnen mit Favicons aus der eigenen History
//Array
//Schleife
//(Bilder)
//Random
let favicons = new Array();
favicons[0] = "https://www.google.com/favicon.ico";
favicons[1] = "https://ssl.gstatic.com/docs/presentations/images/favicon5.ico";
favicons[2] = "https://tube.switch.ch/favicon.ico";
favicons[3] = "https://atom.io/favicon.ico";
favicons[4] = "https://exorciser.ch/lib/tpl/monochrome/images/favicon.ico";
favicons[5] = "https://www.fhnw.ch/++theme++web16theme/assets/media/icons/device/favicon-32x32.png";
favicons[6] = "https://vorlesungsverzeichnis.hgk.fhnw.ch/favicon-32x32.png";
favicons[7] = "https://ssl.gstatic.com/docs/presentations/images/favicon5.ico";
favicons[8] = "https://ssl.gstatic.com/docs/doclist/images/drive_2022q3_32dp.png";
favicons[9] = "https://xoyondo.com/img/favicon.ico";

let images = new Array();

let counter = 0;
let posX, posY;
let stepSize = 8;

var NORTH = 0;
var NORTHEAST = 1;
var EAST = 2;
var SOUTHEAST = 3;
var SOUTH = 4;
var SOUTHWEST = 5;
var WEST = 6;
var NORTHWEST = 7;

function preload() {
    //images[0] = loadImage(favicons[0);
    //Schleife
    for (let n = 0; n < favicons.length; n++) {
        images[n] = loadImage("https://cors-anywhere.herokuapp.com/" + favicons[n]);


        //https://www.moesif.com/blog/technical/cors/Authoritative-Guide-to-CORS-Cross-Origin-Resource-Sharing-for-REST-APIs/
    }
}

function setup() {
    createCanvas(window.innerWidth, window.innerHeight);
    background(0);
    frameRate(10);
    posX = width / 2;
    posY = height / 2;
}

function draw() {
    let direction = int(random(7));

    if (direction == NORTH) {
        posY -= stepSize;
    } else if (direction == NORTHEAST) {
        posX += stepSize;
        posY -= stepSize;
    } else if (direction == EAST) {
        posX += stepSize;
    } else if (direction == SOUTHEAST) {
        posX += stepSize;
        posY += stepSize;
    } else if (direction == SOUTH) {
        posY += stepSize;
    } else if (direction == SOUTHWEST) {
        posX -= stepSize;
        posY += stepSize;
    } else if (direction == WEST) {
        posX -= stepSize;
    } else if (direction == NORTHWEST) {
        posX -= stepSize;
        posY -= stepSize;
    }
    if (posX > width) {
        posX = 0;
        counter++;

    }
    if (posX < 0) {
        posX = width;
        counter++;
    };
    if (posY < 0) {
        posY = height;
        counter++;
    }
    if (posY > height) {
        posY = 0;
        counter++;
    }

    image(images[counter], posX, posY, 16, 16);
    if (counter > images.length - 1) {
        counter = 0;
    }
}


function keyReleased() {
    if (key == 's' || key == 'S') {
        let d = new Date();
        let now = d.getFullYear() + "" + (d.getMonth() + 1) + "" + d.getDate() + "" + (d.getHours() + 1) + "-" + (d.getMinutes() + 1) + "" + (d.getSeconds() + 1) + "-" + frameCount;
        saveCanvas(now, 'png');
    }

}

function mouseClicked() {
    counter++;
    if (counter > images.length - 1) {
        counter = 0;
    }
}