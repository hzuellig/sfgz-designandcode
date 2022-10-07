let history = new Array(); //hier schreiben wir die history rein
let n=0;
let y=30;
let a=20;

let shifty=0;
let end=1;

let maxa=80;
let mina = 20;

let grow=true;

let diameter;
let angle = 0;



function preload() {
    let url = "BrowserHistory.json";
    loadJSON(url, loaded);
  
}
function loaded(data){
  history = data.BrowserHistory;
}
function setup() {
  createCanvas(710, 400);
  diameter = height - 10;
  noStroke();
  fill(255, 204, 0);

  createCanvas(window.innerWidth, window.innerHeight);
  frameRate(120);
  background(200, 20, 45)
}
function draw() {

  background(0);

  let d1 = 10 + (sin(angle) * diameter) / 2 + diameter / 2;
  let d2 = 10 + (sin(angle + PI / 2) * diameter) / 2 + diameter / 2;
  let d3 = 10 + (sin(angle + PI) * diameter) / 2 + diameter / 2;

  ellipse(0, height / 2, d1, d1);
  ellipse(width / 2, height / 2, d2, d2);
  ellipse(width, height / 2, d3, d3);

  angle += 0.02;

  a=20;
  //background(20, 20, 45);
  translate(0, shifty); //console.log(shifty);

  for(let i=0;i<end;i++){
    textSize(a);
    fill(100,100,100);
    text(history[i].title, 20, i*50 );

    if(grow && a <maxa){
      a++;
    }else {
      grow = false;
    }

    if(!grow && a >mina){
      a-=1;
    }else {
      grow = true;
    }

   console.log(a);
     
  }
  //
  end++;
  
  shifty=shifty-5;
  
  

}



  this.display = function() {
    ellipse(this.posX, this.posY, this.size);
  };


function keyReleased() {
  if (key == 's' || key == 'S') {
      let d = new Date();
      let now = d.getFullYear() + "" + (d.getMonth() + 1) + "" + d.getDate() + "" + (d.getHours() + 1) + "-" + (d.getMinutes() + 1) + "" + (d.getSeconds() + 1) + "-" + frameCount;
      saveCanvas(now, 'png');
  }
}