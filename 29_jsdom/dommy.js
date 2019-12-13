/*
Justin Shaw

SoftDev1 pd1

K29 -- Sequential Progression III: Season of the Witch

2019-05-05
*/


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

var fib = function(n){
  if (n < 2) {
    return 1
  } else {
    return fib(n - 1) + fib(n - 2)
  }
}

var i = 0
var addFib = function(e){
  console.log("creating fib");
  var new_fib = document.createElement("button");
  e.target.insertAdjacentElement("afterend", new_fib);
  new_fib.insertAdjacentHTML("beforebegin", "<br>");
  new_fib.innerHTML = "Next Fibonacci Number";
  var fib_list = document.createElement("ol");
  new_fib.insertAdjacentElement("afterend", fib_list);
  new_fib.addEventListener( 'click', function(){
    var item = document.createElement('li');
    item.innerHTML = fib(i);
    fib_list.appendChild(item);
    i++;
  });
};

// dynamic fibonacci
var i_dyn = 0;
var dyn_list = [1, 1];
var addFib2 = function(e){
  console.log("creating fib");
  var new_fib = document.createElement("button");
  e.target.insertAdjacentElement("afterend", new_fib);
  new_fib.insertAdjacentHTML("beforebegin", "<br>");
  new_fib.innerHTML = "Next Fibonacci Number";
  var fib_list = document.createElement("ol");
  new_fib.insertAdjacentElement("afterend", fib_list);
  new_fib.addEventListener( 'click', function(){
    var item = document.createElement('li');
    var next_fib;
    if (i_dyn < 2){
      item. innerHTML = dyn_list[i_dyn];
    } else {
      ans = dyn_list[0] + dyn_list[1]
      dyn_list[0] = dyn_list[1]
      dyn_list[1] = ans
      item.innerHTML = ans
    }
    i_dyn++;
    fib_list.appendChild(item);
  });
};




var list = document.getElementById("thelist")
var item = document.createElement('li');

var fb = document.getElementById("fb");
fb.addEventListener('click', addFib2)
