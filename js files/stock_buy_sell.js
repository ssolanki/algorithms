// Stock Buy Sell to Maximize Profit
// http://www.geeksforgeeks.org/stock-buy-sell/

//algo: each time we have a highest selling value that will be included i.e minima to maxima need to be find out
arr = [100, 180, 260, 310, 40, 535, 695]

function maxProfit(arr){
	var profit = 0,n = arr.length;
	var buySell = [];
	var i  = 0;
	while(i<n-1){
		var minima,maxima;
		while(i<n-1 && arr[i]>=arr[i+1]){
			i++;
		}
		if(i==n-1)
			break;
		minima = i++;
		while(i<n && arr[i]>=arr[i-1]){
			i++;
		}
		maxima = i-1;	// as i++ will increase maxima index by 1
		buySell.push({"buy":minima,"sell":maxima});

		profit += arr[maxima]-arr[minima];
	}
	console.log("profit = ", profit);
	console.log(buySell);
}
maxProfit(arr);