var students = ["alnasserA", "caoT", "chenA", "chenH", "chenJ", "dossE", "elahiT", "galakhovI",
                "gorbachevY", "hallJ", "lamE", "lauE", "leeJ", "leeJo", "leeR", "liK", "linJ",
                "linM", "luoY", "ngK", "rawatP", "shawJ", "sofatV", "vuksanajK", "walshE",
                "xiedengD", "zhangE", "zhangM", "zhengA"]

var fib = function( num){
    if( num > 2)
	return fib( num - 2) + fib( num - 1);
    else
	return 1;
};

var gcd = function( a, b){
    if( b == 0){
	return a;
    }
    return gcd( b, a % b);
};

var randomStudent = function(){
  return students[Math.floor(Math.random() * students.length)];
};
