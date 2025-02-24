const MSFTStockClosingPrices = [
    {
        Monday: 254.12,
        Tuesday: 253.12,
        Wednesday: 256.97,
        Thursday: 257.52,
        Friday: 258.93
    },
    {
        Monday: 292.20,
        Tuesday: 289.73,
        Wednesday: 291.04,
        Thursday: 294.55,
        Friday: 296.29
    }]
    
    // Write your code below
    // Expected Output = The total sum of closing prices of MSFT is 2744.47

let totalSum=0;
for (let value of MSFTStockClosingPrices){
    totalSum += value["Monday"]+
                value["Tuesday"]+
                value["Wednesday"]+
                value["Thursday"]+
                value["Friday"];
}
   console.log("The total sum of closing prices of MSFT is " + totalSum.toFixed(2));
   


    //console.log("The total sum of closing prices of MSFT is " + totalSum.toFixed(2));

// Alternate
    // totalSum += value["Monday"];
    // totalSum += value["Tuesday"];
    // totalSum += value["Wednesday"];
    // totalSum += value["Thursday"];
    // totalSum += value["Friday"];