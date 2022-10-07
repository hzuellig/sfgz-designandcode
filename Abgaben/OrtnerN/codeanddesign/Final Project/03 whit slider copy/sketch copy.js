
let sliderB;
let colorChange = [2, 4, 0.75, 7]
let particles = [];
let index = 0;
let rend;
let slider;
let slider2;
let sliderS;


/* const num = 5000; */


const noiseScale = 0.01/4;

function setup() {
  createCanvas(windowWidth, windowHeight);
/*   for(let i = 0; i < num; i ++) {
    particles.push(createVector(random(width), random(height)));

  } */

  //sliderX = createSlider(0, 1, 0.0001, 0.001);
  slider = createSlider(1, 200, 100);
  slider2 = createSlider(1, 200, 100);
  sliderB = createSlider(1, 255, 16);
  sliderS = createSlider(1, 20, 3);
  sliderP = createSlider(200, 10000, 5000);
  sliderG = createSlider(200, 10000, 5000);
  sliderT = createSlider(0, 10, 2);




  //sliderX.position(20, 40);
  //sliderX.style('width', '200px');
  slider.position(20, 40);
  slider.style('width', '200px');

  slider2.position(20, 80);
  slider2.style('width', '200px');

  sliderB.position(20, 120);
  sliderB.style('width', '200px');

  sliderS.position(20, 160);
  sliderS.style('width', '200px');

  sliderP.position(20, 200);
  sliderP.style('width', '200px');


  
  sliderT.position(20, 240);
  sliderT.style('width', '200px');

 frameRate(40);

}

function draw() {

  let color1 = sliderB.value();
let color2 = sliderB.value() /2;

  const num = sliderP.value();
  let tempo  = sliderT.value();

  for(let i = 0; i < num; i ++) {
    particles.push(createVector(random(width), random(height)));

  }

  strokeWeight(sliderS.value())
  stroke(slider2.value(), 22, slider.value());
  textSize(220);
  //noFill();
  fill(100);
  //text('lava', mouseX, mouseY);
  background(23, color1, color2, 10);
  
  for(let i = 0; i < num; i ++) {
    let p = particles[i];
    //point(p.x, p.y);
    square(p.x, p.y, 10);

    let n = noise(p.x * noiseScale, p.y * noiseScale, frameCount * noiseScale * noiseScale);
    let a = TAU * n;
    p.x += cos(a) * tempo; 
    p.y += sin(a) * tempo;
    if(!onScreen(p) && frameCount < 1000) {
      p.x = random(width);
      p.y = random(height);
    }
  }

  console.log(sliderP.value());
}

function mouseReleased() {
  
}

function mousepressed(){
  index = index +1;


}

function onScreen(v) {
  return v.x >= 0 && v.x <= width && v.y >= 0 && v.y <= height;
}














function keyReleased() {
  if (key == 'S' || key == 'S') {
      let d = new Date();
      let now = d.getFullYear() + "" + (d.getMonth() + 1) + "" + d.getDate() + "" + (d.getHours() + 1) + "-" + (d.getMinutes() + 1) + "" + (d.getSeconds() + 1) + "-" + frameCount;
      saveCanvas(now, 'png');
  }
}