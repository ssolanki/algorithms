#!/usr/bin/python

# Maximum sum such that no two elements are adjacent
# http://www.geeksforgeeks.org/maximum-sum-such-that-no-two-elements-are-adjacent/

 		

def findMaxSum(arr):
	size = len(arr)
	incl, excl = arr[0], 0
	for i in range(1,size):
		if (incl>excl):
			excl_new =  incl
		else: 
			excl_new = excl
		incl_new = excl + arr[i]
		incl, excl = incl_new, excl_new

	if (incl>excl):
			return incl
	return excl
arr = raw_input("Enter all numbers:\t") 
arr = [int(i) for i in arr.split()] 
sum = findMaxSum(arr) # O(n) time complexity 
print "Maximum sum such that no two elements are adjacent from Optimized algo is:\t"+str(sum)

