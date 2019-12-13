
var changeHeading = function(e){
  var h = document.getElementById("h");
  if (e.type == "mouseover"){
    h.innerHTML = e.target.innerHTML;
  } else {
    h.innerHTML = "Hello World!";
  }
};

var removeItem = function(e){
  e.target.remove();
};


var lis = document.getElementsByTagName("li");

for (var i = 0; i < lis.length; i++){
  var text = lis[i].innerHTML;
  lis[i].addEventListener( 'mouseover', changeHeading);
  lis[i].addEventListener( 'mouseout', changeHeading);
  lis[i].addEventListener( 'click', removeItem);
};

var addItem = function(e){
  var list = document.getElementById("thelist")
  var item = document.createElement('li');
  item.addEventListener( 'mouseover', changeHeading);
  item.addEventListener( 'mouseout', changeHeading);
  item.addEventListener( 'click', removeItem);
  item.innerHTML = "WORD";
  list.appendChild(item)
};

var button = document.getElementById('b');
button.addEventListener('click', addItem);
