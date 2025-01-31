function getBetween() {
	const MSFTStockClosingPrices = [254.12, 253.12, 256.97, 257.52, 258.93];
	
	// Expected Output = Number of closing prices between 254 and 257: 2
    // Write your code below
	// ...
	// ...
	// ...

let totalCount = 0;
for (let price of MSFTStockClosingPrices) {
	if ((price > 254) && (price < 257)) {
totalCount += 1;
	}
	
	}
	console.log ("Number of closing prices between 254 and 257: " + totalCount);


}

getBetween();
