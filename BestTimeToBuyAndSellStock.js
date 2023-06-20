var maxProfit = function(prices) {
	let maxProfit = 0; 

	for (let i = 0; i < prices.length; i++) {
			for (let j = i + 1; j < prices.length; j++) {
					const potentialProfit = prices[j] - prices[i];
					if (potentialProfit > maxProfit && maxProfit >= 0) {
							maxProfit = potentialProfit; 
					}
			}
	}
	return maxProfit; 
};


var maxProfit = function(prices) {
	let maxProfit = 0; 
	let i = 0;
	let j = 1;

	while (j < prices.length) {
			const profit = prices[j] - prices[i]; 
			if (profit > maxProfit && profit >= 0) {
					maxProfit = profit; 
			}

			if (prices[j] < prices[i]) {
					i = j; 
					j += 1;
			} else {
					j++ 
			}
	}
	return maxProfit; 
};