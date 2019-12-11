/*
Justin Shaw

SoftDev1 pd1

K27 -- Sequential Progression

2019-12-11    
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
