/*  
* Find whether a string is good string or not.
* string is good string if length >=2 and first and last char is same, task is make a string good in minimum operation.
* if not possible -1 
*  two operations allowed
*  remove a letter from start of string
*  remove a letter from end of string
*/

function main(input) {
    //Enter your code here
    var lines = input.split("\n");
    var t = parseInt(lines[0]),n=lines.length-1;
    for(var i=1;i<=n;i++){
    	var min = new Array(1);
    	min[0] = -1;
    	console.log(minCount(lines[i],0,lines[i].length-1,min))
    }
}
// O(n) algo with O(n) space using hashmap
function minCount(str,n1,n2,minCountSofar){
	var map = {};
	for(var i=0;i<str.length;i++){
		if(!map.hasOwnProperty(str[i])){
			map[str[i]] = i;
		}
	}
	var ans = -1;
	for(var i=str.length;i>=0;i--){
		if(map.hasOwnProperty(str[i])){
			if(i!=map[str[i]]){
				if(ans==-1){
					ans = str.length-1-i + map[str[i]]
				}else{
					ans = Math.min(ans,str.length-1-i + map[str[i]])
				}
				// console.log(i,str[i],ans)
			}
		}
	}
	return ans;	
}
input = "4\nabcda\nabcdefghiab\npqr\nbacdefghipalop";
// input = "4\nbacdefghipalop";
// input = "1\nbacdefghipalop";

// input = "1\nbacpalopaac";
main(input)