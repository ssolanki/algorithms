// Not finished yet
// hint: http://www.geeksforgeeks.org/ugly-numbers/
function main(input) {
    //Enter your code here
	var lines = input.split("\n");
	var n = parseInt(lines[0]);
	for(var i=1;i<lines.length;i++){
		var values = lines[i].split(" ");
		var N = parseInt(values[0]),L= parseInt(values[1]),R= parseInt(values[2]);
		console.log(N,L,R)
		var primeNumbers = allPrimeNumbers(N);
		var ans = {};
		for(var j=L;j<=R;j++){
			for(k=0;k<primeNumbers.length;k++){
				if(j%primeNumbers[k]==0){
					if(!ans.hasOwnProperty(j)){
						ans[j] = true
						break;
					}
				}
			}
			// if(j in primeNumbers){
			// 	if(!ans.hasOwnProperty(j)){
			// 		ans[j] = true
			// 	}
			// }
		}

	}
//    process.stdout.write("Hello World!");
}
function allPrimeNumbers(n){
	var flag;
	var primeNumbers = [];
	 
	for(i=2;i<=n;i++){
		flag =1 ;
		for(j=2;j<=i/2;j++){
			if(i%j===0){
				flag = 0 ;
				break;
			}
		}
		if(flag){
			primeNumbers.push(i);
		}
	}
	return primeNumbers;
}
str = "2\n5 1 10\n10 10 20";
main(str);
arr = [2,3,5,7];

function allPossibleVal(){
	
}
