function setup() {
    createCanvas(600, 600);
    noLoop();
  }
  
  function draw() {
    background('#E2A1A1');

    fill('#a68a5d');
    quad(600, 0, 450, 150, 450, 450, 600, 300);
    fill('#E2A1A1');
    triangle(300, 300, 450, 150, 450, 450);
    fill('#fc97bb');
    triangle(300, 300, 0, 600, 600, 600);
    fill('#f7aa77');
    triangle(300, 300, 0, 0, 0, 600);
    fill('#ebfc97');
    triangle(300, 300, 0, 0, 600, 0);
    fill('#97fcb4');
    quad(300, 300, 450, 450, 300, 600, 150, 450);
    fill('#9a97fc');
    triangle(600, 300, 600, 600, 450, 450);
  }