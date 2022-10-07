let history = new Array(); //hier schreiben wir die history rein
let n=0;
let y=30;
let starty=30; 

function preload() {
    let url = "BrowserHistory.json";
    loadJSON(url, loaded);
}
function loaded(data){
  history = data.BrowserHistory;
}

function setup() {
  createCanvas(window.innerWidth, 5000);
  frameRate(1);
  background(255)
}
function draw() {
  // history = datensatz, title = History aktion
  textSize(30);
  fill(0);
  y = y-starty;
  text(history[n].title, 700, y ); // 700 = margin links

  y=y+60; // abstand Zeilen


// history = datensatz, time_usec = zeitstempel
  textSize(60);
  fill(0);
  text(history[n].time_usec, 10, y ); // 700 = margin links
  
  y=y+60; // abstand Zeilen

  // history = datensatz, favicon_url = favicon
  textSize(60);
  fill(0);
  text(history[n].favicon_url, 300, y ); // 700 = margin links
  n++;
  y=y+60; // abstand Zeilen

 starty = starty -1;
}
function keyReleased() {
  if (key == 's' || key == 'S') {
      let d = new Date();
      let now = d.getFullYear() + "" + (d.getMonth() + 1) + "" + d.getDate() + "" + (d.getHours() + 1) + "-" + (d.getMinutes() + 1) + "" + (d.getSeconds() + 1) + "-" + frameCount;
      saveCanvas(now, 'png');
  }
}