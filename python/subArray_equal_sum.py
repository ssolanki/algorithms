#!/usr/bin/python
# http://www.geeksforgeeks.org/find-if-array-can-be-divided-into-two-subarrays-of-equal-sum/
# 

def isSubArray(arr):
	size = len(arr)
	sum1 = arr[0]
	sum2 = arr[size-1]
	i, j= 1, size-2
	while(i<=j): 
		if(sum1 > sum2):
			sum2 += arr[j]
			j -=1
		elif(sum1 < sum2):
			sum1 += arr[i]	
			i += 1	
		elif(sum1==sum2 and i!=j):
			sum1 += arr[i]
			i += 1
			j -= 1
		elif(sum1==sum2 and i==j):
			print "array is divided at index " + str(i)
			return;
	print -1	
arr = raw_input("Enter all numbers:\t") 
arr = [int(i) for i in arr.split()] 
isSubArray(arr)