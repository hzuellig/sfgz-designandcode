let name = "Cédric";

function setup() {
  createCanvas(windowWidth, windowHeight);//mit den JavaScript Variablen könnt ihr die aktuelle Groesse des Fensters abfragen.

}

function draw() {
    background(2,1);
    let mausx = map(mouseX,0, windowWidth, 0, 255)
    fill(234,1,2,1);
    textSize(mausx + 100);
    textFont('Helvetica Neue');
    text(name, mouseX, mouseY);

}


function keyReleased() {
    if (key == 's' || key == 'S') {
        let d = new Date();
        let now = d.getFullYear() + "" + (d.getMonth() + 1) + "" + d.getDate() + "" + (d.getHours() + 1) + "-" + (d.getMinutes() + 1) + "" + (d.getSeconds() + 1) + "-" + frameCount;
        saveCanvas(now, 'png');
    }
}
