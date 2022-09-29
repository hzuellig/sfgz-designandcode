var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
let datenByWeekday = {};
let entries = [...Array(days.length).keys()].forEach(weekday => datenByWeekday[weekday] = []);// 0 => [], 1 => [], etc. bis 6 => []

function preload() {
    fontRegular = loadFont('../../libraries/Krisha-Regular.otf');

    let url = 'BrowserHistory.json'; // achtung, eventuell pfad anpassen!
    loadJSON(url, loaded); // die funktion loaded wird aufgerufen, wenn das file fertig geladen ist (callback funktion)
}

const regex = /^http(s{0,}:\/\/)|www.|\/.*$/g;

function loaded(data) {
    const blackList = [
        'google.com'
    ];

    data['BrowserHistory']
        .filter(url => !blackList.includes(url)) // alle in blacklist herausfiltern
        .forEach((entry) => {
            const domain = entry.url.replace(regex, ''); // das www. http. etc. verschwindet
            const weekdayOfEntry = new Date(entry['time_usec'] / 1000).getDay();
            const foundDomain = datenByWeekday[weekdayOfEntry].find((obj) => obj.url === domain); // ob die URL schon drin ist
            if (foundDomain == undefined) {
                datenByWeekday[weekdayOfEntry].push({ url: domain, anzahl: 1 }); // wenn noch nicht in Finale daten einfügen
            } else {
                foundDomain.anzahl += 1; // wenn doch Anzahl +1
            }
        });

    let totalAufrufe = 0;
    Object.values(datenByWeekday)
        .forEach(domains =>
            domains.forEach((domain) => {
                totalAufrufe += domain.anzahl;
            })
        ); // Alle aufrufe jemals geschehen zusammenzählen

    Object.values(datenByWeekday)
        .forEach(domains =>
            domains.forEach((domain) => {
                domain.prozent = (domain.anzahl / totalAufrufe) * 100; // Anzahl in % umrechnen
            })
        );

    Object.values(datenByWeekday)
        .forEach(domains =>
            domains.sort((a, b) => b.anzahl - a.anzahl) // sortieren meiste aufrufe oben tiefste unten); // Anzahl in % umrechnen
        );
        console.log(datenByWeekday)
}

function setup() {
    createCanvas(windowWidth, windowHeight); //mit den JavaScript Variablen könnt ihr die aktuelle Groesse des Fensters abfragen. 
    // randomSeed(8) -- Erklärt sie uns noch
    //noLoop();

    farb1 = random(255);
    farb2 = random(255);
    farb3 = random(255);

    background(farb1, farb2, farb3)
    frameRate(1);

    textFont(fontRegular);
    textSize(650);
    fill(0, 0, 0);
    textLeading(420);
    text(('google\n' + days[currentWeekDay]).toUpperCase(), 50, windowHeight * .5);
}

let currentWeekDay = 1;

function draw() {
    const daten = datenByWeekday[currentWeekDay];
    for (let index = 0; index < daten.length; index++) {
      let randomX = Math.floor(Math.random() * windowWidth);
      let randomY = Math.floor(Math.random() * windowHeight);
      let domain = daten[index];
      let fontsize = Math.sqrt(domain.prozent) * 50;
      console.log(fontsize);
      textSize(fontsize);
      fill(farb1, farb2, farb3, 70);
      text(domain.url, randomX, randomY);
    }
}

function keyReleased() {
    if (key == 's' || key == 'S') {
        let now = new Date().toISOString();
        saveCanvas(now, 'png');
    }
}

function mouseReleased() {
    currentWeekDay = (currentWeekDay + 1) % 7; // modulo: Rest nach Teilen
    // 0 % 7 == 0
    // 7 % 7 == 0 
    background(farb1, farb2, farb3);
    textSize(450);
    fill(0, 0, 0);
    textLeading(500 * 1);
    text(('google\n' + days[currentWeekDay]).toUpperCase(), 100, windowHeight * 0.35);
}