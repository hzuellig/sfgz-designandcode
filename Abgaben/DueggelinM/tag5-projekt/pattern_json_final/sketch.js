/*--------------------------------------------------------------------------------------------------------------
----------------------------------------------------------------------------------------------------------------
Project: Patterns
Author: Mirjam Dueggelin
Coauthor: Joel Stohler
Date: 07.10.2022  
Description: 
  The Goal of the Project is to visualise the data from a JSON file.
  The Pattern shows the staying time in an abstract way and should represent something like a barcode.
-----------------------------------------------------------------------------------------------------------------
-----------------------------------------------------------------------------------------------------------------*/

function preload() {
  // Get the the takeout data from maps in the month of June
  data = loadJSON("2022_AUGUST.json");
}

/*---------------------------------------------------------------------------------------------------------------*/

function setup() {

  //variabel definition, global scope
  h = (window.innerHeight * 0.9); // 10% smaller than the window height
  y = (window.innerHeight * 0.05); // starts 5% of the height
  x = 0;
  flag = 0;
  i = 0;

  /*only the placevisits are used in the program, therefor all the activitySegment are filterd out, by iterating through all elements(element) 
    with the filter function. the filterfunktion copies the element in an new array (placeObjects), but only if the key "placeVisit" is in 
    the current element.*/
  placeObjects = data.timelineObjects.filter(element => "placeVisit" in element);


  /*By mapping the array placeObjects, a new array, deltaTime, is created in which the length of stay is saved.
    every element in placeObjects has a starttimestamp and an endtimestamp.
    the function date() creates a new date object, thes date objects can be subtracted to calculate the length of stay
        => staying time = endtimestamp - starttimestamp
    example of the conversion to a date object:
        const d = new Date("2022-06-01T14:20:43.948Z");
        print(d); => Date Wed Jun 01 2022 16:20:43 GMT+0200 (Mitteleuropäische Sommerzeit);
    example of the calculation with the converted timestamps, the solution is in miliseconds, thats why it is divided by 1000*60, so it is in minutes
        (2022-06-01T14:28:47.913Z) - (2022-06-01T14:20:43.948Z) = 483965 ms*/

  deltaTime = placeObjects.map(element =>
    (new Date(element.placeVisit.duration.endTimestamp) - new Date(element.placeVisit.duration.startTimestamp)) / (1000 * 60));


  //total time for mapping on the screen,
  //reduce iterates the array deltaTime and adds all values together, initialValue is only used to prevent problems.
  let initialValue = 0;
  tmax = deltaTime.reduce((previousValue, currentValue) => previousValue + currentValue, initialValue);

  //creating an array with the relative width pixel values in respect to the screen
  deltaX = deltaTime.map(time => ((time * window.innerWidth) / tmax));

  //creating of the canvas corresponding to the size of the window
  //background of the canvas is black
  createCanvas(window.innerWidth, window.innerHeight);
  background(255);
  loop();

  /*ignore, for debugging
  print(tmax);
  deltaTime.forEach(time => print(time));
  print(deltaX);
  deltaX.forEach(time => print(time));*/

}

/*---------------------------------------------------------------------------------------------------------------*/

function draw() {

  //changes colour every loop, by setting a flag
  if (flag == 1) {
    fill(255);
    flag = 0;
  }
  else {
    fill(0);
    flag = 1;
  }
  noStroke();

  //drawing the rectangle, at position x, y, with a height of h, ond a width of the precalculated deltaX
  //every loop, the width changes, and the x value is moved
  rect(x, y, deltaX[i], h);

  //
  x = x + deltaX[i];

  //stops the looping if the screen is full
  if (i >= deltaX.length) {
    noLoop();
  }

  i = i + 1;
  
}

/*---------------------------------------------------------------------------------------------------------------*/

//by pressing the mousebutton, the screen is cleared,
//in the setup the looping variables are reset, the looping is activated,
//and the draw function is called again
function mousePressed() {
  clear();
  setup();
  redraw();
}

function keyReleased() {
  if (key == 's' || key == 'S') {
      let d = new Date();
      let now = d.getFullYear() + "" + (d.getMonth() + 1) + "" + d.getDate() + "" + (d.getHours() + 1) + "-" + (d.getMinutes() + 1) + "" + (d.getSeconds() + 1) + "-" + frameCount;
      saveCanvas(now, 'png');
  }
}