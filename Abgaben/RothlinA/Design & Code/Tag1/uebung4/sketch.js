
  function setup() {
    createCanvas(600,600);
    noStroke();
  }
  function keyReleased() {
    if (key == 's' || key == 'S') {
        let d = new Date();
        let now = d.getFullYear() + "" + (d.getMonth() + 1) + "" + d.getDate() + "" + (d.getHours() ) + "-" + (d.getMinutes() + 1) + "" + (d.getSeconds() + 1) + "-" + frameCount;
        saveCanvas(now, 'png');
    }
  }
  
  function draw() {
 let c = map(mouseX, 0, width, 0, 255);
 let c2 = map(mouseX, 0, width, 255, 0);
 let c3 = map(mouseY, 0, width, 255, 0);
 let c4 = map(mouseX, 0, width, 255, 0);
 let t = map(mouseX, 0, width, 0, 50);
 let t2 = map(mouseX, 0, width, 50, 0);
 let s = map(mouseX, 0, width, 300, 0);
 let s2 = map(mouseX, 0, width, 0, 300);

 //background(c);
 fill(c3,c4,c4);
 stroke(255,c4,c3);
 strokeWeight(t);
 ellipse(425,400,s);
 fill(c3);
 stroke(c4,c3,c3);
 strokeWeight(t2);
 ellipse(mouseX, mouseY, s2);


  }

  function keyReleased() {
    if (key == 's' || key == 'S') {
        let now = new Date().toISOString();
        saveCanvas(now, 'png');
    }
}