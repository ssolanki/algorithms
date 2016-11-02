// http://www.geeksforgeeks.org/find-the-minimum-distance-between-two-numbers/

// keep latest x,y index and min_diff_so_far

var Inf = 100000;
function minDistance_XY(arr,x,y){
	var dist = Inf, x_lat,y_lat;
	for(i=0;i<arr.length;i++){
		if(arr[i]==x){
			x_lat = i;
		}
		if(arr[i]==y){
			y_lat = i;
		}
		if(x_lat!= undefined && y_lat!= undefined){
			console.log(x_lat,y_lat)
			dist = Math.min(Math.abs(y_lat - x_lat),dist);
		}
	}
	console.log(dist,x_lat,y_lat);
	return dist;
}

var arr = [2, 4, 3, 2, 4, 4, 5, 3];
var x = 3, y =2;
minDistance_XY(arr, x, y)