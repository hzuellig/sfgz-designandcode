function setup() {
  createCanvas(400, 400);
}

function draw() {
  //background(20, 22, 13);
  background(0,5);

  let addten = 100;
  let mausx = mouseX / 100 + addten;
  let mausy = mouseY / 100 + addten;

let mapx = map(mouseX,0,width,width / 8, width / 4 * 1.66);
let mapy = map(mouseY,0,height,height / 6, height / 4 * 1.66);

strokeWeight(4);
stroke(110,240,110, 60);
fill(20,22,13,60);
rect(mapx,mapy,mapx,mapy);

addten = addten + 10;
mausx = mouseX / mapx + addten;
mausy = mouseY / mapy + addten;

stroke(110,240,110, 80);
fill(20,22,13, 80);
rect(mausx,mausy,mapx,mapy);

addten = addten + 10;
mausx = mausx / mapx + addten;
mausy = mausy / mapy + addten;

stroke(110,240,110, 100);
fill(20,22,13, 100);
rect(mausx,mausy,mapx,mapy);

}
