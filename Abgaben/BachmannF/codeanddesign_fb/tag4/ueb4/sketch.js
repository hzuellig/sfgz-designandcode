let daten = null
let n = 0

function preload() {
  fontRegular = loadFont('Firm-Black.otf'); // Font hineinladen
  let url = 'BrowserHistory.json'; //achtung, eventuell pfad anpassen!
  loadJSON(url, loaded); //die funktion loaded wird aufgerufen, wenn das file fertig geladen ist (callback funktion)
}

function loaded(data) {
  const finaleDaten = [];
  const historyUrls = data['Browser History']; // Json das geladen ist umbennen zu historyUrls, verschachtelung umgehen
  const blackList = [
    'u.link.ch',
    //'google.com',
  ];


  historyUrls.forEach((entry) => {
    const domain = entry.url.replace(/^http(s{0,}:\/\/)|www.|\/.*$/g, ''); // das www. http. etc. verschwindet
    if (!blackList.includes(domain)) {
      const foundDomain = finaleDaten.find((obj) => obj.url === domain); // ob die URL schon drin ist
      if (!foundDomain) {
        finaleDaten.push({
          url: domain,
          anzahl: 1
        }); // wenn noch nicht in Finale daten einfügen
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
  createCanvas(window.innerWidth, window.innerHeight);
  //noLoop();
  farb=random(255);
  farb1=random(255);
  farb2=random(255);
  background(farb,farb1,farb2);
  frameRate(4);
}
let x = 0
let y = 0
// das abstände stimmen


function draw() {


  for (let index = 0; index < daten.length; index++) { 
    let randomX = Math.floor(Math.random() * window.innerWidth);
    let randomY = Math.floor(Math.random() * window.innerHeight);
    let domain = daten[index] // verkürzen das Daten aus dem Objekt geholt werden
    let fontsize = (1500 * (domain.prozent / 80))
    let c = map(mouseX, 0, width, 0, 255);
    let c2 = map(mouseX, 0, width, 255, 0);
    let c3 = map(mouseY, 0, width, 255, 0);
    textSize(fontsize)
    y += fontsize
    textFont(fontRegular);
    text(domain.url, randomX, randomY);
    fill(c,c2,c3);
  


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






