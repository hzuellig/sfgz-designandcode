let table;
let numRows, numCols;
let date = [], gsml=[];
let diagramX, diagramY; 

function preload () {
  //Lädt das File rein
  table = loadTable("assets/sealevel.csv", "csv", "header");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  rectMode(CENTER)
  //Wo im CSV File
  numRows = table.getRowCount();
  numCols = table.getColumnCount();
  //print("rows: " + numRows + "cols: " + numCols)            

  //load data
  for(let r =0; r<table.getRowCount(); r++) {
    date[r] = table.getString(r,0);
    gsml[r] = table.getNum(r,1);
    //print(date[r] + "  "+gsml[r])                          Zeigt Sealevels in der Konsole an
  }
  minMax();
}

let size = [];
function draw() {
  background(240);
  chartInfo();

  //Positionierung des Graphen & Kreis
  diagramX = (width/4) * 3 - 90
  diagramY = height/2;
  let radius = width / 5 - 100;
  let ang = 360 / numRows;


  for(let i = 0; i < numRows; i++) {
    size[i] = map(gsml[i], -3.5, 79.5, 0, 205);
    let pointx = (size[i] + radius) * cos(radians(ang * i)) + diagramX;
    let pointy = (size[i] + radius) * sin(radians(ang * i)) + diagramY;
    let cirx = radius * cos(radians(ang * i)) + diagramX;
    let circ = radius * sin(radians(ang * i)) + diagramY;

    //Linien - dick und dünn
    if(i % 12 ===0) {
      strokeWeight(0.5);
      stroke('blue')
    }else {
      strokeWeight(0.1);
      stroke('black')
    }
    line(cirx, circ, pointx, pointy)

    //Hover
    //Punkte stylen
    let datasize;
    let dis = dist(mouseX, mouseY, pointx, pointy);
    if(dis<5) {
      fill('red')
      datasize = 10;
      noStroke();
      circle(pointx, pointy, datasize);

      //Information in der Mitte des Graphen
      textAlign(CENTER)
      textSize(12);
      fill('black')
      text(date[i], diagramX, diagramY)
      fill('blue')
      rect(diagramX, diagramY + 15, 30, 5)
      textSize(25);
      text(gsml[i], diagramX, diagramY + 45);

    }else{
      fill('blue')
      datasize = 3;
      noStroke();
      circle(pointx, pointy, datasize);
    }
  }
}
//Text
function chartInfo() {
  textSize(16);
  textAlign(LEFT);
  fill('black')
  text("Diese Daten enthalten kumulative Veränderungen des Meeresspiegels für die Weltmeere seit 1880, basierend auf einer Kombination aus langfristigen Pegelmessungen und aktuellen Satellitenmessungen. Sie zeigen die durchschnittliche absolute Veränderung des Meeresspiegels, die sich auf die Höhe der Meeresoberfläche bezieht, unabhängig davon, ob das Land in der Nähe steigt oder fällt. Die Satellitendaten basieren ausschließlich auf dem gemessenen Meeresspiegel, während die langfristigen Pegeldaten einen kleinen Korrekturfaktor enthalten, da sich Größe und Form der Ozeane im Laufe der Zeit langsam verändern. Im Durchschnitt sinkt der Meeresboden seit dem letzten Höhepunkt der Eiszeit vor 20.000 Jahren allmählich.", width / 4, height / 4, width / 4)
  textSize(25);
  text("Globaler Durchschnitt der Höhe des Meeresspiegels, 1880 - 2015", width / 4, height / 4 - 120, width / 4);
}

//Reihenfolge
let dataMin, dataMax=0;
function minMax() {
  for(let i = 0; i < numRows; i++) {
    if(table.getNum(i,1) > dataMax) {
      dataMax = table.getNum(i,1);
    }
  }
  dataMin = dataMax;
  for(let i=0; i<numRows; i++) {
    if(table.getNum(i,1) < dataMin) {
      dataMin
    }
  }
  //print("max value "+ dataMax +" min value" +dataMin)      Zeigt höchstes und niedrister Sealevels in der Konsole an
}