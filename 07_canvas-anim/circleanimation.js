/*Justin Shaw
SoftDev pd1
K07 -- They lock us in the tower whenever we get caught
2020 - 02 - 13 */

var playing = false;
var growing = true;
var radius = 20;

var c = document.getElementById('playground');
var ctx = c.getContext("2d");

var animation = function(){
  if (playing){
    if (radius <= 20){
      growing = true;
    }
    if (radius >= 100){
      growing = false;
    }
    if (growing){
      radius += 1;
    } else{
      radius -= 1;
    }
    ctx.clearRect(0, 0, c.height, c.width);
    ctx.beginPath();
    ctx.arc(c.height / 2, c.width / 2,radius, 0, Math.PI * 2);
    ctx.fill();
  }
};

setInterval(animation, 100);

document.getElementById('start').addEventListener("click", function() {
  playing = true;
});
document.getElementById('stop').addEventListener("click", function() {
  playing = false;
});
