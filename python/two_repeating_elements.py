#!/usr/bin/python
# http://www.geeksforgeeks.org/find-the-two-repeating-elements-in-a-given-array/
# 
import math
# O(n) time complexity and O(n) Space 
def findRepeating1(arr):
	size = len(arr)
	count = [0] * size	# O(n) space
	for i in range(size):
		count[arr[i]] += 1	
		if count[arr[i]]==2:
			print arr[i]

def findRepeating2(arr):
	size, n = len(arr), len(arr)-2
	arr_sum, arr_fact = sum(arr), math.factorial(n)
	arr_mult = reduce(lambda x, y: x*y, arr) # O(n) 
	e_sum, e_mult = arr_sum - (n*(n+1))/2, arr_mult/arr_fact	# x+y and x.y calculated,x and y are repeated elements 
	D = math.sqrt(e_sum*e_sum-4*e_mult)
	x, y = int((e_sum + D)/2), int((e_sum - D)/2)
	print x, y
arr = raw_input("Enter all numbers:\t") 
arr = [int(i) for i in arr.split()] 
findRepeating1(arr)
findRepeating2(arr)