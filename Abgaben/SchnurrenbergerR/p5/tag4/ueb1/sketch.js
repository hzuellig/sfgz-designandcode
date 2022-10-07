let history = new Array(); //hier schreiben wir die history rein
let n = 0;
let p = 1;

function preload() {
    let url = "BrowserHistory.json";
    loadJSON(url, loaded);

}

function loaded(data) {
    history = data.BrowserHistory;

}

function setup() {
    createCanvas(window.innerWidth, window.innerHeight);
    frameRate(1);
}

function draw() {
    background(255,10)

    if(p=='Link'){
        text(history[n].page_transition);
    }
    
    else{
    
        text(history[p].title, 20, 20*n);
}
    
    n++;
}