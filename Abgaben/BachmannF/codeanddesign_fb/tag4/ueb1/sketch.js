let history = new Array(); //hier schreiben wir die history rein
function preload() {
    let url = "BrowserHistory.json";
    loadJSON(url, loaded);

}

function loaded(data) {
    history = data.BrowserHistory;

}

function draw() {


  if (history[n].page_transition == "TYPED") {
      textSize(32);
      fill(0, 0, 255)
  } else {
      textSize(12);
      fill(0);
  }
  // text(history[n].title, 0, (n * 32) % height);
  text(history[n].title, mouseX, mouseY);
  n++;

}