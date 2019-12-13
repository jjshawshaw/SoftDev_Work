
var changeHeading = function(e){
  var h = document.getElementById("h");
  if (e.type == "mouseover"){
    h.innerHTML = e.target.innerHTML;
  } else {
    h.innerHTML = "Hello World!"
  }
};


var lis = document.getElementsByTagName("li");

for (var i = 0; i < lis.length; i++){
  var text = lis[i].innerHTML;
  lis[i].addEventListener( 'mouseover', changeHeading);
  lis[i].addEventListener( 'mouseout', changeHeading);
};
