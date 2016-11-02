def isDestructive(str):
	count = 0
	i , j, n = 0, 1, len(str) 
	ans = ""
	while(j<n):
		if(str[i]==str[j]):
			count+=2
			i -= 1;
		else:
			i+= 1
		j+=1 

		if(j==count):
			i=count
			j = i+1 

	if(count==n):
		return 1
	return 0	
str = "acdbbdca"
print isDestructive(str)