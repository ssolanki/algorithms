/*
*	Find maximum uniques sum of an array such that
*	all elements in sum should be different
*	for duplicate element you can next available number in sum
* 
 */
function maximumUniqueSum(arr){
	var sum = 0,lastVal=0;
	arr = arr.sort(function(a,b){
		return a-b;
	});
	for(var i = 0; i< arr.length;i++){
		var currVal = arr[i];
		if(lastVal>=currVal){
			console.log(currVal,lastVal);

			currVal = lastVal + 1;
		}
		sum+=currVal;
		lastVal = currVal;
		console.log(sum,currVal,lastVal);
	}
	return sum;
}

arr1 = [4,5,2];
arr2 = [2,2,2];
console.log(maximumUniqueSum(arr1));
console.log(maximumUniqueSum(arr2));