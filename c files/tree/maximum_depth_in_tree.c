// http://www.geeksforgeeks.org/write-a-c-program-to-find-the-maximum-depth-or-height-of-a-tree/
// 
/*
Algorithm:
1. if tree is empty then return 0.
2. else height is 1(root) + max of left subtree height and right subtree height
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
int max(int val1, int val2){
	return (val1>val2? val1: val2);
}

int maxHeight(struct node *tree){
	if(tree == NULL){
		return 0;
	}else if(tree->left==NULL && tree->right==NULL){
		return 0;
	}
	else{
		return 1 + max(maxHeight(tree->left),maxHeight(tree->right));
	}
}
int main(){
	struct node *tree = NewNode(1);
	tree->left = NewNode(2);
	tree->right = NewNode(3);
	tree->left->left = NewNode(4); 
	tree->left->right = NewNode(5); 
	int height = maxHeight(tree);
	printf("Height of tree = %d\n", height);
	return 0;
}
