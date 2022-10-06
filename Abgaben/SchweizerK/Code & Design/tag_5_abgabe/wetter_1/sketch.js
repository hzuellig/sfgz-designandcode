var weather;
var api = 'https://api.openweathermap.org/data/2.5/weather?q=';
var apiLanguage = '&lang=de';
var apiKey = '&appid=1d7c05e07fcde9cdd7e109fdc490afbc';
var units = '&units=metric';
var input;



function setup() {
    createCanvas(windowWidth, windowHeight);
    var button = select('#submit');
    button.mousePressed(weatherAsk);
    input = select('#city');

    noStroke();
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
        frameRate(weather.wind.speed);

        let tempA = map(weather.main.temp, 5, 35, 0, 255);
        background(tempA, 0, tempA, weather.main.humidity);


        for (var i = 0; i < weather.clouds.all / 4; i++) {
            fill(255, 255, tempA, weather.main.humidity);
            ellipse(random(width), random(height), weather.clouds.all * 2, weather.clouds.all * 2);
        }

        ////////////

        textSize(15);
        fill(tempA, 255, 200);

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