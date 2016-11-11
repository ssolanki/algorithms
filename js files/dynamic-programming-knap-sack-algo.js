// http://www.geeksforgeeks.org/dynamic-programming-set-10-0-1-knapsack-problem/
// 
/* Given:
*	 Val[0....n] , w[0....n]
*  and W (knapsack capacity)
*/ 

// O(n!) ALGO
function knapsack(val,wt,W,n){
	console.log('called')
	if(n==0||W==0){
		return 0;
	}
	if(wt[n-1]>W){
		return knapsack(val,wt,W,n-1);		
	}else{
		return Math.max(val[n-1]+knapsack(val,wt,W-wt[n-1],n-1), knapsack(val,wt,W,n-1));
	}
}


// O(n!) ALGO
function knapsackOptimum(val,wt,W,n){
	var k=create2DArray(n+1);
	// console.log(k)
	for(var i = 0;i<=n;i++){
		for(var w = 0;w<=W;w++){
			if(i==0||w==0){
				k[i][w] = 0;				
			}else if(wt[i-1]<=w){
				// i,w will be max of (if when we include that val and find W-wt[i1]) and (exclude it and find W in rest)
				k[i][w] = Math.max(val[i-1]+k[i-1][w-wt[i-1]],k[i-1][w]);
			}else{
				k[i][w] = k[i-1][w];
			}
		}
	}
	console.log(k);
	console.log(k[n][W]);
	return k[n][W];
}
// O(nW) algo
function create2DArray(n){
	var arr = [];
	for(var i = 0;i<n;i++){
		arr[i] = [];
	}
	return arr;
}
val = [60, 100, 120];
wt = [25, 10, 20];
W = 50;
// var val = knapsack(val,wt,W,val.length);
var val = knapsackOptimum(val,wt,W,val.length);
console.log(val);