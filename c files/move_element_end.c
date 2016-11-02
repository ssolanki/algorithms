#include <stdio.h>
#define NA -1
void moveToEnd(int arr[], int size);
int main(int argc, char const *argv[])
{
	int m,n;
	printf("Enter values of m(total elements) and n(NA elements):\n");
	scanf("%d%d",&m,&n);
	printf("Give all sorted %d elements:\n",m+n);
	int i, arr[m+n],j=m+n-1;
	for(i=0;i<m+n;i++){
		scanf("%d",&arr[i]);
	}
	moveToEnd(arr,m+n);

	/* code */
	return 0;
}
void moveToEnd(int arr[], int size){
	int i, j=size-1;
	for(i=size-1;i>=0;i--){
		if(arr[i]!=NA){
			arr[j] = arr[i];
			arr[i] = -1;
			j--;
		}
	}
	printf("elements after moving at the end are:\n");
	for(i=0;i<size;i++){
		printf(" %d",arr[i]);
	}
	printf("\n");	
}