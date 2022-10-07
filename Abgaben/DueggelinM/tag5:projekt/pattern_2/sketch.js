
let x = 0;
let y = 40;
let spacing = 50;

function setup (){
  createCanvas(window.innerWidth, window.innerHeight);
  background(0);
}

function draw(){
  stroke(255);
  if (random(1) < 0.7){
    rect(x,y, 30, 60);
 // line(x,y,x+10,y+10);
} else {
 //line(x,y+spacing,x+spacing,y);
}

x = x + spacing;
if (x > width){
  x = 40;
  y = y + spacing + 60;
}

}

function keyReleased() {
  if (key == 's' || key == 'S') {
      let d = new Date();
      let now = d.getFullYear() + "" + (d.getMonth() + 1) + "" + d.getDate() + "" + (d.getHours() + 1) + "-" + (d.getMinutes() + 1) + "" + (d.getSeconds() + 1) + "-" + frameCount;
      saveCanvas(now, 'png');
  }
}