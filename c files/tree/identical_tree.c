// http://www.geeksforgeeks.org/write-c-code-to-determine-if-two-trees-are-identical/

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
int identicalTrees(struct node* tree1,struct node* tree2){
	if(tree1==NULL && tree2==NULL){
		return 1;
	}else if((tree1==NULL && tree2!=NULL)||(tree1!=NULL && tree2==NULL)){
		return 0;
	}else{
		int temp1 = identicalTrees(tree1->left,tree2->left);
		int temp2 = identicalTrees(tree1->right,tree2->right);
		int temp3 = (tree1->data==tree2->data);
		return temp1 && temp2 && temp3;
	}
	return 1;	
}
int main(){
	struct node *tree1 = NewNode(1);
	struct node *tree2 = NewNode(2);
	tree1->left = NewNode(2);
	tree2->left = NewNode(1);
	tree1->right = NewNode(4);
	tree2->right = NewNode(2); 
	if(identicalTrees(tree1,tree2)){
		printf("Both trees are identical\n");
		return 1;
	}
	printf("Not identical!\n");
	return 0;
}