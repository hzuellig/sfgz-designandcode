function setup() {
  createCanvas(1080, 700);
}

function setup() {
  createCanvas(1650, 700, WEBGL);
  detailY = createSlider(3, 16, 3);
  detailY.position(10, height + 5);
  detailY.style('width', '80px');
  describe(
    'a c1c1c1 sphere with low detail on the y-axis, including a slider to adjust detailY'
  );
}

function draw() {
  background(205, 105, 94);
  rotateY(millis() / 1000);
  sphere(300, 10, detailY.value());
}