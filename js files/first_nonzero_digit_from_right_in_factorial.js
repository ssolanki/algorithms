// Find the first non-zero digit starting from right in n!
// 
function nonZeroDigitInFact(n) {
	var fact = 1,
	    lastDigit = 1,
	    i = n;
	while (i > 0) {
		fact *= i;
		lastDigit = (lastDigit*i)%10==0? (lastDigit*i)/10: (lastDigit*i)%10;
		i--;
	}
	return [fact,lastDigit];
}

console.log(nonZeroDigitInFact(6));