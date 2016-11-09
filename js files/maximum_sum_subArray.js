// http://www.geeksforgeeks.org/largest-sum-contiguous-subarray/

// Contiguous Subarray MaxSum in O(n)
function maxSumSubArray(arr){
	var max_so_far = arr[0],max_here = arr[0];
	for(var i = 1; i<arr.length;i++){
		max_here += arr[i];	
		// to handle -ve numbers
		if(max_here < arr[i]){
			max_here = arr[i];
		}
		if(max_so_far < max_here){
			max_so_far = max_here;
		}
	}
	console.log(max_so_far);
	return max_so_far;
}

arr = [-2, -3, 4, -1, -2, 1, 5, -3]
maxSumSubArray(arr);