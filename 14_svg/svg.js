//Emory Walsh & Justin Shaw 
//Softdev pd09
//K14 -- Ask Circles [Change || Die] While Moving, etc.
//2020-04-01

var svg = document.getElementById("vimage");

delX = [];
delY = [];

var animation;

svg.addEventListener("click", (e) => {
  x = e.pageX-5;
  y = e.pageY-20;

  //console.log(x)
  //console.log(y)

  let children = svg.children
  for(let i=0; i<children.length; i++){
    if(Math.abs(x - children[i].getAttribute("cx")) < 20 && Math.abs(y - children[i].getAttribute("cy")) < 20){
      if(children[i].getAttribute("style") === "fill: blue; stroke: blue; stroke-width: 1px;"){
        children[i].setAttribute("style", "fill: #00FFFF; stroke: #00FFFF; stroke-width: 1px;");
        return
      }
      else{
        nx = Math.random() * 500 + 5
        ny = Math.random() * 500 + 20
        children[i].setAttribute("cx", nx)
        children[i].setAttribute("cy", ny)
        children[i].setAttribute('style', 'fill: blue; stroke: blue; stroke-width: 1px;' );
        return
      }
    }
  }
  var circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
  circle.setAttribute('cx', x);
  circle.setAttribute('cy', y);
  circle.setAttribute('r', 20);
  circle.setAttribute('style', 'fill: blue; stroke: blue; stroke-width: 1px;' );
  svg.appendChild(circle);
  delX.push(Math.ceil(Math.random() * 3))
  delY.push(Math.ceil(Math.random() * 3))
});

document.getElementById("clear").addEventListener("click", () => {
  while (svg.lastChild) {
    svg.removeChild(svg.lastChild);
    children = 0;
  }
  delX = []
  delY = []
});

document.getElementById("xtra").addEventListener("click", () => {
  colors = ["#1AFA72", "#F70C0C", "#DB0CF7", "#F7F70C", "#0F0CF7", "#0CF7BE"]

  for(let i=0; i < 50; i++){
    nx = Math.random() * 500 + 5
    ny = Math.random() * 500 + 20
    nr = Math.random() * 20

    var circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
    circle.setAttribute('cx', nx);
    circle.setAttribute('cy', ny);
    circle.setAttribute('r', nr);
    circle.setAttribute('style', 'fill:' + colors[i%6] + '; stroke:' + colors[i%6] + '; stroke-width: 1px;' );
    svg.appendChild(circle);
    delX.push(Math.ceil(Math.random() * 3))
    delY.push(Math.ceil(Math.random() * 3))
  }
});

document.getElementById("move").addEventListener("click", move);

var move = function(e){
    window.cancelAnimationFrame(animation);
  let children = svg.children
  for(let i=0; i<children.length; i++){
    x = parseInt(children[i].getAttribute('cx'));
    y = parseInt(children[i].getAttribute('cy'));
    r = parseInt(children[i].getAttribute('r'));

    if(((x - r) <= 0) || ((x + r) >= 500)){
      if(x-r <= 0){
        delX[i] = Math.abs(delX[i])
      }
      if(x+r >= 500){
        delX[i] = -1 * Math.abs(delX[i])
      }
    }
    if(((y - r) <= 0) || ((y + r) >= 500)){
      if(y-r <= 0){
        delY[i] = Math.abs(delY[i]);
      }
      if(y+r >= 500){
        delY[i] = -1 * Math.abs(delY[i]);
      }
    }
    console.log(delX[i])
    console.log(delY[i])
    children[i].setAttribute('cx', x+delX[i]);
    children[i].setAttribute('cy', y+delY[i]);

  }
  animation = window.requestAnimationFrame(move);
};
document.getElementById("move").addEventListener("click", move);


var stop = function(e){
  window.cancelAnimationFrame(animation);
};
document.getElementById("stop").addEventListener("click", stop);
