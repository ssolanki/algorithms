function max_i_j(arr){
	var min_arr = [], max_arr = [],i=0,j, n = arr.length;
	min_arr[0] = arr[0];
	for(i = 1; i< n; i++){		
		min_arr[i] = min(arr[i],min_arr[i-1]);
	}
	max_arr[n-1] = arr[n-1];
	for(j = n-2; j >= 0 ; --j){		
		max_arr[j] = max(arr[j],max_arr[j+1]);
	}	
	i =0,j = 0;
	var maxDiff = -1;
	while (j < n && i < n)
  {
    if (min_arr[i] < max_arr[j])
    {
        maxDiff = max(maxDiff, j-i);
        j = j + 1;
    }
    else
        i = i+1;
  }
  return maxDiff;
}

function min(a,b){
	return Math.min(a,b);
}
function max(a,b){
	return Math.max(a,b);
}
arr = [9, 2, 3, 4, 5, 6, 7, 8, 18, 0]
console.log(max_i_j(arr));