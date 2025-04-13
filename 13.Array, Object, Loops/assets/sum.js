let arr = [203, 19, 2, 13, 196, 86, 35, 77];
let min = Math.min(...arr);
let max = Math.max(...arr);
let sum = arr.filter(num => num !== min && num !== max).reduce((a, b) => a + b, 0);

console.log(`Sum without min and max: ${sum}`);
