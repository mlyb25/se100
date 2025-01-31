const StockDailyPerformance = [3.1, 2.4, 1.1, 2.8, 4.5, 2.7]

//Expected Output = Sorted daily performance: [1.1, 2.4, 2.7, 2.8, 3.1, 4.5]
// Write your code below
// ..
// ..
// ..

// Do not modify this code:
sortNumbersAscending(StockDailyPerformance);

function sortNumbersAscending (data){
return data.sort ();

}

let result = sortNumbersAscending (StockDailyPerformance);
console.log(result);

