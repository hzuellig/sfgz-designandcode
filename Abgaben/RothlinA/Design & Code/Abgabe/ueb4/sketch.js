var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
let datenByWeekday = {};
let entries = [...Array(days.length).keys()].forEach(weekday => datenByWeekday[weekday] = []); // 0 => [], 1 => [], etc. bis 6 => []
let init = true;

function preload() {
    fontRegular = loadFont('FranklinGothicStdExtraCondensed.otf');
    fontPixel = loadFont('FranklinGothicStdExtraCondensed.otf');

    let url = 'BrowserHistory.json'; // achtung, eventuell pfad anpassen!
    loadJSON(url, loaded); // die funktion loaded wird aufgerufen, wenn das file fertig geladen ist (callback funktion)
}

const regex = /^http(s{0,}:\/\/)|www.|\/.*$/g; // CoAutor Sandro Duchessi Zeile 14 - 57

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
                datenByWeekday[weekdayOfEntry].push({
                    url: domain,
                    anzahl: 1
                }); // wenn noch nicht in Finale daten einfügen
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
    textSize(385);
    fill(farbH2, farbS, farbB);
    textLeading(300);
    textAlign(CENTER, BASELINE);
    text(('google\n' + days[currentWeekDay]).toUpperCase(), windowWidth / 2, windowHeight / 2.25);
}

function click() {
    textFont(fontPixel);
    textSize(35);
    fill(farbH2, farbS, farbB);
    textLeading(60);
    textAlign(screenLeft);
    text(('Click to sleep one night'), 40, 760);
}

function refresh() {
    textFont(fontPixel);
    textSize(35);
    fill(farbH2, farbS, farbB);
    textLeading(60);
    textAlign(screenLeft);
    text(('Refresh for more fancy colors'), 550, 50);
}

function faster() {
    textFont(fontPixel);
    textSize(35);
    fill(farbH2, farbS, farbB);
    textLeading(60);
    textAlign(screenLeft);
    text(('faster!'), 1300, 760);
}



function Concept() {
    textFont(fontPixel);
    textSize(80);
    fill(0, 0, 100);
    textLeading(80);
    textAlign(screenLeft, CENTER);
    text(('Personal browser history,\ndownloaded as JSON,\nsorted by days of the week.\nFrom Monday to Sunday all\nvisited websites are displayed.\nThe mouse can be used to\ncontrol different aspects of the display.'), 20, 340);
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
    click();
    refresh();
    faster();
    Concept();
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
if(init){
    init=false;
}
else {
    currentWeekDay = (currentWeekDay + 1) % 7; // modulo: Rest nach Teilen
    // 0 % 7 == 0
    // 7 % 7 == 0 
}
    

    drawGoogle();
    click();
    refresh();
    faster();
}

// In Zusammenarbeit mit Flavia Bachmann, Sevi Kistler und Sandro Duchessi