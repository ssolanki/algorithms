# problem: http://www.geeksforgeeks.org/write-a-c-program-that-given-a-set-a-of-n-numbers-and-another-number-x-determines-whether-or-not-there-exist-two-elements-in-s-whose-sum-is-exactly-x/
# trivial is sort

def checkSumInArray1(array,sum):
    temp = array[:]
    print temp.sort()
    print array

def checkSumInArray2(array,sum):
    print array
arr = [3,5,6,8,1,2,9,12,7,3];
x = 15;
checkSumInArray1(arr,x);
checkSumInArray2(arr,x);
