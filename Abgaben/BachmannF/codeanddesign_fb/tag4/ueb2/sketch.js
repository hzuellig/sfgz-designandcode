let daten = null
let n = 0;
let farb;
  let farb1;
  let farb2;

function preload() {
  fontRegular = loadFont('../../libraries/PressStart2P-Regular.ttf');

  let url = 'BrowserHistory.json'; //achtung, eventuell pfad anpassen!
  loadJSON(url, loaded); //die funktion loaded wird aufgerufen, wenn das file fertig geladen ist (callback funktion)
}

function loaded(data) {
  const finaleDaten = [];
  const historyUrls = data['BrowserHistory']; // Json das geladen ist umbennen zu historyUrls, verschachtelung umgehen
  const blackList = [
    'google.com',
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
  farb=random(255);
  farb1=random(255);
  farb2=random(255);
  background(farb,farb1,farb2)
  noLoop();

}

let x = 80
let y = 20
// das abstände stimmen


function draw() {


  for (let index = 0; index < daten.length; index++) { // 
    let domain = daten[index] // verkürzen das Daten aus dem Objekt geholt werden
    let fontsize = (1000 * (domain.prozent / 80))
    textSize(fontsize)
    y += fontsize
    textFont(fontRegular);
    text(domain.url, x, y)


    /*let eintrag = daten[n].url
    let position = eintrag.indexOf("a")

    if (position > -1) {
      fill("blue")
    } else {
      fill(200, 2, 20)
    }*/

  }

}



function keyReleased() {
  if (key == 's' || key == 'S') {
    let d = new Date();
    let now = d.getFullYear() + "" + (d.getMonth() + 1) + "" + d.getDate() + "" + (d.getHours() + 1) + "-" + (d.getMinutes() + 1) + "" + (d.getSeconds() + 1) + "-" + frameCount;
    saveCanvas(now, 'png');
  }
}