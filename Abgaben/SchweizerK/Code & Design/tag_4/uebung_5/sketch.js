function setup() {
    createCanvas(windowWidth, windowHeight);

    //Slider Ellipse RGB & Transparency

    sliderR = createSlider(0, 255, 10);
    sliderG = createSlider(0, 255, 100);
    sliderB = createSlider(0, 255, 80);
    sliderTransE = createSlider(0, 100, 80);

    sliderR.position(90, 40);
    sliderR.style('width', '100px');
    sliderG.position(90, 60);
    sliderG.style('width', '100px');
    sliderB.position(90, 80);
    sliderB.style('width', '100px');
    sliderTransE.position(90, 100);
    sliderTransE.style('width', '100px');

    //Slider Ellipse Position & Form
    sliderX = createSlider(0, 1000, 500);
    sliderY = createSlider(0, 1000, 500);

    sliderX.position(90, 160);
    sliderX.style('width', '100px');
    sliderY.position(90, 180);
    sliderY.style('width', '100px');

    sliderWidth = createSlider(0, 1000, 500);
    sliderHeight = createSlider(0, 1000, 500);

    sliderWidth.position(90, 200);
    sliderWidth.style('width', '100px');
    sliderHeight.position(90, 220);
    sliderHeight.style('width', '100px');

    //Slider Background RGB & Transparency
    sliderRbg = createSlider(0, 255, 200);
    sliderGbg = createSlider(0, 255, 100);
    sliderBbg = createSlider(0, 255, 80);
    sliderTransbg = createSlider(0, 100, 10);

    sliderRbg.position(220, 40);
    sliderRbg.style('width', '100px');
    sliderGbg.position(220, 60);
    sliderGbg.style('width', '100px');
    sliderBbg.position(220, 80);
    sliderBbg.style('width', '100px');

    sliderTransbg.position(220, 100);
    sliderTransbg.style('width', '100px');

    //Slider Stroke
    sliderRst = createSlider(0, 255, 70);
    sliderGst = createSlider(0, 255, 0);
    sliderBst = createSlider(0, 255, 10);
    sliderTransst = createSlider(0, 100, 20);
    sliderStroke = createSlider(0, 1000, 100);

    sliderRst.position(360, 40);
    sliderRst.style('width', '100px');
    sliderGst.position(360, 60);
    sliderGst.style('width', '100px');
    sliderBst.position(360, 80);
    sliderBst.style('width', '100px');

    sliderTransst.position(360, 100);
    sliderTransst.style('width', '100px');

    sliderStroke.position(360, 120);
    sliderStroke.style('width', '100px');

}

function draw() {
    background(sliderRbg.value(), sliderGbg.value(), sliderBbg.value(), sliderTransbg.value());
    //noStroke();
    stroke(sliderRst.value(), sliderGst.value(), sliderBst.value(), sliderTransst.value());
    strokeWeight(sliderStroke.value());

    fill(sliderR.value(), sliderG.value(), sliderB.value(), sliderTransE.value());
    ellipse(sliderX.value(), sliderY.value(), sliderWidth.value(), sliderHeight.value())
    ellipse(sliderY.value(), sliderX.value(), sliderHeight.value(), sliderWidth.value())

    noStroke();
    fill(0);
    textSize(14);
    text('Ellipse', 90, 30);
    text('Background', 220, 30);
    text('Stroke', 360, 30);

    textSize(10);

    text('Red', 20, 50);
    text('Green', 20, 70);
    text('Blue', 20, 90);
    text('Transparency', 20, 110);
    text('Stroke', 20, 130);


    text('Position 1', 20, 170);
    text('Position 2', 20, 190);

    text('Width', 20, 210);
    text('Height', 20, 230);
}

function keyReleased() {
    if (key == 's' || key == 'S') {
        let d = new Date();
        let now = d.getFullYear() + "" + (d.getMonth() + 1) + "" + d.getDate() + "" + (d.getHours() + 1) + "-" + (d.getMinutes() + 1) + "" + (d.getSeconds() + 1) + "-" + frameCount;
        saveCanvas(now, 'png');
    }
}