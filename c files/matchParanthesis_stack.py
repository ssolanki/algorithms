class Stack:
    def __init__(self):
        self.items = []

    def isEmpty(self):
        return self.items == []

    def push(self, item):
        self.items.append(item)

    def pop(self):
        return self.items.pop()


def isPairMatched( ch1, ch2):
    if (ch1 == '(' and ch2 == ')'):
        return 1
    else:
        return 0
 
def balanceParenthesis(exp):
    i = 0
    stack = Stack()
    str = ""
    while (i< len(exp)):
        if (exp[i] == '('):
            stack.push(exp[i])
            str += exp[i] 
        if (exp[i] == ')'):
            if (stack.isEmpty()):
                # print "stack empty"
                str = '(' + str + exp[i]
            else:
                elem = stack.pop()
                str =  str + exp[i]     
        i+=1
    while (not stack.isEmpty()):
        str =  str + ')'
        stack.pop()

    return str    

exp = "))(("  
print balanceParenthesis(exp)
    