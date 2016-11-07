// check half filled sudoku is valid or not
// amazon interview 3/11/16
// 
// Algo:
// 1. suppose empty block are 0
// 2. check if row is valid, check column is valid
// 3. check square is valid or not

function isValidSudoku(arr){

	// row check
	for(var i=0;i<9;i++){
		var map = {},count=9;
		for(var j=0;j<9;j++){
			if(arr[i][j]>=1&&arr[i][j]<=9){
				if(map.hasOwnProperty(arr[i][j]))
					return false;	
				map[arr[i][j]] = true;
				count--;
			}else if (arr[i][j]==0){
				map[arr[i][j]] = true;				
				count--;
			}
		}
		if(count) return false
	}
	// column check
	for(var i=0;i<9;i++){
		var map = {},count=9;
		for(var j=0;j<9;j++){
			if(arr[j][i]>=1&&arr[j][i]<=9){
				if(map.hasOwnProperty(arr[j][i]))
					return false;	
				map[arr[j][i]] = true;
				count--;
			}else if (arr[j][i]==0){
				map[arr[j][i]] = true;				
				count--;
			}
		}
		if(count) return false
	}
	

	return true;
}
M1 = [
	[8,3,5,0,1,6,9,2,7],
	[2,9,6,8,5,7,4,3,1],
	[4,1,7,2,9,3,6,5,8],
	[5,6,9,1,3,4,7,8,2],
	[1,2,3,6,7,8,5,4,9],
	[7,4,8,5,2,9,1,6,3],
	[6,5,2,7,8,1,3,9,4],
	[9,0,2,3,4,5,0,7,6],
	[3,7,4,9,6,2,8,1,5]	
	];
console.log(isValidSudoku(M1));