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
    console.log(weather.weather[0].description);
}


function draw() {

    if (weather) {

        frameRate(weather.wind.speed * 10);

        let tempA = map(weather.main.temp, 0, 24, 0, 255);
        background(120, 130, tempA, 1);

        fill(color(50, 30, 200, 1));
        beginShape();

        var xoff = 0;

        for (var x = 0; x <= width; x += 5) {

            var y = (noise(xoff, yoff) * weather.wind.speed * 100);

            vertex(x, y);
            xoff += weather.wind.speed / 500;
        }


        //yoff += weather.main.humidity / 10000;
        yoff += weather.wind.speed / 1500;
        //yoff += 0.01;
        vertex(width, height);
        vertex(0, height);
        endShape(CLOSE);

        ////////////

        textSize(35);
        fill(255, 255, 255);
        text(weather.name, 10, 650);

        textSize(18);

        text("Temperatur: " + weather.main.temp + '°', 300, 650);
        text("Wetter: " + weather.weather[0].description, 300, 670);
        text("Feuchtigkeit: " + weather.main.humidity, 600, 650);
        text("Wind: " + weather.wind.speed, 600, 670);
        text("Wolken: " + weather.clouds.all, 600, 690);


    }
}


function keyReleased() {

    // ScreenShot
    if (key == '1' || key == '+') {
        let d = new Date();
        let now = d.getFullYear() + "" + (d.getMonth() + 1) + "" + d.getDate() + "" + (d.getHours() + 1) + "-" + (d.getMinutes() + 1) + "" + (d.getSeconds() + 1) + "-" + frameCount + ".png";
        saveCanvas(now, 'png');
    }


    // Reset Background
    if (keyCode == DELETE || keyCode == BACKSPACE) background(255);




}