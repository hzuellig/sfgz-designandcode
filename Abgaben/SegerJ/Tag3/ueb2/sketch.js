let tracks = new Array();//hier speichern wir die Mausbewegung
let max = 100; // eine maximal Begrenzung von Positionen 

let position = {
  x: 145,
  y: 765,
  b:'s',
  name: 'juri'
};

let user ={
  age: 34,
  sex: ['female', 'Male', 'Non-Binar',],
  wohnorte: ['Bülach', 'Hastings', 'Zürich', 'London']
}

console.log(position.name);
console.log(user.wohnorte[2])
console.log(user.sex[1])
console.log(user.age)





function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  background(20, 130, 100);
  frameRate(5);//frameRate verlangsamen
}

function draw() {

  
}
