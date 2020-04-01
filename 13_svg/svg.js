/* Justin Shaw
   SoftDev pd1
   K13 -- Ask Circles
   2020 - 02 - 31 --> */




var playground = document.getElementById('playground');

document.body.addEventListener("click", function(e){
	var circles = playground.children;
	var outside = true;
	if (playground.contains(e.target)){		
		for (var i = 0; i < circles.length; i++){
			circle = circles[i];
			if (circle.contains(e.target)){
				outside = false;
				if (circle.getAttribute("fill") === "red"){
					playground.removeChild(circle);
					var circ = document.createElementNS("http://www.w3.org/2000/svg","circle");
					circ.setAttribute("cx", Math.floor(Math.random() * 600));
                        		circ.setAttribute("cy",  Math.floor(Math.random() * 600));
                        		circ.setAttribute("r", 10);
                        		circ.setAttribute("fill", "black");
                        		playground.appendChild(circ);
				} else {
					circle.setAttribute("fill", "red");
				}
			}
		}
		if (outside){
  			var circ = document.createElementNS("http://www.w3.org/2000/svg","circle");
			circ.setAttribute("cx", e.offsetX);
			circ.setAttribute("cy",  e.offsetY);
			circ.setAttribute("r", 10);
			circ.setAttribute("fill", "black");
			playground.appendChild(circ);
		}
	}
});

document.getElementById('clear').addEventListener("click", function() {
	console.log("clr");
	while (playground.hasChildNodes()){
  		playground.removeChild(playground.lastChild);
	}
});
