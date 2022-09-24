# Programm 24.9.2022

* Repetition
* Browserhistory einlesen
* Always Iterate, Zach Liebermann https://www.youtube.com/watch?v=bmztlO9_Wvo
* Folien von Tag1 <a href="https://docs.google.com/presentation/d/1CvH7lUmU2S5X55H3V1a02b8hXcXI4cbmQ1nF_xQf3p8/edit#slide=id.p1">LINK</a>
* Generative Gestaltung, Typobeispiele oder Agenten! <a href="http://www.generative-gestaltung.de/2/">LINK</a>
* 2 neue Ideen für Präsentation 

* Besprechungen

## Beispiel Browserhistory
```js
// im exportierten JSON 'Browser History' umbenennen in 'BrowserHistory' ohne Leerschlag
{
    "BrowserHistory": [{
    },
    ...
    ]
}

```
Einlesen in der preload() Funktion und in das history Array schreiben:

```js
let history = new Array(); //hier schreiben wir die history rein
function preload() {
    let url = "BrowserHistory.json";
    loadJSON(url, loaded);

}

function loaded(data) {
    history = data.BrowserHistory;

}
```
So greift ihr auf ein bestimmtes Attribut zu und verändert die Darstellung je nach Wert:

```js
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

```
Andere Datensätze möglich!!



## Besprechungen
Aufgabe auf heute:<br/>
Konzept, Entwurf: studiert eure Browser History oder einen anderen JSON Datensatz, mit dem du arbeiten willst. Was ist gespeichert und inwiefern eignet es sich, visualisiert zu werden? **Mach Skizzen oder ein Moodboard, um deine Idee zu prüfen, zu vermitteln. Am kommenden Samstag werde ich individuell (oder zu zweit, falls ihr in Gruppen arbeitet) eure Idee besprechen.***
Liste (ihr könnt auch abtauschen oder gemeinsam Gruppen bilden)<br/>
https://docs.google.com/spreadsheets/d/1pJUwamWnO7WmlfqSxXOjlterZdYt7zRzjqfwxm4iQWg/edit#gid=0

