//Pratham Rawat and Justin Shaw
//SoftDev pd1
//K04 -- I see a red door
//2020 - 02 - 05

var mode = "circle";
const BOX_SIDE_LENGTH = 50;
const CIRCLE_RADIUS = 5;

var c = document.getElementById('slate');
var ctx = c.getContext("2d");

c.addEventListener("click", function(e){
  r_value = document.getElementById("r-slider").value;
  b_value = document.getElementById("b-slider").value;
  g_value = document.getElementById("g-slider").value;
  ctx.fillStyle = "rgb(" + r_value + ", " + g_value + ", " + b_value + ")";
  console.log("clik");
  var rect = c.getBoundingClientRect();
  if ( mode == "box" ){
    ctx.fillRect(e.offsetX, e.offsetY, BOX_SIDE_LENGTH, BOX_SIDE_LENGTH);
    //e.offsetX and e.offsetY return the coordinates of the mouse relative to the coordinates of the target element
  } else {
    ctx.beginPath();
    //beginPath() starts drawing a path which can be used to draw lines or figures
    ctx.arc(e.offsetX, e.offsetY, CIRCLE_RADIUS, 0, Math.PI * 2);
    ctx.closePath();
    ctx.fill();
  }
});

document.getElementById('toggle').addEventListener("click", function() {
  console.log("togl");
  if(mode == "box") {
    mode = "circle"
  } else {
    mode = "box"
  }
});

//e.preventDefault() is not used, but it works to prevent the default action for an event from occuring
document.getElementById('clear').addEventListener("click", function() {
  console.log("clr");
  ctx.clearRect(0, 0, c.height, c.width);
});
