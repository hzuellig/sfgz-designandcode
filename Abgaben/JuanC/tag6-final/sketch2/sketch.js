
//counters
var nkey = 0;
var ngenre = 0;

// Song Metadata
var bpm = 150;
var bpmMin = 33;    //minimum BPM
var bpmMax = 255;   //maximum BPM
var bpmStep = 1;    //Schritte

var songkey = new Array(); // change 'songkey' to 'key' if it should be en input field
songkey[0] = 'F#';
songkey[1] = 'G';
songkey[2] = 'G#';
songkey[3] = 'A';
songkey[4] = 'A#';
songkey[5] = 'B';
songkey[6] = 'C';
songkey[7] = 'C#';
songkey[8] = 'D';
songkey[9] = 'D#';
songkey[10] = 'E';
songkey[11] = 'F';

var major = false;

var genre = new Array();
genre[0] = 'Dubstep';
genre[1] = 'Progressive';
genre[2] = 'Pop';


//var duration = 237040; //in ms
var duration = 237; //in ms
var durationminutes = duration / 1000 * 60;

var dance = 0.785;  // 0.0 to 1.0 --> higher = easier to dance to
var danceMin = 0.0;      //minimum
var danceMax = 1.0;      //maximum
var danceStep = 0.001;   //Schritte

var energy = 0.948; // 0.0 to 1.0
var energyMin = 0.0;      //minimum
var energyMax = 1.0;      //maximum
var energyStep = 0.001;   //Schritte

var volume = -0.833;    // -60db - 0db --> in decibel, 0 = max volume
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
