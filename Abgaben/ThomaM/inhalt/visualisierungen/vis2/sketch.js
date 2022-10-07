let history = new Array(); //hier schreiben wir die history rein
let y=30;
let starty=30; 
let n=0;
let r = random(50);

function preload() {
    let url = "BrowserHistory.json";
    loadJSON(url, loaded);
}
function loaded(data){
  history = data.BrowserHistory;
}

function setup() {
  createCanvas(window.innerWidth, 5000);
  frameRate(5);
  background(0, 120, 120)
}
function draw() {
  // history = datensatz, title = History aktion
  textSize(n*4);
  noFill();
  stroke(0)
  text(history[n].page_transition, random(1000), random(1000) ); // 700 = margin links
  y=y+80; // abstand Zeilen
  n=n+1;

}

function keyReleased() {
  if (key == 's' || key == 'S') {
      let d = new Date();
      let now = d.getFullYear() + "" + (d.getMonth() + 1) + "" + d.getDate() + "" + (d.getHours() + 1) + "-" + (d.getMinutes() + 1) + "" + (d.getSeconds() + 1) + "-" + frameCount;
      saveCanvas(now, 'png');
  }
}
/**
 * [...]
 
 * @author  Melissa Thoma
 * @author Natascha Meili
 * 
 */