
//counters
var nkey = 0;
var ngenre = 0;

// Song Metadata
var bpm = 150;
var bpmMin = 33;    //minimum BPM
var bpmMax = 255;   //maximum BPM
var bpmStep = 1;    //Schritte

var songkey = new Array(); // change 'songkey' to 'key' if it should be en input field
songkey[0] = 'C';
songkey[1] = 'C#';
songkey[2] = 'D';
songkey[3] = 'D#';
songkey[4] = 'E';
songkey[5] = 'F';
songkey[6] = 'F#';
songkey[7] = 'G';
songkey[8] = 'G#';
songkey[9] = 'A';
songkey[10] = 'A#';
songkey[11] = 'B';

var major = true;

var genre = new Array();
genre[0] = 'Alternative';
genre[1] = 'Blues';
genre[2] = 'Classical';
genre[3] = 'Dubstep';
genre[4] = 'House';
genre[5] = 'Metal';
genre[6] = 'Pop';
genre[7] = 'Rock';
genre[8] = 'Trance';
genre[9] = 'Jazz';

//var duration = 237040; //in ms
var duration = 237; //in ms
var durationminutes = duration / 1000 * 60;

var dance = 0.585;  // 0.0 to 1.0 --> higher = easier to dance to
var danceMin = 0.0;      //minimum
var danceMax = 1.0;      //maximum
var danceStep = 0.001;   //Schritte

var energy = 0.842; // 0.0 to 1.0
var energyMin = 0.0;      //minimum
var energyMax = 1.0;      //maximum
var energyStep = 0.001;   //Schritte

var volume = -5.833;    // -60db - 0db --> in decibel, 0 = max volume
var volumeMin = -60.0;        //minimum
var volumeMax = -0.1;          //maximum
var volumeStep = 0.001;       //Schritte

//var fillColor = [180, 255, 255];
//var drawStroke = true;
//var	drawFill = true;
//var radius = 20;


// GUI
var visible = true;
var gui, gui2;





function preload() {

}

function loaded() {
    //history = data.BrowserHistory;

}

function setup() {

  createCanvas(windowWidth, windowHeight);

  // Create Layout GUI
  gui = createGui();
  gui.addGlobals(
      'bpm',
      'songkey',
      'major',
      'genre',
      'duration',
      'dance',
      'energy',
      'volume'
  );

  // Don't loop automatically
  //noLoop();
  frameRate(25 * energy);

}


function draw() {

    //gui.hide();

    // clear all
    //clear();
    if(major == true) {
        background(bpm,210,229, 255 * energy);
        fill(169,110,bpm, 100 * energy);
        stroke(12, 12, 12, 125);
        strokeWeight(random(1,18) * energy);
    } else {
        background(bpm,10,88, 255 * energy);
        fill(169,110,bpm, 100 * energy);
        stroke(12, 12, 12, 125);
        strokeWeight(4 * energy);
    }

    for (i = 0; i < duration; i++) {
        strokeWeight(2);
        point(20, windowHeight / 2);
        point(windowWidth - 40, windowHeight / 2);
        //noFill();
        beginShape();
        curveVertex(bpm, windowHeight / 2);
        curveVertex(bpm, windowHeight / 2);
        curveVertex(windowWidth - 40, windowHeight / 2);
        curveVertex(windowWidth / 2 * energy, windowHeight / 4 + random(bpm) * (dance * 10) + bpm * 8 + (volume * 10));
        endShape();
        //ellipse(windowWidth / 2 + 80 + volume, windowHeight / 2 + random(20) * dance, 50 + 1 * i, 50 + 1 * i)
        //ellipse(windowWidth / 2 + 80 + volume, windowHeight / 2 + random(20) * dance, 80 + volume + 1 * i, 80 + volume + 1 * i)
    }

    if(major == true) {
        fill(169,110,bpm, 255 * energy);
    } else {
        fill(169,110,bpm, 255 * energy);
    }

    textSize(80 + volume);
    textAlign(CENTER);
    //text(genre, windowWidth / 2 + 80 + volume, windowHeight / 4 + random(20) * dance);
    text(genre, windowWidth / 2 + 80 + volume, windowHeight / 4);

}












function mouseClicked() {

}


function keyReleased() {
    if (key == 's' || key == 'S') {
        let d = new Date();
        let now = d.getFullYear() + "" + (d.getMonth() + 1) + "" + d.getDate() + "" + (d.getHours() + 1) + "-" + (d.getMinutes() + 1) + "" + (d.getSeconds() + 1) + "-" + frameCount;
        saveCanvas(now, 'png');
    }
}

// check for keyboard events
function keyPressed() {
  switch(key) {
    // type [F1] to hide / show the GUI
    case 'p':
      visible = !visible;
      if(visible) gui.show(); else gui.hide();
      break;
  }
}


// draw a regular n-gon with n sides
function ngon(n, x, y, d) {
  beginShape();
  for(var i = 0; i < n; i++) {
    var angle = TWO_PI / n * i;
    var px = x + sin(angle) * d / 2;
    var py = y - cos(angle) * d / 2;
    vertex(px, py);
  }
  endShape(CLOSE);
}


// draw a regular n-pointed star
function star(n, x, y, d1, d2) {
  beginShape();
  for(var i = 0; i < 2 * n; i++) {
    var d = (i % 2 === 1) ? d1 : d2;
    var angle = PI / n * i;
    var px = x + sin(angle) * d / 2;
    var py = y - cos(angle) * d / 2;
    vertex(px, py);
  }
  endShape(CLOSE);
}
