let daten = null

function preload() {

    let url = 'BrowserHistory.json'; //achtung, eventuell pfad anpassen!
    loadJSON(url, loaded); //die funktion loaded wird aufgerufen, wenn das file fertig geladen ist (callback funktion)
}

function loaded(data) {
    const finaleDaten = [];
    const historyUrls = data['Browser History']; // Json das geladen ist umbennen zu historyUrls, verschachtelung umgehen
    const blackList = [
      'u.link.ch',
      'untamed.love',
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
    daten=finaleDaten; // Daten aus loaded auch sonst verfügbar


}

function setup() {
    createCanvas(window.innerWidth, window.innerHeight);
    background(255);
    //noLoop();
  
}

let x = 50
let y = 0
// das abstände stimmen


function draw() {
    daten.forEach((domain) => {  // Wiederhole das Stück unten so oft bis es keine Daten mehr gibt. 
        let fontsize=(500*(domain.prozent/100)) 
        textSize(fontsize)
        y+=fontsize
        text(domain.url, x, y)   
    })
    /* //Das gleiche wie oben nur in kompliziert und alt
      for (let index=0; index<daten.length; index++) { // 
        let domain=daten[index] // verkürzen das Daten aus dem Objekt geholt werden
        let fontsize=(2500*(domain.prozent/100)) 
        textSize(fontsize)
        y+=fontsize
        text(domain.url, x, y)
       
    
      }
      */
    }
    


function keyReleased() {
    if (key == 's' || key == 'S') {
        let d = new Date();
        let now = d.getFullYear() + "" + (d.getMonth() + 1) + "" + d.getDate() + "" + (d.getHours() + 1) + "-" + (d.getMinutes() + 1) + "" + (d.getSeconds() + 1) + "-" + frameCount;
        saveCanvas(now, 'png');
    }
}







