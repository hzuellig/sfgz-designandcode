let history = new Array();//hier schreiben wir die gespeicherten mausbewegungen rein
let n=0;

function preload() {
    let url = "BrowserHistory.json";
    loadJSON(url, loaded);

}

function loaded(data) {
history = data.BrowserHistory;
}

function setup() {
    createCanvas(window.innerWidth, window.innerHeight);
    frameRate(1);
  
    farb=random(255);
    farb1=random(255);
    farb2=random(255);
    background(farb,farb1,farb2)
}

function draw (){
    background(255,10);
    //text(history[n].title,20,20);
    text(history[n].title, mouseX, mouseY);
    n++;
}

function keyReleased() {
  if (key == 's' || key == 'S') {
    let d = new Date();
    let now = d.getFullYear() + "" + (d.getMonth() + 1) + "" + d.getDate() + "" + (d.getHours() + 1) + "-" + (d.getMinutes() + 1) + "" + (d.getSeconds() + 1) + "-" + frameCount;
    saveCanvas(now, 'png');
  }
}