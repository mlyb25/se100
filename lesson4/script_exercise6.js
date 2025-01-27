const MSFTStockClosingPrices = [254.12, 253.12, 256.97, 257.52, 258.93];
const AAPLStockClosingPrices = [256.45, 255.25, 259.10, 260.75, 261.88];


// Write your code below
// Expected Output = Closing price of MSFT between 254 to 257: 2 Days
// Expected Output = Closing price of AAPL between 254 and 257: 2 Days

function countBetween (stockClosingPrices){

let result = 0;
for (let num of stockClosingPrices) {
    if ((num > 254) && (num < 257)){result += 1;}
}
console .log (result);

}

countBetween(MSFTStockClosingPrices);
countBetween(AAPLStockClosingPrices);
