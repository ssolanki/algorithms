// http://www.geeksforgeeks.org/maximum-product-subarray-set-2-using-two-traversals/


function maxProductSubArray(arr){
	var maxProduct = arr[0], maxAbsProduct=arr[0],i;
	for(i=1;i<arr.length; i++){
		if(arr[i]==0){
			console.log("before 0",maxProduct,maxAbsProduct);
			 i++;
			 if(arr[i]>maxProduct){
 				 maxProduct = arr[i];
				 maxAbsProduct = arr[i];
			 }
		}else{
			if(maxProduct*arr[i]>maxProduct){
				maxProduct = maxProduct*arr[i];
				maxAbsProduct = maxProduct;
			}else{
				maxAbsProduct = maxAbsProduct*arr[i];
				if(maxAbsProduct>maxProduct){
					maxProduct = maxAbsProduct;
				}else if(arr[i]> maxProduct){
					maxProduct = arr[i];
				}
			}
		}
	}
	console.log(maxProduct,maxAbsProduct);
}
arr1 = [6, -3, -10, 0, 2];
maxProductSubArray(arr1);
arr2 = [-1, -3, -10, 0, 60];
maxProductSubArray(arr2);
arr3 = [-1, -2, -3, 4];
maxProductSubArray(arr3);