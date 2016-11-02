/*
 * C Program to Find All Possible Subsets of given Length in String
 */
#include <stdio.h>
#include <string.h>
 
char a[20];
int n, len, j;
void printCombination(char a[], int n,int len);
 
void main()
{
    int i ;
    printf("Enter the string\n");
    scanf("%s", a);
    n = strlen(a);
    // printf("enter input length\n");
    // scanf("%d", &len);
    printf("The subsets are\n");	
    for(i=1;i<=n;i++){
		  printCombination(a, n,4);
    }
}

void printCombination(char a[], int n,int len){
		int i, index = 0, start = 0; 
    for (i  =  1;i <= n;i++)
    { 
        if (index - start + 1  ==   i)
        {
            if (i  ==   len)
            {
                for (j  =  index;j < n;j++)
                {
                    for (i  =  start;i < index;i++)
                        printf("%c", a[i]);
                    		printf("%c\n", a[j]);
                }
                if (start != i)
                {
                    start++;
                    index = start;
                }
            }
            else
            {
                index++;
            }
        }
    }
    return;
}