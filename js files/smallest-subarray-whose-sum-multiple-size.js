// http://www.geeksforgeeks.org/smallest-subarray-whose-sum-multiple-size/
function minSizeSubArray(arr){
	var n = arr.length,i,sum=0,mod=[],curLen=n+1,minLen=n+1,l,r;
	for(i=0;i<n;i++){
		mod[i] = -1;
	}
	for(var i=0;i<n;i++){
		sum = (sum+arr[i])%n;
		if(sum==0&&mod[sum]==-1){curLen = i + 1;}
		if (mod[sum] != -1)
      curLen = i - mod[sum];
		//  choose minimum length of subarray till now
    if (curLen < minLen)
    {
        minLen = curLen;
        //  update left and right indices of subarray
        l = mod[sum] + 1;
        r = i;
    }
    mod[sum] = i;
	}
	console.log(l,r,arr[l],arr[r])
}
arr = [2, 1, 2, 2, 4, 2];
console.log(minSizeSubArray(arr));
