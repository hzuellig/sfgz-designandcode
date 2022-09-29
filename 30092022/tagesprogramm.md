# Programm 30.9.2022, halbtags
* Input: Anatomie von Lottie und Exportformate von p5.js (ca. 50min)
* Arbeit an der Prozessgalerie und Reflexion (ca. 60min)
* Arbeit am Projekt und Support (ca. 60min)

## Varianten Weiterverarbeitung
* SVG Export aus p5.js (Vektorformat)
* Quicktime Export aus p5.js

## Export als SVG
https://github.com/zenozeng/p5.js-svg
https://editor.p5js.org/dannyrozin/sketches/r1djoVow7

Nach dem Laden der p5.js Library im index.html die SVG Library laden:
```html
<script src="https://unpkg.com/p5.js-svg@1.3.1"></script>
```
Die Canvas mit dem Renderer SVG erstellen:

```js
createCanvas(window.innerWidth, window.innerHeight, SVG);
```
Für den Download die bestehende Export Funktion anpassen:
```js
function keyReleased() {
    if (key == 's' || key == 'S') {
        let d = new Date();
        let now = d.getFullYear() + "" + (d.getMonth() + 1) + "" + d.getDate() + "" + (d.getHours() + 1) + "-" + (d.getMinutes() + 1) + "" + (d.getSeconds() + 1) + "-" + frameCount;
        //saveCanvas(now, 'png'); 
        save("mySVG.svg"); // SVG exportieren
    }

}
```
## Export als Video
https://github.com/tapioca24/p5.capture

## Arbeit an Prozessgalerie, Reflexion
* Was wählt ihr aus?
* Wieso habt ihr diese Auswahl gemacht? Was interessiert euch daran?
* Wie stellt ihr es zusammen? (Formen: <a href="https://zkm.de/de/event/2016/09/aby-warburg-mnemosyne-bilderatlas/der-mnemosyne-bilderatlas" target="_blank">Cluster von Bildern</a>, <a href="http://www.artnet.de/k%C3%BCnstler/bernd-and-hilla-becher/" target="_blank">Serien</a>, Pairs (Gegenüberstellungen), Unikate, viel Material, wenig, mit Abstand zwischen den Bildern, ohne, dasselbe Bildformat, unterschiedliche Formate, etc.)
* Wieso wählt ihr diese Präsentationsform?

## Aufgabe: Schreibt einen kurzen Text als Begleitung zur Prozessgalerie:
Was habt ihr visualisiert, wie habt ihr es visualisiert und welche Präsentationsform wählt ihr hier.

## Arbeit am Projekt
Die Arbeit an der Prozessgalerie soll euch bewusst machen, in welche Richtung ihr im Projekt gehen wollt. Aus dem Experimentieren kristallisieren sich gezieltere Fragen und Ideen heraus.

## individuelle Besprechungen und Support 

## Aufgabe auf 7.10
Investiert insgesamt individuell 4 Stunden für Folgendes:
* Prozessgalerie und schriftliche Reflexion
* Arbeit am Projekt 