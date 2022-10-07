let colorBack = [100,20,];
function makeSketch(id, hue) {

    let params = {

       
        quadrate: 60,
        quadrateMin: 1,
        quadrateMax: 2000,

       
        angle: 300 * (Math.sqrt(5) - 1) / 2,
        angleMax: 360,
        angleStep: 0.1,

       
        radius: 55,
        radiusMin: 0.5,
        radiusMax: 90,
        radiusStep: 0.1,

        qColor: '#7d5ba6',
        strokeWeight:'#7d5ba6',

        
        zoom: 5,
        zoomMax: 50,
        zoomStep: 0.1,

        opacity: 21,
        opacityMax: 255,

        bgColor: [hue, 10, 255]

    };

    
    let sketch = function(p) {

       
        let gui;

        
        let div;

        p.setup = function() {

            
            p.colorMode(p.HSB, 100, 255, 255, 255);

           
            p.angleMode(p.DEGREES);

        
            div = p.canvas.parentElement;
            p.createCanvas(div.clientWidth, div.clientHeight);

            
            gui = p.createGui(this);
            gui.addObject(params);

            
            p.noLoop();

        }

        p.draw = function() {

            
            p.background(params.bgColor);

            
            let c = p.color(params.qColor);
            p.fill(p.hue(c), p.saturation(c), p.brightness(c), params.opacity);
            p.stroke(0, params.opacity);

            
            let r = params.radius * params.zoom;

            p.push();

            
            p.translate(p.width / 2, p.height / 2);

            
            for (let i = 0; i < params.quadrate; i++) {
                p.push();
                p.rotate(i * params.angle);
                
                let d = p.sqrt(i + 0.5) * params.zoom;
                p.strokeWeight(r);
                p.triangle(d, 255, r, r);
                p.pop();
            }

            p.pop();
        }

        
        p.windowResized = function() {
            
            p.resizeCanvas(div.clientWidth, div.clientHeight);
        }


    }

    return new p5(sketch, id);

}


let sketch1 = makeSketch('sketch1', 5);

