// http://www.geeksforgeeks.org/length-longest-sub-string-can-make-removed/
// 
function longestStr(str){
	var s="",i=0,count=0,max=0,currMax=0;
	s=str[0]+str[1]+str[2];	
	while(i<str.length){
		s+=str[i];	
		// console.log(s,i,s.length)		
		while(s.length>=3&&s.charAt(s.length-3)=="1"&&s.charAt(s.length-2)=="0"&&s.charAt(s.length-1)=="0"){
			// console.log(s,i,s.length)
		  s = s.slice(0, -3);
		}
		var tmp = s.length-1;
		// console.log(tmp,i)
		max = Math.max(max,i-tmp);
		i++;
	}
	console.log(max)
}

str = "101010000111010";
longestStr(str);

//