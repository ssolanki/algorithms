// all number less than x such that a xor x equal to a+x
// O(n) algo but not sufficient yet.
function main(input) {
    var lines = input.split("\n");
    var t = parseInt(lines[0]),n=lines.length-1;
    for(var i=1;i<=n;i++){
    	var x = parseInt(lines[i]);
    	var ans = 0
    	for(var j=1;j<x;j++){
    		if(xor(j,x) == x+j){
    			ans++;
    		}
    	}
    	console.log(ans)
    }
}
function xor(a,b){	
	return (a|b)&(~a|~b);
}
input = "4\n1\n2\n3\n4";
main(input)