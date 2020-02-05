var mode = "box";
const BOX_SIDE_LENGTH = 50;
const CIRCLE_RADIUS = 5;

var c = document.getElementById('slate');
var ctx = c.getContext("2d");

c.addEventListener("click", function(e){
  console.log("clik");
  if ( mode == "box" ){
    ctx.fillRect(event.clientX - e.target.x, e.clientY, BOX_SIDE_LENGTH, BOX_SIDE_LENGTH);
  } else {
    ctx.arc(e.clientX, e.clientY, CIRCLE_RADIUS, pi * 2);
  }
});
