/*
There are N gas stations along a circular route, where the amount of gas at station i is gas[i].

You have a car with an unlimited gas tank and it costs cost[i] of gas to travel from station i to its next station (i+1). You begin the journey with an empty tank at one of the gas stations.

Return the minimum starting gas station’s index if you can travel around the circuit once, otherwise return -1.

You can only travel in one direction. i to i+1, i+2, ... n-1, 0, 1, 2..
Completing the circuit means starting at i and ending up at i again.
 */

canCompleteCircuit = function(A, B){
  var i=0,index=0,gasInTank=0,flag=0,count=0,n=A.length,rm = [],sum=0;
  for(i=0;i<n;i++){rm[i]=A[i]-B[i];sum+=rm[i]}
  	if(sum<0) return -1;
  i = 0;
  while(!flag){
  	// console.log(i);
      gasInTank += A[i]; 
      if(gasInTank<B[i]){
		      // console.log(i);
          index = (i+1);
          count = 0;
          gasInTank  = 0;
      }else{
          gasInTank  -= B[i]; 
          count++;
      }
      // console.log(gasInTank);
      i= (i+1)%n;
      if(index==n) return -1;
      if(count==n) return index;
  }
  // console.log(JSON.stringify(rm),sum)
}
// gas = [ 959, 329, 987, 951, 942, 410, 282, 376, 581, 507, 546, 299, 564, 114, 474, 163, 953, 481, 337, 395, 679, 21, 335, 846, 878, 961, 663, 413, 610, 937, 32, 831, 239, 899, 659, 718, 738, 7, 209 ];
// cost = [ 862, 783, 134, 441, 177, 416, 329, 43, 997, 920, 289, 117, 573, 672, 574, 797, 512, 887, 571, 657, 420, 686, 411, 817, 185, 326, 891, 122, 496, 905, 910, 810, 226, 462, 759, 637, 517, 237, 884 ];
// -1
gas=[0];
cost=[0];
console.log(canCompleteCircuit(gas,cost));