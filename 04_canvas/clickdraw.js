var mode = "box";
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
    ctx.arc(e.clientX - rect.x, e.clientY - rect.y, CIRCLE_RADIUS, 0, Math.PI * 2);
  }
});
