/* Justin Shaw
   SoftDev pd1
   K12 -- Connect the Dots
   2020 - 02 - 30 --> */

var prevcoor = []



var playground = document.getElementById('playground');

playground.addEventListener("click", function(e){
  var circ = document.createElementNS("http://www.w3.org/2000/svg","circle");
  circ.setAttribute("cx", e.offsetX);
  circ.setAttribute("cy",  e.offsetY);
  circ.setAttribute("r", 3);
  circ.setAttribute("stroke", "black");
  circ.setAttribute("fill", "black");
  playground.appendChild(circ);
  if (prevcoor.length > 0){
    var line = document.createElementNS("http://www.w3.org/2000/svg","line");
    line.setAttribute("x1", prevcoor[0]);
    line.setAttribute("y1", prevcoor[1]);
    line.setAttribute("x2", e.offsetX);
    line.setAttribute("y2", e.offsetY);
    line.style.stroke = "black";
    line.style.strokeWidth = 2;
    playground.appendChild(line);
  }
  prevcoor = [e.offsetX, e.offsetY];
});

document.getElementById('clear').addEventListener("click", function() {
  console.log("clr");
  prevcoor = [];
  while (playground.hasChildNodes()){
    playground.removeChild(playground.lastChild);
  }
});
