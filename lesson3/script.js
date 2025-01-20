const DayOneClosingPrice = "87.14";
const DayTwoClosingPrice = "84.22";

// Do not modify anything above
// Write your code below

let DayOneClosingPriceFloat = parseFloat(DayOneClosingPrice);
let DayTwoClosingPriceFloat = parseFloat(DayTwoClosingPrice);

let totalsum = DayOneClosingPriceFloat + DayTwoClosingPriceFloat
let totalCount = 2;

let average = totalsum / totalCount ;

console.log(average);
