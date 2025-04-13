// 1.Verilmis arrayde tekrarlanan reqemleri silmek ve tekrar reqemlerin sayini gostermek.

let arr = [1, 2, 3, 4, 5, 1, 2, 3, 4, 5];
let uniqueArr = [];
let count = {};
for (let i = 0; i < arr.length; i++) {
    if (!uniqueArr.includes(arr[i])) {
        uniqueArr.push(arr[i]);
        count[arr[i]] = 1;
    } else {
        count[arr[i]]++;
    }
}

console.log(uniqueArr);


//  2.Verilmis sozun polindrom olub olmadığını yoxlayan alqoritm yazmaq. 
let word = "racecar";
let isPalindrome = true;
for (let i = 0; i < word.length / 2; i++) {
    if (word[i] !== word[word.length - 1 - i]) {
        isPalindrome = false;
        break;
    }
}
if (isPalindrome) {
    console.log(word + "Bu palindromdur");
}
else {
    console.log(word + " BU palindrom deyil");
}


// 3. Girilen ededin verilmis arreyde nece elementden kicik oldugunu yazan alqoritim.

let num = 3;
let array = [1, 2, 3, 4, 5];
let countLessThanNum = 0;
for (let i = 0; i < array.length; i++) {
    if (array[i] < num) {
        countLessThanNum++;
    }
}
console.log("Girilen ededden kicik olan elementlerin sayi: " + countLessThanNum);



// 4.customers  array-in icindeki objectlerdeki hobbileri array-in reduce metodundan istifade ederek yazdirmaq.


const customers = [
  {
    name: "Tyrone",
    personal: {
      age: 33,
      hobbies: ["Bicycling", "Camping"],
    },
  },
  {
    name: "Elizabeth",
    personal: {
      age: 25,
      hobbies: ["Guitar", "Reading", "Gardening"],
    },
  },
  {
    name: "Penny",
    personal: {
      age: 36,
      hobbies: ["Comics", "Chess", "Legos"],
    },
  },
];

const hobbies = customers.reduce((acc, customer) => {
  return acc.concat(customer.personal.hobbies);
}
, []);

console.log(hobbies);


// 5.Random reqemlerden ibaret array yaratmaq,en boyuk ve en kicik elemanlar,ortalamani,toplami ve elemanlarin kvadratini tapmaq(Math metodlarindan istifade ederek)

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}
let randomArray = [];
for (let i = 0; i < 10; i++) {
    randomArray.push(getRandomInt(1, 100));
}
let max = Math.max(...randomArray);
let min = Math.min(...randomArray);
let sum = randomArray.reduce((a, b) => a + b, 0);
let average = sum / randomArray.length;
let squares = randomArray.map(num => num * num);
console.log("Random Array: " + randomArray);
console.log("Max: " + max);
console.log("Min: " + min);
console.log("Sum: " + sum);
console.log("Average: " + average);
console.log("Squares: " + squares);
