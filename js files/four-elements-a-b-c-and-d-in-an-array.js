// http://www.geeksforgeeks.org/find-four-elements-a-b-c-and-d-in-an-array-such-that-ab-cd/

// in array we need to find out a + b = c + d;
// 1 2 3 6 8 10
// Algo: 
// O(n^2) algo using hash

function equalPairSum(arr){
	var n = arr.length,map={},flag=0;
	for(var i = 0;i<n;i++){
		for(var j= i+1;j<n;j++){
			var sum = arr[i]+ arr[j];
			if(map.hasOwnProperty(sum)){
				map[sum].push(arr[i],arr[j]);
				console.log(map[sum]);
				flag = 1;
				break;
			}else{
				// console.log([arr[i],arr[j]])
				map[sum] = [arr[i],arr[j]];
			}
		}
		if(flag){
			break;
		} 
	}
}

arr = [3, 4, 7, 1, 2, 9, 8];
equalPairSum(arr);