#!/usr/bin/python
# http://www.geeksforgeeks.org/largest-product-subarray-size-k/
# 
# next product at index i can calculated as prev_prod*arr[i+k]/arr[i-1]
# 

# assuming n>=k
def maxProductSubArray(arr,size,k):
	prev_prod = 1
	for i in range(k):
		prev_prod *= arr[i]
	max_prod,max_prod_index  = prev_prod,0	
	if(k==size):
		print max_prod
		return
	for i in range(1,size-k):
		new_prod = (prev_prod * arr[i+k-1])/arr[i-1]
		if new_prod > max_prod:
			max_prod, max_prod_index = new_prod, i
		prev_prod = new_prod	 

	print "max prod is : " + str(max_prod) + " at the index "+ str(max_prod_index)

arr = raw_input("Enter all numbers:\t") 
arr = [int(i) for i in arr.split()] 
k = int(raw_input("Value of k:\t"))
maxProductSubArray(arr,len(arr),k)