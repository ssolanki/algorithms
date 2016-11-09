// https://www.hackerrank.com/challenges/connected-cell-in-a-grid
// Not working properly
// No finished yet


function maxCells(mat,m,n){
	var connectedPositionsX=[],connectedPositionsY=[],count=0;
	var adjCount = [];
	//init the grid matrix
	for ( var i = 0; i < m; i++ ) {
	    adjCount[i] = []; 
	    for ( var j = 0; j < n; j++ ) {
			    adjCount[i][j] = 0; 
			}
	}
	for(var i = 0 ; i < m ;i++){
		for(var j = 0 ; j < n ;j++){
				if(mat[i][j]==1){
					if (CheckIfConnected(i, j, mat,m,n,adjCount))
	         {
	            connectedPositionsX.push(i);
	            connectedPositionsY.push(j);
	         }
				}
		}	
	}
	console.log(connectedPositionsX)
	console.log(connectedPositionsY)
	console.log(adjCount)
}
function CheckIfConnected(x, y, arr,m,n,adjCount){	
	if ((m >= 2) || (n >= 2))
	{
	  if ((x < m) && (x >= 0) && (y < n) && (y >= 0))
	  {
	    if ((x-1) >= 0) //West
	    {
	        if (arr[x-1][y] == 1)
	        {
	            adjCount[x-1][y] += 1;
	            return true;
	        }
	    }
	    if (((x-1) >= 0) && ((y-1) >= 0)) //Northwest
	    {
	        if (arr[x-1][y-1] == 1)
	        {
	            adjCount[x-1][y-1] += 1;
	            return true;
	        }
	    }
	    if ((y-1) >= 0) //North
	    {
	        if (arr[x][y-1] == 1)
	        {
	            adjCount[x][y-1] += 1;
	            return true;
	        }
	    }
	    if (((x+1) < m) && ((y-1) >= 0)) //Northeast
	    {
	        if (arr[x+1][y-1] == 1)
	        {
	            adjCount[x+1][y-1] += 1;
	            return true;
	        }
	    }
	    if ((x+1) < m) //East
	    {
	        if (arr[x+1][y] == 1)
	        {
	            adjCount[x+1][y] += 1;
	            return true;
	        }
	    } 
	    if (((x+1) < m) && ((y+1) < n)) // SouthEast
	    {
	        if (arr[x+1][y+1] == 1)
	        {
	            adjCount[x+1][y+1] += 1;
	            return true;
	        }
	    }
	    if (((x-1) >= 0) && ((y+1) < n)) // SouthWest
	    {
	        if (arr[x-1][y+1] == 1)
	        {
	            adjCount[x-1][y+1] += 1;
	            return true;
	        }
	    }
	  }
	}
	return false;
}
var n = 4,m = 4;
var mat = [[1,1,0,1],[0,1,1,0],[0,0,1,0],[1,0,0,1]];
maxCells(mat, m, n);
// expected output is 5 in this case
/*
1 1 0 1
0 1 1 0
0 0 1 0
1 0 0 1

0 0 1 1 2
0 1 1 2 2

[ 1, 2, 0, 0 ]
[ 0, 1, 1, 0 ]
[ 0, 0, 0, 0 ]
[ 0, 0, 0, 0 ]
 */