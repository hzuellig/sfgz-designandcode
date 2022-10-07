var weather;
var api = 'https://api.openweathermap.org/data/2.5/weather?q=';
var apiLanguage = '&lang=de';
var apiKey = '&appid=1d7c05e07fcde9cdd7e109fdc490afbc';
var units = '&units=metric';
var input;

var yoff = 0.0;



function setup() {
    createCanvas(windowWidth, windowHeight);
    var button = select('#submit');
    button.mousePressed(weatherAsk);
    input = select('#city');

}

function weatherAsk() {

    var url = api + input.value() + apiLanguage + apiKey + units;
    loadJSON(url, gotData);

}

function gotData(data) {
    weather = data;

}


function draw() {

    if (weather) {

        background(120, 130, 130, 1);

        fill(color(50, 30, 200, 1));
        beginShape();

        var xoff = 0;

        for (var x = 0; x <= width; x += 5) {

            var y = map(noise(xoff, yoff), 0, 1, 100, 300);
            //var y = map(noise(xoff), 0, 1, 200,300);

            vertex(x, y);
            xoff += 0.02;
        }
        yoff += 0.0085;
        vertex(width, height);
        vertex(0, height);
        endShape(CLOSE);

        ////////////

        textSize(15);
        //fill(0, 18);
        text("Stadt: " + weather.name, 10, 50);
        text("Temperatur: " + weather.main.temp + '°', 10, 70);
        //text("Wetter: " + weather[0].description, 10, 90);
        text("Feuchtigkeit: " + weather.main.humidity, 10, 110);
        text("Wind: " + weather.wind.speed, 10, 130);
        text("Wolken: " + weather.clouds.all, 10, 150);


    }
}


function keyReleased() {

    // ScreenShot
    //if (key == 's' || key == 'S') {
    //let d = new Date();
    //let now = d.getFullYear() + "" + (d.getMonth() + 1) + "" + d.getDate() + "" + (d.getHours() + 1) + "-" + (d.getMinutes() + 1) + "" + (d.getSeconds() + 1) + "-" + frameCount + ".png";
    //saveCanvas(now, 'png');
    //}

}