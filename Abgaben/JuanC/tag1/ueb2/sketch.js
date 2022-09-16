function setup() {
  createCanvas(400, 400);
}

function draw() {
  //background(20, 22, 13);
  background(0,2);

  let addten = 150;
  let mausx = mouseX / 100 + addten;
  let mausy = mouseY / 100 + addten;

//map(mouseX,start1,stop1,start2,stop2);

strokeWeight(4);
stroke(110,240,110, 60);
fill(20,22,13,60);
rect(mausx,mausy,100,100);

addten = addten + 10;
mausx = mouseX / mausx + addten;
mausy = mouseY / mausy + addten;

stroke(110,240,110, 80);
fill(20,22,13, 80);
rect(mausx,mausy,80,80);

addten = addten + 10;
mausx = mausx / mausx + addten;
mausy = mausy / mausy + addten;

stroke(110,240,110, 100);
fill(20,22,13, 100);
rect(mausx,mausy,60,60);

}
