// http://www.geeksforgeeks.org/dynamic-programming-set-17-palindrome-partitioning/
// 

// Given a string, a partitioning of the string is a palindrome partitioning if every substring of the partition is a palindrome. 
// For example, “aba|b|bbabb|a|b|aba” is a palindrome partitioning of “ababbbabbababa”. 
// Determine the fewest cuts needed for palindrome partitioning of a given string. 
// For example, minimum 3 cuts are needed for “ababbbabbababa”. The three cuts are “a|babbbab|b|ababa”

// Recursive Algo O(n!) time
function minCutPalidrome1(str,i,j){
	// console.log("called")
	if(i==j) return 0;
	if(isPalindrome(str,i,j)) return 0;
	var minCut = -1;
	for(var k = i; k<j;k++){
		var cutLength = (minCutPalidrome1(str, i, k) + 1 + minCutPalidrome1(str, k+1, j));
		if(minCut>cutLength || minCut==-1) minCut = cutLength;
	}
	return minCut;
}

// O(n^2 space algo), O(n^3) algo
function minCutPalidrome2(str){
	var INT_MAX = 10000;
	var n = str.length;
	var Pal = create2DArray(n); // set if str[i..j] is palindrome
	var Cut = create2DArray(n); //Minimum number of cuts needed for palindrome partitioning of substring str[i..j]                
	console.log(Pal,Cut)
	for(var i = 0;i<n;i++){
		Pal[i][i] = true;
		Cut[i][i] = 0;
	}
	// now for each possible length we will set values in Pan and cut
	for(var L = 2; L<= n;L++){
		// For substring of length L, set different possible starting indexes
		for(var i = 0; i< n-L+1;i++){
				// end index
				var j = i + L - 1;
				if(L==2){
					Pal[i][j] = (str[i] == str[j]);
				}else
					Pal[i][j] = (str[i] == str[j])&&Pal[i+1][j-1];
				// if palindrome no cut
				if(Pal[i][j]) Cut[i][j]	= 0;
				else{
					Cut[i][j] = INT_MAX;
					for (k=i; k<=j-1; k++)
            Cut[i][j] = Math.min(Cut[i][j], Cut[i][k] + Cut[k+1][j]+1);
				}
		}
	}
//	console.log(Cut)
	return Cut[0][n-1];
}

// O(n^2 space algo), O(n^2) algo
function minCutPalidrome3(str){
	var INT_MAX = 10000;
	var n = str.length;
	var Pal = create2DArray(n); // set if str[i..j] is palindrome
	var Cut = []; // Minimum number of cuts needed for palindrome partitioning of substring str[0..i]               
	console.log(Pal,Cut)
	for(var i = 0;i<n;i++){
		Pal[i][i] = true;
	}
	// now for each possible length we will set values in Pan and cut
	for(var L = 2; L<= n;L++){
		// For substring of length L, set different possible starting indexes
		for(var i = 0; i< n-L+1;i++){
				// end index
				var j = i + L - 1;
				if(L==2){
					Pal[i][j] = (str[i] == str[j]);
				}else
					Pal[i][j] = (str[i] == str[j])&&Pal[i+1][j-1];
				// if palindrome no cut
		}
	}
	for (i=0; i<n; i++)
  {
      if (Pal[0][i] == true)
          Cut[i] = 0;
      else
      {
          Cut[i] = INT_MAX;
          for(j=0;j<i;j++)
          {
              if(Pal[j+1][i] == true && 1+Cut[j]<Cut[i])
                  Cut[i]=1+Cut[j];
          }
      }
  }				
	// console.log(Cut)
	return Cut[n-1];
}
function create2DArray(n){
	var arr = [];
	for(var i = 0;i<n;i++){
		arr[i] = []
	}
	return arr;
}
function isPalindrome(str,l,r){
	while(l<r){
		if(str[l]!==str[r])
			return false;
		l++;
		r--;
	}
	return true;
}
str = "ababbbabbababa";
// var minCut = minCutPalidrome1(str, 0, str.length-1);
var minCut2 = minCutPalidrome2(str, 0, str.length-1);
console.log(minCut2);