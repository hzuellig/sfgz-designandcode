 
let rechts = 200;
let links = 0;

let oben = 2;
let unten = 10;

let langsam = 0;
let schnell = 10;


let anfang = 0;
let sliderNoise
 



function setup() {
  createCanvas(windowWidth, windowHeight);
  //background(51);
  sliderNoise = createSlider(0, 400, 50);

  background(0);




  sliderNoise.position(20, 40);
  sliderNoise.style('width', '200px');
}


function draw() {
  textSize(15);
  noStroke();
  fill(255);
  text('Wellengang', 20, 40);
  //background(0,70);
  
  //let d = map(mouseX, 0, width, links, rechts);
  let d = map(mouseX, 0, width, links, rechts);
  let f = map(mouseY, 0, height, oben, unten);
  let a = map(mouseX, 0, width, links, rechts);

  //background(d, 100, d);


  let flow = sliderNoise.value()/10000;

  noFill();
  //fill(d);
  /**
* The Coding Train
* https://www.youtube.com/watch?v=Qf4dIN99e2w
[…]
*/
  beginShape(); //verbindet die punkte miteinander
  let waves = anfang * 10;

  for (let x =0; x < width; x++) {
    stroke(d, d, 255);
    //stroke(d, d, 20);
    strokeWeight(0.75);

    let y = noise(waves) * height;
    vertex(x, y);

    waves += flow;


  }
  
  endShape();


  noFill();
  beginShape(); //verbindet die punkte miteinander
  for (let x =0; x < width; x++) {
    stroke(255);
    //stroke(d, d, 20);
    strokeWeight(f);


   
    let y = noise(waves) * height;
    vertex(x, y);

    waves += flow;


  }
  endShape();
  

  anfang += flow
  
  //noLoop();
  frameRate(2);
  

}

function mouseReleased() {
  
}

function mousepressed(){

  



}
















function keyReleased() {
  if (key == 'S' || key == 'S') {
      let d = new Date();
      let now = d.getFullYear() + "" + (d.getMonth() + 1) + "" + d.getDate() + "" + (d.getHours() + 1) + "-" + (d.getMinutes() + 1) + "" + (d.getSeconds() + 1) + "-" + frameCount;
      saveCanvas(now, 'png');
  }
}