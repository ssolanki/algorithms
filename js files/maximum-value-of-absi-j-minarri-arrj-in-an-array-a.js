// http://www.geeksforgeeks.org/find-maximum-value-of-absi-j-minarri-arrj-in-an-array-arr/
// 

function maxAbsValue(arr){

	var left = 0,right = arr.length-1,maxProduct = -100000000;
	while(left<right){
		var currProduct;
		if(arr[left]< arr[right]){
			currProduct = arr[left]* (right-left);
			left++;
		}
		else{
			currProduct = arr[right]* (right-left);
			right--;
		}
		maxProduct = Math.max(currProduct,maxProduct);
	}
	console.log("max product is",maxProduct);
}

arr = [8,1,9,4];
maxAbsValue(arr);