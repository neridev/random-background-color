let page = document.getElementById('page');
let coordinates = document.getElementById('coordinates');
let box = document.getElementById('mousebox');
let map = document.getElementById('colormap');

function getRandom(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; // max & min both included 
}

//Creates variables for x & y for know where our mouse is
//x is for horizontal values, and y for vertical ones
let x = 0;
let y = 0;

// Add Event Listener for page. Listens for any mouse movement
// inside the page element. If found, run function below
map.addEventListener('mousemove', (e) => {
  //Takes the mouse movement we listened for and saves it into two variables
  x = e.clientX;
  y = e.clientY;

  //Here we set the background color to the x & y value that the mouse has over the web page. See css part for rgb explaination
  page.style.backgroundColor = 'rgb(' + x + ', ' + y + ', 100)';
  //page.style.backgroundColor = 'hsl(' + getRandom(1, 359) + ', 100%, 50%)';

  //By writing variable + ', ' we combine the value with text to make it write like rgb(x, y, 100); when sent to style part (css)
  //Adds a text element to the page. It writes out the x & y value
  coordinates.textContent = x + ', ' + y;
});


//Function for a box that follows the mouse around
let mousebox = () => {
  //Calls the css code to push the box away from the left & top
  //the same x & y values that the mouse has
  box.style.left = x + 'px';
  box.style.top = y + 'px';

}

//Sets up an update interval of how often both boxes happen. Number is in milliseconds so 100ms = 10 times per second
setInterval(mousebox, 100);
