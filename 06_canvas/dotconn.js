
var prevcoor = []



var c = document.getElementById('playground');
var ctx = c.getContext("2d");

c.addEventListener("click", function(e){
  ctx.beginPath();
  ctx.arc(e.offsetX, e.offsetY, 3, 0, Math.PI * 2);
  ctx.fill();
  if (prevcoor.length > 0){
    ctx.lineTo(prevcoor[0], prevcoor[1]);
    ctx.stroke();
  }
  ctx.closePath();
  prevcoor = [e.offsetX, e.offsetY];
});

document.getElementById('clear').addEventListener("click", function() {
  console.log("clr");
  ctx.clearRect(0, 0, c.height, c.width);
  prevcoor = [];
});
