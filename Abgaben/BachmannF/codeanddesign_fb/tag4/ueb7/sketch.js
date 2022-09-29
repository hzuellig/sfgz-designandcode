let daten = null

function preload() {
  fontRegular = loadFont('../../libraries/Firm-Regular.ttf');

  let url = 'BrowserHistory.json'; //achtung, eventuell pfad anpassen!
  loadJSON(url, loaded); //die funktion loaded wird aufgerufen, wenn das file fertig geladen ist (callback funktion)
}

function loaded(data) {
  const finaleDaten = [];
  const historyUrls = data['BrowserHistory']; // Json das geladen ist umbennen zu historyUrls, verschachtelung umgehen
  const blackList = [
    //'google.com',
  ];


  historyUrls.forEach((entry) => {
    const domain = entry.url.replace(/^http(s{0,}:\/\/)|www.|\/.*$/g, ''); // das www. http. etc. verschwindet
    if (!blackList.includes(domain)) {
      const foundDomain = finaleDaten.find((obj) => obj.url === domain); // ob die URL schon drin ist
      if (!foundDomain) {
        finaleDaten.push({ url: domain, anzahl: 1 }); // wenn noch nicht in Finale daten einfügen
      } else {
        foundDomain.anzahl += 1; // wenn doch Anzahl +1
      }
    }
  });

  let totalAufrufe = 0;
  finaleDaten.forEach((domain) => {
    totalAufrufe += domain.anzahl;
  }); // Alle aufrufe jemals geschehen zusammenzählen

  finaleDaten.forEach((domain) => {
    domain.prozent = (domain.anzahl / totalAufrufe) * 100;
  }); // Anzahl in % umrechnen

  finaleDaten.sort((a, b) => a.anzahl - b.anzahl).reverse(); // sortieren meiste aufrufe oben tiefste unten
  daten = finaleDaten; // Daten aus loaded auch sonst verfügbar


}

function setup() {
  createCanvas(windowWidth, windowHeight); //mit den JavaScript Variablen könnt ihr die aktuelle Groesse des Fensters abfragen. 
  // randomSeed(8) -- Erklärt sie uns noch
  //noLoop();

  farb = random(250);
  farb1 = random(255);
  farb2 = random(255);

  background(farb, farb1, farb2)
  frameRate(1);

}

let x = 80
let y = 0
// das abstände stimmen


function draw() {
  let c = map(mouseX, 0, width, 0, 250);
  let c2 = map(mouseX, 0, width, 255, 0);
  let c3 = map(mouseY, 0, width, 100, 0);
  let c4 = map(mouseY, 0, width, 0, 360)
  fill(farb1, farb2, farb2,1)
  textSize(100)


  for (let index = 0; index < daten.length; index++) {
    let randomX = Math.floor(Math.random() * window.innerWidth);
    let randomY = Math.floor(Math.random() * window.innerHeight);
    let domain = daten[index] // verkürzen das Daten aus dem Objekt geholt werden
    let fontsize = (2500 * (domain.prozent / 50))
    textSize(fontsize)
    y += fontsize
    textFont(fontRegular);
    text(domain.url, randomX, randomY)
    fill(farb1, farb2, farb2, 50)
  }

}


function keyReleased() {
  if (key == 's' || key == 'S') {
    let d = new Date();
    let now = d.getFullYear() + "" + (d.getMonth() + 1) + "" + d.getDate() + "" + (d.getHours() + 1) + "-" + (d.getMinutes() + 1) + "" + (d.getSeconds() + 1) + "-" + frameCount;
    saveCanvas(now, 'png');
  }
}