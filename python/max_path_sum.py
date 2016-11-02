# Python program to find maximumpath sum between two leaves
# of a binary tree
# incorrect right now 
INT_MIN = -2**32
class Node:
	def __init__(self, data):
		self.data = data
		self.left = None
		self.right = None


def maxPathSum(tree,res): 
	if(tree==None):
		return 0;
	if(tree.left==None and tree.right==None):
		return tree.data;
	leftSum ,rightSum = maxPathSum(tree.left,res), maxPathSum(tree.right,res);

	if tree.left !=None and tree.right !=None:
		maxSum = tree.data +  max(leftSum , rightSum);
		res[0] = max(res[0] , leftSum+ rightSum+ tree.data);
		return maxSum;
	elif(tree.left==None):
		return tree.data + rightSum;
	elif(tree.right==None):
		return tree.data + leftSum;

def max(val1,val2):
	if val1 > val2 :
		return val1
	return val2

tree = Node(10);
tree.left = Node(2);
tree.left.left = Node(20);
tree.left.right = Node(1);  

tree.right = Node(10);
tree.right.right = Node(-25); 
tree.right.right.left = Node(3); 
tree.right.right.right = Node(4);  
res = [INT_MIN]
maxPathSum(tree,res)
print "Max pathSum of the given binary tree is", res[0]