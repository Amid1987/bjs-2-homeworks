"use strict"
function solveEquation(a, b, c) {
  let arr = [];

  let firstRoot, secondRoot;

  let d = (b ** 2) - (4 * a * c);

  if (d > 0) {
    firstRoot = (-b + Math.sqrt(d)) / (2 * a);
    secondRoot = (-b - Math.sqrt(d)) / (2 * a);
    arr.push(firstRoot, secondRoot);

  } else if (d === 0) {
    firstRoot = -b / (2 * a);
    arr.push(firstRoot);
  } else {
  }
  return arr;
}
let calculateTotalMortgage = (percent, contribution, amount, countMonths) => {
  if (isNaN(percent) === true ||
      isNaN(contribution) === true ||
      isNaN(amount) === true ||
      isNaN(countMonths) === true) {
    return false
  } else {
    percent = (percent / 100) / 12;
    let s = amount - contribution;
    let pay = s * (percent + (percent / (((1 + percent) ** countMonths) - 1)));
    let totalAmount = (pay * countMonths);
    return Number(totalAmount.toFixed(2));
  }
}; 


