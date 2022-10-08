'use strict';

var sketch = function(p) {
    var agents = [];
    var agentCount = 4000;
    var noiseScale = 300;
    var noiseStrength = 5;
    var overlayAlpha = 10;
    var agentAlpha = 100;
    var strokeWidth = 1;
    var drawMode = 20;
    var n = 0;
    var Records;

    p.setup = function() {
        p.createCanvas(p.windowWidth, p.windowHeight);

        for (var i = 0; i < agentCount; i++) {
            agents[i] = new Agent();
        }
    };

    p.preload = function() {
        let url = "2018_MARCH.json";
        p.loadJSON(url, loaded);

    }

    function loaded(data) {
        //console.log(data)
        //console.log(data.timelineObjects)
        Records = data.timelineObjects;
        let conf = Records[n].placeVisit.location.locationConfidence;
        //console.log(p.map(conf, 0.2, 100, 0.3, 5));
        strokeWidth = p.map(conf, 0.01, 100, 0.3, 12);
        //console.log(Records[n].placeVisit.location.locationConfidence)
    }

    p.draw = function() {
        p.fill(255, 255, 255, overlayAlpha);
        p.noStroke();
        p.rect(0, 0, p.width, p.height);

        p.stroke(0, agentAlpha);
        for (var i = 0; i < agentCount; i++) {
            if (drawMode == 1) agents[i].update1(noiseScale, noiseStrength, strokeWidth);
            else agents[i].update2(noiseScale, noiseStrength, strokeWidth);
        }
    };

    p.keyReleased = function() {
        if (p.key == 's' || p.key == 'S') p.saveCanvas(gd.timestamp(), 'png');
        if (p.key == '1') drawMode = 1;
        if (p.key == '2') drawMode = 1;
        if (p.key == ' ') {
            var newNoiseSeed = p.floor(p.random(10000));
            p.noiseSeed(newNoiseSeed);
        }
        if (p.keyCode == p.DELETE || p.keyCode == p.BACKSPACE) p.background(255);

        n++;
        let conf = Records[n].placeVisit.location.locationConfidence;
        strokeWidth = p.map(conf, 0.01, 100, 0.3, 12);
        console.log(strokeWidth)

    };
};

var myp5 = new p5(sketch);