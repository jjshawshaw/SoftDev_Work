/*
Justin Shaw

SoftDev1 pd1

K28 -- Sequential Progression II: Electric Boogaloo

2019-12-12
*/
var students = ["alnasserA", "caoT", "chenA", "chenH", "chenJ", "dossE", "elahiT", "galakhovI",
                "gorbachevY", "hallJ", "lamE", "lauE", "leeJ", "leeJo", "leeR", "liK", "linJ",
                "linM", "luoY", "ngK", "rawatP", "shawJ", "sofatV", "vuksanajK", "walshE",
                "xiedengD", "zhangE", "zhangM", "zhengA"]
// factorial
var fact = function(num){
	if (num < 2){
		return 1
	} else {
		return num * fact(num -1)
	}
}
// fibonacci
var fib = function( num){
    if( num > 2)
	return fib( num - 2) + fib( num - 1);
    else
	return 1;
};
// greatest common denominator
var gcd = function( a, b){
    if( b == 0){
	return a;
    }
    return gcd( b, a % b);
};
// random student
var randomStudent = function(){
  return students[Math.floor(Math.random() * students.length)];
};

// buttons
//factorial button
var factbutton = document.getElementById("fact")
var fact_click = function(){
  console.log(fact(17));
  document.getElementById("fact_out").innerHTML = fact(17);
}
factbutton.addEventListener('click', fact_click)

// fibonacci button
var fibbutton = document.getElementById("fib")
var fib_click = function(){
  console.log(fib(13));
  document.getElementById("fib_out").innerHTML = fib(13);
}
fibbutton.addEventListener('click', fib_click)

// gcd button
var gcdbutton = document.getElementById("gcd")
var gcd_click = function(){
  console.log(gcd(1125, 630));
  document.getElementById("gcd_out").innerHTML = gcd(1125, 630);
}
gcdbutton.addEventListener('click', gcd_click)

// randomStudent button
var rsbutton = document.getElementById("rs")
var rs_click = function(){
  console.log(randomStudent());
  document.getElementById("rs_out").innerHTML = randomStudent();
}
rsbutton.addEventListener('click', rs_click)
