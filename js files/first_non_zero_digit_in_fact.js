// Find the first non-zero digit starting from right in n!
// 
function nonZeroDigitInFact(n){
	var fact = 1,lastDigit=1, i = n;
	while(i>0){
		fact *= i;
		i--;
	}
	return [fact]
}

console.log(nonZeroDigitInFact(10));