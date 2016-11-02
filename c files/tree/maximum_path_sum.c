// 

/*
Algorithm:
1. if tree1,tree2 are both null then return true
2. return tree1->data = tree2->data and Identical(tree1->left,tree2->left) and Identical(tree1>right,tree2->right) 
3. if only one of the tree is null and not both return false
 */
#include <stdio.h>
#include <stdlib.h>

struct node{
	int data;
	struct node *left;
	struct node *right;
};

struct node* NewNode(int val)
{
	struct node *newnode = (struct node*) malloc(sizeof(struct node));
	newnode->data = val;
	newnode->left = NULL;
	newnode->right = NULL;
	return newnode;
}
int maxPathSum(struct node* tree, int *res){
	int maxSum;
	if(tree==NULL) return 0;
	if(tree->left==NULL && tree->right==NULL){
		return tree->data;
	}else if(tree->left==NULL){
		return tree->data + maxPathSum(tree->right,res);
	}else if(tree->right==NULL){
		return tree->data + maxPathSum(tree->left,res);		
	}else{
		int leftSum = maxPathSum(tree->left,res) ,rightSum = maxPathSum(tree->right,res);
		maxSum = tree->data +  (leftSum > rightSum ? leftSum: rightSum);
		*res = *res > (tree->data + leftSum + rightSum )? *res: tree->data+ leftSum+ rightSum;
		return maxSum;
	} 
}
int main(){
	struct node *tree = NewNode(10);
	tree->left = NewNode(2);
	tree->left->left = NewNode(20);
	tree->left->right = NewNode(1);  

	tree->right = NewNode(10);
	tree->right->right = NewNode(-25); 
	tree->right->right->left = NewNode(3); 
	tree->right->right->right = NewNode(4);  
	int res = -10000;
	if(1){
		printf("Both trees are identical %d %d\n",maxPathSum(tree,&res),res);
		return 1;
	}
	printf("Not identical!\n");
	return 0;
}