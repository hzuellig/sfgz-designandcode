
//counters
var nkey = 0;
var ngenre = 0;

// Song Metadata
var bpm = 155;
var bpmMin = 33;    //minimum BPM
var bpmMax = 255;   //maximum BPM
var bpmStep = 1;    //Schritte

var songkey = new Array(); // change 'songkey' to 'key' if it should be en input field
songkey[0] = 'G#';
songkey[1] = 'A';
songkey[2] = 'A#';
songkey[3] = 'B';
songkey[4] = 'C';
songkey[5] = 'C#';
songkey[6] = 'D';
songkey[7] = 'D#';
songkey[8] = 'E';
songkey[9] = 'F';
songkey[10] = 'F#';
songkey[11] = 'G';

var major = true;

var genre = new Array();
genre[0] = 'Progressive';
genre[1] = 'Pop';
genre[2] = 'Dubstep';


//var duration = 237040; //in ms
var duration = 237; //in ms
var durationminutes = duration / 1000 * 60;

var dance = 0.815;  // 0.0 to 1.0 --> higher = easier to dance to
var danceMin = 0.0;      //minimum
var danceMax = 1.0;      //maximum
var danceStep = 0.001;   //Schritte

var energy = 0.618; // 0.0 to 1.0
var energyMin = 0.0;      //minimum
var energyMax = 1.0;      //maximum
var energyStep = 0.001;   //Schritte

var volume = -0.883;    // -60db - 0db --> in decibel, 0 = max volume
var volumeMin = -60.0;        //minimum
var volumeMax = -0.1;          //maximum
var volumeStep = 0.001;       //Schritte


// GUI
var visible = true;
var gui, gui2;


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

    scale(2,2);
    translate(-windowWidth / 4, -windowHeight / 4);

    if(genre == 'Dubstep'){
        blendMode(DIFFERENCE);
    }
    if(genre == 'Progressive'){
        blendMode(OVERLAY);
    }
    textSize(windowWidth / 8 + 80 + volume);
    textAlign(CENTER);
    stroke(12, 12, 12, 125);
    strokeWeight(4 * energy);
    fill(169,110,bpm, 255 * energy);
    text(genre, windowWidth / 2 + 80 + volume, windowHeight / 2);

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
        ellipse(windowWidth / 2 + 80 + volume, windowHeight / 2 + random(20) * dance, 50 + 1 * i, 50 + 1 * i)
        ellipse(windowWidth / 2 + 80 + volume, windowHeight / 2 + random(20) * dance, 80 + volume + 1 * i, 80 + volume + 1 * i)
    }

    if(major == true) {
        fill(169,110,bpm, 255 * energy);
    } else {
        fill(169,110,bpm, 255 * energy);
    }



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
