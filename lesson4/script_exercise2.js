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
    for (let i=0 ; i < MSFTStockClosingPrices.length; i++){
        totalSum += MSFTStockClosingPrices [i]["Monday"]+ // without +, need to repeat totalSum += for all the remaining lines
                    MSFTStockClosingPrices [i] ["Tuesday"]+
                    MSFTStockClosingPrices [i] ["Wednesday"]+
                    MSFTStockClosingPrices [i] ["Thursday"]+
                    MSFTStockClosingPrices [i] ["Friday"];
    }
    console .log ("The total sum of closing prices of MSFT is " + totalSum.toFixed(2));
    

