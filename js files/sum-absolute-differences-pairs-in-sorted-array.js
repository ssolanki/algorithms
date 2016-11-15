// http://www.geeksforgeeks.org/sum-absolute-differences-pairs-given-array/

function absPairSum(arr){
	var sum = [],i,n=arr.length,ans=0,sum_i=0;
	for(i=1;i<n;i++){
		sum_i = (i)*(arr[i]-arr[i-1])+sum_i;
		ans += sum_i;
	}
	// console.log(ans);
	return ans;
}

arr = [1, 2, 3, 4];
// arr = [1, 8, 9, 15, 16];
// arr = [1, 2, 3, 4, 5, 7, 9, 11, 14];
console.log(absPairSum(arr));
// 