function setup() {
  createCanvas(1440, 1080);
}

function draw() {
    background('white');
    let durchmesser = 50;
    noStroke();
    
    fill(240, 43, 34, 10);
    ellipse(100,500, durchmesser, durchmesser);
    
    fill(240, 43, 34, 20);
    durchmesser = durchmesser * 2;
    ellipse(150,500, durchmesser, durchmesser);
    
    fill(240, 43, 34, 30);
    durchmesser = durchmesser * 2;
    ellipse(250,500, durchmesser, durchmesser);
    
    fill(240, 43, 34, 40);
    durchmesser = durchmesser * 2;
    ellipse(450,500, durchmesser, durchmesser);
    
    fill(240, 43, 34, 50);
    durchmesser = durchmesser * 2;
    ellipse(800,500, durchmesser, durchmesser);
}