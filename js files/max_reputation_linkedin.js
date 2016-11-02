a= [1,1];
b = [-1,-1];
k = 2;
function maxReputation(a,b,k){

	var ans = 0;
	var maxb = -1000000000;
	var tempa = 0;
	var n = a.length;
	for(i=0;i<n;i++)
	{
		tempa=a[i];
	  ans+=(tempa*b[i]);
		if(b[i]<0)
			b[i]=-b[i];
		if(b[i]>maxb)
			maxb=b[i];
	}
		tempa=k;
		ans+=(maxb*tempa);
		console.log(ans);

}
maxReputation(a,b,k);