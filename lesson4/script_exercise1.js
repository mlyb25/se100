const MSFTStockClosingPrices = [254.12, 253.12, 256.97, 257.52, 258.93];

// Write your code below
// Expected Output = The total sum of closing prices of MSFT is 1280.66

let totalSum=0 ;
for (let i=0 ; i < MSFTStockClosingPrices.length ; i ++) {
    totalSum += MSFTStockClosingPrices [i];
}
console .log ("The total sum of closing prices of MSFT is " + totalSum.toFixed(2));
