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
  console.log("clik");
  var rect = c.getBoundingClientRect();
  if ( mode == "box" ){
    ctx.fillRect(event.clientX - rect.x, e.clientY - rect.y , BOX_SIDE_LENGTH, BOX_SIDE_LENGTH);
  } else {
    ctx.beginPath();
    ctx.arc(e.clientX - rect.x, e.clientY - rect.y, CIRCLE_RADIUS, 0, Math.PI * 2);
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


document.getElementById('clear').addEventListener("click", function() {
  console.log("clr");
  ctx.clearRect(0, 0, c.height, c.width);
});
