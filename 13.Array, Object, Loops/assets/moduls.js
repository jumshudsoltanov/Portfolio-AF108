let num1 = Number(prompt('Enter first number: '));
let num2 = Number(prompt('Enter second number: '));

if (num2 !== 0) {
    console.log(`Modulus: ${num1 % num2}`);
} else {
    console.log('Cannot divide by zero!');
}
