let numbers = [];
let count = 0;
let sum = 0;

while (count < 10) {
    let num = Number(prompt(`Enter number ${count + 1}:`));
    numbers.push(num); 
    sum += num; 
    count++; 
}

let average = sum / count;
console.log("Entered numbers:", numbers);
console.log("Arithmetic Mean:", average);
