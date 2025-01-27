function getBetween() {
	const MSFTStockClosingPrices = [254.12, 253.12, 256.97, 257.52, 258.93];
	
	// Expected Output = Number of closing prices between 254 and 257: 2
    // Write your code below
	// ...
	// ...
	// ...

let totalSum = 0;
for (let value of MSFTStockClosingPrices) {
	if (value >= 254 && value <= 257) {
totalSum += 1;
	}
	
	}
	console.log ("Number of closing prices between 254 and 257: " + totalSum);


}

getBetween();
