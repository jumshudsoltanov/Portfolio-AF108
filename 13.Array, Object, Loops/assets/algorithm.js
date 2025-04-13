let isNumber = prompt('Enter Number: ');
let count = 0;

for (let i = 0; i < isNumber.length; i++) {
    let digit = Number(isNumber[i]); 
    count += digit ** isNumber.length;
}

if (count == isNumber) {
    console.log(`${isNumber} is an Armstrong number.`);
} else {
    console.log(`${isNumber} is not an Armstrong number.`);
}