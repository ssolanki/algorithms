// http://www.geeksforgeeks.org/write-a-c-program-to-find-the-maximum-depth-or-height-of-a-tree/
// 
/*
Algorithm:
1. if tree is empty then return 0.
2. else size is 1(root) + size of left subtree + size of right subtree
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

int sizeOfTree(struct node *tree){
	if(tree == NULL){
		return 0;
	}
	else{
		return 1 + sizeOfTree(tree->left)+ sizeOfTree(tree->right);
	}
}
int main(){
	struct node *tree = NewNode(1);
	tree->left = NewNode(2);
	tree->right = NewNode(3);
	tree->left->left = NewNode(4); 
	tree->left->right = NewNode(5); 
	int size = sizeOfTree(tree);
	printf("Size of tree = %d\n", size);
	return 0;
}
