let history = new Array(); //hier schreiben wir die history rein
let n=0;
let y=30;
let a=40;
let shifty=0;
let end=1;

let maxa=100;
let mina = 40;

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
  frameRate(10);
  background(20, 20, 45)
}
function draw() {

  a=40;
  background(20, 20, 45);
  translate(0, shifty); //console.log(shifty);

  for(let i=0;i<end;i++){
    textSize(a);
    fill(0,100,100);
    stroke(255);
    noFill();
    text(history[i].page_transition, 20, i*10 );
    
    if(grow && a <maxa){
      a++;
    }else {
      grow = false;
    }

    if(!grow && a >mina){
      a-=0.5;
    }else {
      grow = true;
    }

   console.log(a);
     
  }
  //
  end++;
  
  shifty=shifty-5;
  
}

function keyReleased() {
  if (key == 's' || key == 'S') {
      let d = new Date();
      let now = d.getFullYear() + "" + (d.getMonth() + 1) + "" + d.getDate() + "" + (d.getHours() + 1) + "-" + (d.getMinutes() + 1) + "" + (d.getSeconds() + 1) + "-" + frameCount;
      saveCanvas(now, 'png');
  }
}