'use strict';

var sketch = function(p) {
    var agents = [];
    var agentCount = 50000;
    var noiseScale = 2000;
    var noiseStrength = 100;
    var overlayAlpha = 10;
    var agentAlpha = 10;
    var strokeWidth = 4;
    var drawMode = 100;

    p.setup = function() {
        p.createCanvas(p.windowWidth, p.windowHeight);

        for (var i = 0; i < agentCount; i++) {
            agents[i] = new Agent();
        }
    };

    function preload() {
        let url = "2018_MARCH_json";
        loadJSON(url, loaded);

    }
    p.draw = function() {
        p.fill(0, 0, 255, overlayAlpha);
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
    };
};

var myp5 = new p5(sketch);