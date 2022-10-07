var xoff = 0;
var yoff = 0;


function setup() {
    createCanvas(windowWidth, windowHeight);
    //noStroke();

    //sliderX = createSlider(0, 1, 0.0001, 0.001);
    sliderSize = createSlider(0, 300, 50, 1);

    //sliderX.position(20, 40);
    //sliderX.style('width', '200px');
    sliderSize.position(20, 40);
    sliderSize.style('width', '200px');

}


function draw() {


    let mX = map(mouseX, length, width, 0, 255)
    let mY = map(mouseY, length, width, 0, 255)
    background(mY, 0, mX, 1);

    //// Ellipse White

    var x1 = map(noise(xoff), 0, 1, length, width);
    xoff += 0.001;

    var y1 = map(noise(yoff), 0, 1, length, width);
    yoff += 0.002;

    fill(255, 255, 255)
    ellipse(x1, y1, sliderSize.value(), sliderSize.value());
    ellipse(y1, x1, sliderSize.value(), sliderSize.value());

    //// Ellipse Yellow

    var x2 = map(noise(xoff), 0, 2, length, width);
    xoff += 0.001;

    var y2 = map(noise(yoff), 0, 2, length, width);
    yoff += 0.002;

    fill(255, 255, 100)
    ellipse(x2, y2, sliderSize.value(), sliderSize.value());
    ellipse(y2, x2, sliderSize.value(), sliderSize.value());


    //// Ellipse Pink

    var x3 = map(noise(xoff), 1, 0, length, width);
    xoff += 0.001;

    var y3 = map(noise(yoff), 1, 0, length, width);
    yoff += 0.002;

    fill(255, 100, 255)
    ellipse(x3, y3, sliderSize.value(), sliderSize.value());
    ellipse(y3, x3, sliderSize.value(), sliderSize.value());

    //// Ellipse Blue

    var x4 = map(noise(xoff), 2, 0, length, width);
    xoff += 0.001;

    var y4 = map(noise(yoff), 2, 0, length, width);
    yoff += 0.002;

    fill(100, 255, 255)
    ellipse(x4, y4, sliderSize.value(), sliderSize.value());
    ellipse(y4, x4, sliderSize.value(), sliderSize.value());




}


function keyReleased() {
    if (key == 's' || key == 'S') {
        let d = new Date();
        let now = d.getFullYear() + "" + (d.getMonth() + 1) + "" + d.getDate() + "" + (d.getHours() + 1) + "-" + (d.getMinutes() + 1) + "" + (d.getSeconds() + 1) + "-" + frameCount;
        saveCanvas(now, 'png');
    }
}
















function keyReleased() {
  if (key == 'S' || key == 'S') {
      let d = new Date();
      let now = d.getFullYear() + "" + (d.getMonth() + 1) + "" + d.getDate() + "" + (d.getHours() + 1) + "-" + (d.getMinutes() + 1) + "" + (d.getSeconds() + 1) + "-" + frameCount;
      saveCanvas(now, 'png');
  }
}