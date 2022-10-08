var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
let datenByWeekday = {};
let entries = [...Array(days.length).keys()].forEach(weekday => datenByWeekday[weekday] = []);// 0 => [], 1 => [], etc. bis 6 => []


function preload() {
    fontRegular = loadFont('Palestra-Regular.otf');
    fontPixel = loadFont('FranklinGothicStdExtraCondensed.otf');

    let url = 'BrowserHistory.json'; // achtung, eventuell pfad anpassen!
    loadJSON(url, loaded); // die funktion loaded wird aufgerufen, wenn das file fertig geladen ist (callback funktion)
}

const regex = /^http(s{0,}:\/\/)|www.|\/.*$/g;

function loaded(data) {
    const blackList = [
        'google.com'
    ];

    data['Browser History']
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

function drawGoogle() {
    background(farbH1, farbS, farbB)
    textFont(fontRegular);
    textSize(250);
    fill(farbH2, farbS, farbB);
    textLeading(425);
    textAlign(CENTER, BASELINE);
    text(('google\n' + days[currentWeekDay]).toUpperCase(), windowWidth / 2.1, windowHeight / 3);
}

function setup() {
    createCanvas(windowWidth, windowHeight); //mit den JavaScript Variablen könnt ihr die aktuelle Groesse des Fensters abfragen. 
    colorMode(HSB);

    farbH1 = random(0, 360);
    farbH2 = random(0, 360);
    farbS = random(80, 100);
    farbB = random(80, 100);

    frameRate(5);

    drawGoogle();

}

let currentWeekDay = 1;

function draw() {

    let x = map(mouseX, length, width, 0, 1)
    let y = map(mouseY, length, width, 0, 1)


    const daten = datenByWeekday[currentWeekDay];
    for (let index = 0; index < daten.length; index++) {
        let randomX = Math.floor(Math.random() * windowWidth);
        let randomY = Math.floor(Math.random() * windowHeight);
        let domain = daten[index];
        let fontsize = Math.sqrt(domain.prozent) * 50;
        console.log(fontsize);
        textFont(fontPixel);
        textSize(fontsize * x);
        fill(farbH1, farbS, farbB, y);
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

    drawGoogle();
}






