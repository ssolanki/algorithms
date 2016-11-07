/* 
 * NestAway Coding Round Question
 * Given names of n kings with a roman Number seprated by space.
 * Sort the names in order of 
 * 
 */
function getSortedList(names) {
    names.sort(function sortLatinString(a,b){        
        var res1 = a.split(" "), res2 = b.split(" ") ;
        var str1 = res1[0], str2 = res2[0] ;   
       if(str1<str2) {        
            return -1;
        }else if(str1>str2){
        	return 1;
        }else{
        	var roman1 = res1[1],roman2 = res2[1];
        	var digit1 = romanToMap(roman1),digit2=romanToMap(roman2);
        	return digit1-digit2;
        } 
    });
    console.log(names)
    return names;
}
function romanToMap(str){
	var c = 1,num=0;
	for(var j = str.length-1;j>=0;j--){
		num += romanToNumMap[str[j]];		
	}
	return num;
}
romanToNumMap = {
		"I": 1,
		"V": 5,
		"X": 10,
		"L": 50,
		"C": 100,
		"D": 500,
		"M": 1000
	};

names = ['Philip XI','Philip XX','Philip II','Philippe I','Philip X','Philip III','Philip LX']
getSortedList(names);