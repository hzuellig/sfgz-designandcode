let history = new Array(); //hier schreiben wir die history rein
let n=0;
let y=30;
let a=100;

let shifty=0;
let end=1;

let maxa=150;
let mina = 100;

let grow=true;

let snowflakes = []; // array to hold snowflake objects

function preload() {
    let url = "BrowserHistory.json";
    loadJSON(url, loaded);
  
}



function loaded(data){
  history = data.BrowserHistory;
}
function setup() {
  createCanvas(400, 600);
  fill(240);
  noStroke();

  createCanvas(window.innerWidth, window.innerHeight);
  frameRate(120);
  background(200, 20, 45)
}


function draw() {
  background('lightblue');
  let t = frameCount / 60; // update time

  // create a random number of snowflakes each frame
  for (let i = 0; i < random(5); i++) {
    snowflakes.push(new snowflake()); // append snowflake object
  }

  // loop through snowflakes with a for..of loop
  for (let flake of snowflakes) {
    flake.update(t); // update snowflake position
    flake.display(); // draw snowflake
  }

  a=50;
  //background(20, 20, 45);
  translate(0, shifty); //console.log(shifty);

  for(let i=0;i<end;i++){
    textSize(a);
    fill(50,100,100);
    text(history[i].time_usec, 20, i*50 );

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

// snowflake class
function snowflake() {
  // initialize coordinates
  this.posX = 0;
  this.posY = random(-50, 0);
  this.initialangle = random(0, 2 * PI);
  this.size = random(2, 5);

  // radius of snowflake spiral
  // chosen so the snowflakes are uniformly spread out in area
  this.radius = sqrt(random(pow(width / 2, 2)));

  this.update = function(time) {
    // x position follows a circle
    let w = 0.6; // angular speed
    let angle = w * time + this.initialangle;
    this.posX = width / 2 + this.radius * sin(angle);

    // different size snowflakes fall at slightly different y speeds
    this.posY += pow(this.size, 0.5);

    // delete snowflake if past end of screen
    if (this.posY > height) {
      let index = snowflakes.indexOf(this);
      snowflakes.splice(index, 1);
    }
  };

  this.display = function() {
    ellipse(this.posX, this.posY, this.size);
  };
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
 * @author   Natascha Meili
 * 
 */

/**
* Ein Beispiel aus der P5 Galerie angepasst auf unsere Idee
* forum here:
* https://p5js.org/examples/simulate-snowflakes.html
[…]
*/