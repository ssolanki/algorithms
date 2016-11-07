// http://stackoverflow.com/questions/1009160/reverse-the-ordering-of-words-in-a-string

function reverse(arr){
	var str = arr[0].split('');
	var l = 0, r = str.length -1 ;	
	while(l<r){
		var temp = str[l];
		str[l] = str[r];
		str[r] = temp;
		l++;
		r--;
	}
	console.log(str.join(''))
}
str = ["My name is sahil"];
reverse(str);