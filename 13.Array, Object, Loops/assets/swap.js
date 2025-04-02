let arr = [203, 19, 2, 13, 196, 86, 35, 77];
let minIndex = arr.indexOf(Math.min(...arr));
let maxIndex = arr.indexOf(Math.max(...arr));

[arr[minIndex], arr[maxIndex]] = [arr[maxIndex], arr[minIndex]];

console.log(`Swapped array: ${arr}`);
