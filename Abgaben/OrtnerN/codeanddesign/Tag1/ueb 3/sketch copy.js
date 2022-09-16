function setup() {
  createCanvas(600, 400);
  
  noStroke();
}

function draw() {
  background(240);
  
  let a=0;
  let c=0;
  
  fill(300,100,100,200);
  ellipse(a,200,90,90);
 
  //kreis 1
  a+=60;
  c+=70;
  //a=a+60;
  ellipse(a,200,a,a);
  
  
  //kreis 2
  a+=60;
  c+=70;
  ellipse(a,200,a,a);
  
  //kreis 3
  a+=60;
  c+=70;
  ellipse(a,200,a,a);
  
  //kreis 4
  a+=60;
  c+=70;
  ellipse(a,200,a,a);
  
  //kreis 5
  a+=60;
  c+=70;
  ellipse(a,200,a,a);
  
  //kreis 6
  a+=60;
  
  ellipse(a,200,a,a);
  
  //kreis 7
  a+=60;
  ellipse(a,200,90,90);
  
  //kreis 8
  a+=60;
  ellipse(a,200,90,90);
  
  //kreis 9
  a+=60;
  ellipse(a,200,90,90);
  
  //kreis 10
  a+=60;
  ellipse(a,200,90,90);
  
  
  

}