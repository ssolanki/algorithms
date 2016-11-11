// http://www.geeksforgeeks.org/dynamic-programming-set-7-coin-change/
// 

// m is number of coins, n is total count, O(n!)
function count(coins,m,n){
	if(n==0) return 1;
	if(n<0) return 0;
	if(m<= 0&& n >=1){return 0;}
	return count( coins, m - 1, n ) + count( coins, m, n-coins[m-1] );	
}

function countOptimal(coins,m,n){
	var mat = create2DArray(n+1);
	for(var i=0;i<m;i++){
		mat[0][i] = 1;
	}
	for(var i=1;i<=n;i++){
		for(var j=0;j<m;j++){

			var x = (i-coins[j] >= 0)? mat[i - coins[j]][j]: 0;
	    // Count of solutions excluding S[j]
	    var y = (j >= 1)? mat[i][j-1]: 0;

	    // total count
	    mat[i][j] = x + y;
		}
	}
	console.log(mat)
	return mat[n][m-1];
}
function create2DArray(n){
	var arr = [];
	for(var i = 0;i<n;i++){
		arr[i] = [];
	}
	return arr;
}
var coins = [1, 2, 3]
var m = 3;
var n = 4;
console.log(count(coins,m,n))
console.log(countOptimal(coins,m,n))