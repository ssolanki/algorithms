// The problem is to count all the possible paths from top left to bottom right of a mXn matrix with the constraints that from each cell you can either move only to right or down
// 

function allPaths(m,n){
	if(m==1||n==1) return 1;
	// two side movement is there, if diagonal movement is also fine then add allPaths(m-1,n-1)
	return allPaths(m-1, n) + allPaths(m, n-1);
}
console.log(allPaths(2, 3));