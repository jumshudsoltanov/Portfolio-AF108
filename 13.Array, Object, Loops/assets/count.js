let arr = [203, 19, 2, 13, 196, 86, 35, 77];
let oneDigit = arr.filter(num => num.toString().length === 1).length;
let twoDigit = arr.filter(num => num.toString().length === 2).length;
let threeDigit = arr.filter(num => num.toString().length === 3).length;

console.log(`One-digit numbers: ${oneDigit}`);
console.log(`Two-digit numbers: ${twoDigit}`);
console.log(`Three-digit numbers: ${threeDigit}`);
