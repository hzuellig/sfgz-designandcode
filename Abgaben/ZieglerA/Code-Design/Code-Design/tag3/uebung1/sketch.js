/*let name;
name = "Alexandra"*/

//let name="Lex";
// text(name, mouseX, mouseY); //in die Funktion draw einfügen

let fontRegular;
let lg_hfiad21 = new Array(); //deklarierung
lg_hfiad21[0] = "Flavia";
lg_hfiad21[1] = "Liza";
lg_hfiad21[2] = "Mirjam";
lg_hfiad21[3] = "Sario";
lg_hfiad21[4] = "Cédric";
lg_hfiad21[5] = "Natascha";
lg_hfiad21[6] = "Noah";
lg_hfiad21[7] = "Alexandra";
lg_hfiad21[8] = "Robin";
lg_hfiad21[9] = "Katrin";
lg_hfiad21[10] = "Juri";
lg_hfiad21[11] = "Melissa";
lg_hfiad21[12] = "Alexandra";

function setup() {
    createCanvas(windowWidth, windowHeight);
    noLoop();
    //frameRate(1);



}

function draw() {
    textSize(44)
    for (let n = 0; n < lg_hfiad21.length; n++) {
        //console.log(lg_hfiad21[n])

        /* text(lg_hfiad21[n], n * 50, n * 50)*/
        text(lg_hfiad21[n], n * 50, n * 50)

    }

    /*for (let i = 5; i < windowWidth; i += 50) {
        line(i, 20, i, 180);
    }*/

}

function mouseClicked(event) {

}