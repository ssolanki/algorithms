console.log("1"+2+3);
console.log(1+2+"3",typeof (1+2+"3"));

var a = []
a.unshift(1);
a.unshift(22);
a.shift();
a.unshift(3,[4,5]);
a.shift()
console.log(a)

var a = 5;

function one(){
	a = 6;
}
function two(){
	console.log(a);
}
two();

function my_func(a){
	var temp = 2;
	function self(b){
		console.log(a+b+(temp++));
	}
	self(9);
}
my_func(2)