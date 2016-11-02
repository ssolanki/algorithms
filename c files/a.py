def getBalancedString(str):
	count = prefix = 0
	for i in range(len(str)):
		if str[i] == '(':
			count+=1
		else:
			count-=1

		if(count<0):
			prefix += 1
			count = 0
	if(prefix):
		tmp = '('*prefix
		str = tmp + str
	if(count):
		tmp = count* ')'
		str += tmp
	return str

str = "(((()("
print getBalancedString(str);
