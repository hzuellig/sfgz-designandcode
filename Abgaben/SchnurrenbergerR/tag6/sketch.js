let img;
let palette;
let y = 0;

function preload() {
  img = loadImage('images/wind.jpg');
}

function setup() {
  cnv = createCanvas(img.width, img.height);
    let newCanvasX = (windowWidth - img.width)/2;
    let newCanvasY = (windowHeight - img.height)/2;
    cnv.position(newCanvasX, newCanvasY);
  img.resize(width, height);

  // Genuary 23 palette
  palette = [
    '#31393C', '#2176FF',
    '#FCD757', '#FDCA40',
    '#F79824'
  ];

  image(img, 0, 0);
}

function draw() {
  for (let x = 0; x < width; x++) {
    const imgColor = img.get(x, y);
    const paletteColor = getPaletteColor(imgColor);
    stroke(paletteColor);
    point(x, y);
  }

  y++;
  if (y >= height) {
    noLoop();
  }
}

function getPaletteColor(imgColor) {
  const imgR = red(imgColor);
  const imgG = green(imgColor);
  const imgB = blue(imgColor);

  let minDistance = 999999;
  let targetColor;

  for (const c of palette) {
    const paletteR = red(c);
    const paletteG = green(c);
    const paletteB = blue(c);

    const colorDistance =
      dist(imgR, imgG, imgB,
           paletteR, paletteG, paletteB);

    if (colorDistance < minDistance) {
      targetColor = c;
      minDistance = colorDistance;
    }
  }

  return targetColor;
}