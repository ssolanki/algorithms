function squares(n1,n2){
	if(n1==0||n2==0) return 0;
	else{
		console.log("calling squares fn with args = ",n1,n2);
		var sq1,sq2,sq3;
		if(!f[n1-1][n2]){
			sq1 = squares(n1-1, n2);
			f[n1-1][n2] = sq1;
		}else{
			sq1 =  f[n1-1][n2];
		}
		if(!f[n1][n2-1]){
			sq2 = squares(n1, n2-1);
			f[n1][n2-1] = sq2;
		}else{
			sq2 =  f[n1][n2-1];
		}
		if(!f[n1-1][n2-1]){
			sq3 = squares(n1-1, n2-1);
			f[n1-1][n2-1] = sq3;
		}else{
			sq3 =  f[n1-1][n2-1];
		}
		var sq = 1+ sq1 + sq2 - sq3;
		f[n1][n2] = sq;
		return sq;		
	}
}
var n1 = 3 ,n2 = 3;
var iMax = n1
var jMax = n2;
var f = new Array();

for (i=0;i<iMax;i++) {
 f[i]=new Array();
 for (j=0;j<jMax;j++) {
  f[i][j]=0;
 }
}
console.log(squares(n1-1,n2-1));
console.log(f);