# Intro Einbettung, Koordinaten, Formen, Farben



## Einbettung Library
Erstelle ein neues lokales directory für das Modul, nenne es codeanddesign.
Lade hier https://github.com/processing/p5.js/releases/download/v1.4.1/p5.zip das Example Projekt von p5.js herunter.
Entzippe das directory in deinem Übungsrepository.
Im Folder empty-example findest du ein leeres Beispiel, kopiere dieses in einen neuen Folder Tag1 und öffne dein ganzes Repo im Visual Studio Code. 
Aufbau:
Im head des HTML dokuments wird die Library eingebunden (p5.js)
```html
 <script src="../p5.js"></script>
 <script src="sketch.js"></script>
```
Im sketch.js findest du zwei leere Funktionsblöcke.
```js
function setup() {
  // put setup code here
}

function draw() {
  // put drawing code here
}
```
Funktion setup wird einmal aufgerufen – dann wenn das Programm startet. Dort hinein gehören generelle Angaben, wie die Grösse der Zeichnungsfläche. <br/>
Funktion draw wird standardmässig 60 Mal in der Sekunde aufgerufen. Dort kommen die Angaben, die sich verändern. Das Tempo kann über frameRate(1) verändert werden. So wird die Funktion draw bloss einmal in der Sekunde aufgerufen. <br/>
Ein Beispiel:
```js
function setup() {
    createCanvas(640, 640);
    background(255);
}

function draw() {
    ellipse(mouseX, mouseY, 10, 10);
}
```
Rufe das Beispiel mit dem Live Server Plugin im Visual Studio Code auf. Untersuche mit den Developer Tools den generierten HTML Code und vergleiche ihn mit dem im Editor. Was stellst du fest?

## Struktur
Kopiere die p5.min.js library nun in den Folder library/. 
```
codeanddesign/
    - library/
        - p5.min.js
    - tag1/
        – ueb1/
            - index.html
            - sketch.js
        – ueb2/
            - index.html
            - sketch.js
```
Ab jetzt kannst du sie in jedem index.html so einbinden:
```html
 <script src="../../library/p5.js"></script>
 <script src="sketch.js"></script>
```

***
## Koordinatensystem
Wie bei CSS ist auch bei p5.js der Nullpunkt des Koordinatensystems links oben.Die Massangaben sind in Pixel.
[[images/Koordinatensystem.jpg]]

***
## Farben und Formen
### Referenz
https://p5js.org/reference

Wir können geometrische Formen mit Code zeichnen, indem wir Funktionen wie `line()`, `ellipse()`, `triangle()`, `rect()`, `arc()` verwenden. Die Funktionen stellt euch p5js zur Verfügung. Jede braucht spezielle Angaben, sogenannte Argumente.
`line()` zum Beispiel benötigt, die x- und die y- Koordinate vom Anfangs- und vom Endpunkt. Das macht vier Argumente die der Funktion `line()` übergeben werden müssen und zwar in dieser Reihenfolge: x1,y1,x2,y2. 

Auf der Referenz Website von p5js findet ihr alle Befehle dokumentiert, die euch das Programm zur Verfügung stellt. 
[Befehl line()](https://p5js.org/reference/#/p5/line)  <br/>
Welches sind die Parameter? In welcher Reihenfolge?<br/>
Um eine Linie zwischen den Koordinaten (0, 0) und (320, 240) zu zeichnen, versucht folgendes:

`line(0, 0, 320, 240);`<br/>

Zeichnet euch das Koordinatensystem auf und überlegt, wo die Koordinaten der Linie liegen. 
[[images/skizze_koordinaten.gif]]<br/><br/>

### Uebung 
> Versucht ein Kreuz auf den Bildschirm zu zeichnen, indem ihr zwei Linien zeichnet, die sich kreuzen. 


**Alle Zeichenbefehle gehören übrigens in die `draw` Funktion.**

### Reihenfolge der Befehle

Schreibt ihr zuerst den Befehl für ein Rechteck und dann einen Kreis, sieht es so aus. <br/>
[[images/Reihenfolge.png \| height=300px]] <br/>
Wechselt einmal die Reihenfolge der Zeichnungsbefehle. <br/>
Was passiert und was könnt ihr daraus schliessen?<br/>
`rect(10,190,380,10);` <br/>
`ellipse(200,200,200,200);` <br/>

### Stile
Alle Objekte, die wir bisher gezeichnet haben, besitzen eine Konturlinie und sind weiss gefüllt. Der Hintergrund ist hellgrau. Das sind Voreinstellungen können und verändert werden.<br/>
### Konturlinien
Standardmässig ist die Konturlinie 1 Pixel breit.<br/>
`strokeWeight(10);`<br/>
Mit diesem Befehl setzt du die Linie auf 10 Pixel.<br/>
Möchtest du, dass das Objekt gar keine Konturlinie hat, kannst du das so angeben:<br/>

`noStroke();`<br/>

**Alle Angaben zu Objektstil  müssen ausgeführt werden, bevor das Objekt auf den Canvas gezeichnet wird!**
**Diese Stilangaben sind so lange gültig, bis du sie durch neue Definitionen ersetzt, d.h. überschreibst.**

Die Befehle zur Definition der Stile findest du auf der Referenz in der Sektion Color:
(https://p5js.org/reference/)

## Füllung
### Grauwerte
Bisher war der Hintergrund immer hellgrau, die Striche immer schwarz und die Füllung immer weiss. Um das zu ändern, können wir die Funktionen `background()`, `fill()` und `stroke()` verwenden. Die Werte der Argumente liegen im Bereich von 0 bis 255, wobei 255 weiss, 128 mittelgrau und 0 schwarz ist.

Zeichnen wir drei Ellipsen mit unterschiedlichen Grautönen. Beachtet auch hier, derjenige Wert, der VOR dem Zeichnen definiert wurde, bestimmt das Aussehen der Form.

`background(255);`<br/>
`fill(205); // Light grey`<br/>
`ellipse(150, 150, 100, 60);`<br/>
`fill(153); // Medium gray`<br/>
`ellipse(200, -40, 320, 320);`<br/>
`fill(102); // Dark gray`<br/>
`ellipse(350, 90, 200, 200);`<br/>

### Uebung 
Versucht einmal, mit den untenstehenden Befehlen eine Tangram Komposition zu zeichnen, so dass man die einzelnen Grundformen sieht. 
https://www.pinterest.de/pin/40039884164602343/

* https://p5js.org/reference/#/p5/rect
* https://p5js.org/reference/#/p5/quad
* https://p5js.org/reference/#/p5/triangle



### Farben
Bis jetzt haben wir bloss mit schwarz, weiss und Grauwerten gearbeitet.<br/>
Um Farben zu erzeugen können wir mit drei Argumenten die roten, grünen und blauen Anteile einer Farbe angeben. Die Farben beziehen sich auf RGB. Die drei Zahlen sind für die Werte von rot, grün und blau. Sie reichen von 0 bis 255 für jeden Farbkanal. 0 ist kein Anteil der Farbe, 255 voller Anteil. Versuchen wir es mit einer türkisfarbenen Farbe:

`fill(0, 128, 128);`<br/>
Farbräume RGB: https://www.khanacademy.org/partner-content/pixar/color/color-space/v/color6-final <br/>
### Transparenz
Wir können sogar einen vierten Parameter hinzufügen, der die Transparenz steuert. Der Alpha-Wert reicht von 0 bis 255. 

`fill(0, 128, 128, 100);`

**Hier noch einmal zusammenfassend erklärt:**
* `fill(0)`  Mit einem Argument ergibt sich ein Wert zwischen schwarz und weiss
* `fill(0, 100)`  Mit zwei Argumenten ergibt sich ein Wert zwischen schwarz und weiss. Das zweite Argument ist die Transparenz. 0 ist ganz transparent, 255 ganz deckend.
* `fill(255,0,0)` Mit drei Argumenten bezieht sich die erste Angabe auf den Rotwert, die zweite auf den Grünwert, die dritte auf den Blauwert
* `fill(255,0,0, 100)` Mit vier Argumenten bezieht sich die erste Angabe auf den Rotwert, die zweite auf den Grünwert, die dritte auf den Blauwert und die vierte auf die Transparenz.

Analog zu `fill(0)` funktionieren auch `background(0)` oder `stroke(0)`. 
* `fill(0)` definiert die Füllung einer Form
* `background(0)` definiert die Farbe des ganzen Hintergrunds und zeichnet den Hintergrund
* `stroke(0)` definiert die Farbe einer Konturlinie