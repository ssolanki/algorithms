// http://www.geeksforgeeks.org/sort-a-stack-using-recursion/

// O(n^2) and O(1) algo using recursion
var stack = function(){
	this.elems = [];
}
stack.prototype.pop = function(){
	return this.elems.pop();	
}
stack.prototype.push = function(elem){
		this.elems.push(elem);		
}
stack.prototype.top = function(){
	return this.elems[this.size()-1];		
}
stack.prototype.size = function(){
	return this.elems.length;	
}
function recursiveSortStack(s){
	if(s.size()!=0){
		var temp = s.pop();
		recursiveSortStack(s);
		sortedInsert(s,temp);
	}
}
function sortedInsert(s,elem){
	if(s.size()==0 || elem > s.top()){
		s.push(elem);
	}else{
		var temp = s.pop();
		sortedInsert(s, elem);
		s.push(temp);
	}	
}
// O(n^2) and one stack;
function iterativeSortStack(s){
	var s2 = new stack();
	while(s.size()!=0){
		var temp = s.pop();
		while(s2.size()!=0 && temp<s2.top()){
			s.push(s2.pop());
		}
		s2.push(temp);
	}
	return s2;
}

var s = new stack();
s.push(6);
s.push(4);
s.push(3);
s.push(2);

var s2= new stack();
s2.push(6);
s2.push(4);
s2.push(3);
s2.push(2);

recursiveSortStack(s);
s2 = iterativeSortStack(s2);
console.log(s.elems);
console.log(s2.elems);

