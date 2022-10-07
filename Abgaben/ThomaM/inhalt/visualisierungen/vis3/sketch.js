
let history = new Array(); //hier schreiben wir die history rein
let n=0;
let y=30;
let a=40;
let shifty=50;
let shiftx=50;
let end=1;

let maxa=50;
let mina = 20;
let grow=true;



function preload() {
  let url = "BrowserHistory.json";
  loadJSON(url, loaded);
}
function loaded(data){
  history = data.BrowserHistory;
}
function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  frameRate(5);
  background(20, 20, 45)
}

function draw() {
  a=50;                                              
  background(20, 20, 45);                             // DOPPELT, kann entfernt werden
  translate(shiftx, shifty); 

  let x_value = 50;
  let x_direction = "right";

  /* ENDLESS FOR LOOP */
  for(let i=0;i<end;i++){
    textSize(a);                                      // TIPP: Variable a umbenennen in Schriftgrösse ODER schriftgrösse als zahl in textSize() übergeben da statisch
    fill(0,100,100);
    stroke(255);
    noFill();
    text(history[i].title, x_value, i*10 );

    if(grow && a <maxa){
      a++;
    }
    else {
      grow = false;
    }

    if(!grow && a >mina){
      a-=4;
    }else {
      grow = true;
    }

  // CHANGE DIRECTION IN LOOP ...
  if(x_direction == "right"){
    x_value = x_value + 50;

    if(x_value == 1200){
      x_direction = "left";
    }
  }
  if(x_direction == "left"){
    x_value = x_value - 50;

    if(x_value == 50){
      x_direction = "right";
    }
  }
  }
  //
  end++;
if(end*10>height )
{
  shifty=shifty-10;

}

else {
  shifty=shifty-5;

}

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