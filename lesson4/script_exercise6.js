const MSFTStockClosingPrices = [254.12, 253.12, 256.97, 257.52, 258.93];
const AAPLStockClosingPrices = [256.45, 255.25, 259.10, 260.75, 261.88];


// Write your code below
// Expected Output = Closing price of MSFT between 254 to 257: 2 Days
// Expected Output = Closing price of AAPL between 254 and 257: 2 Days

function countBetween (stockClosingPrices,stockName){

let totalCount = 0;
for (let price of stockClosingPrices){
    if (price >254 && price <257){
        totalCount +=1;
    }
}
console.log ("Closing price of " + stockName + " between 254 and 257: " + totalCount + " Days");
}

countBetween (MSFTStockClosingPrices,"MSFT");
countBetween (AAPLStockClosingPrices, "AAPL");
