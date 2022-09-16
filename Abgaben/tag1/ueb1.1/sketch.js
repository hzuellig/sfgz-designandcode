function setup() {
    createCanvas(600, 600);
    noLoop();
  }
  
  function draw() {
    background('#E2A1A1');
    
    let durchmesser = 80;
    durchmesser = durchmesser + durchmesser;

    stroke('#554D4D');
    rect(10,190,380,10);
    line(0, 0, 320, 240);
    noStroke();
    ellipse(50, 50, durchmesser);

    //Heart
    fill('#a68a5d');
    triangle(300, 267, 267, 267, 280, 400);
    fill('#ffc72e');
    ellipse(267, 267, 50, 50);
    fill('#e84a81');
    ellipse(300, 267, 50, 50);
  }