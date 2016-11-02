// Find the second largest and second smallest in a given array in single traversal.

function secondLargestAndSmallest(arr){
	var smallest1=arr[0],smallest2= 1000,largest1=arr[0],largest2=-1;
	if(arr.length<=1) return -1;
	for(var i=1 ;i<arr.length; i++){		
		if(arr[i]>smallest1 && arr[i]<smallest2){
			smallest2 = arr[i];
		}else if(arr[i]<smallest1){
			smallest2 = smallest1;
			smallest1 = arr[i];
		}
		if(arr[i]<largest1 && arr[i]>largest2){
			largest2 = arr[i];
		}else if(arr[i]>largest1){
			largest2 = largest1;
			largest1 = arr[i];
		}
	}
	return [smallest1,smallest2,largest1,largest2];
}

arr = [10,4]
console.log(secondLargestAndSmallest(arr));


