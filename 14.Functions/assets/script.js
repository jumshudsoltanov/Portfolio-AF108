// TODO: 1.Hər biri 2 parametr qəbul edib və riyazi əməlləri yerinə yetiren funksiya yazin.


// function calculate(a, b) {
//     let operation = prompt("Choose an operation: +, -, *, /");

//     switch (operation) {
//         case "+":
//             return a + b;
//         case "-":
//             return a - b;
//         case "*":
//             return a * b;
//         case "/":
//             if (b === 0) {
//                 return "Cannot divide by zero!";
//             }
//             return a / b;
//         default:
//             return "Invalid operation!";
//     }
// }

// let num1 = Number(prompt("Enter Number 1:"));
// let num2 = Number(prompt("Enter Number 2:"));

// console.log("Result:", calculate(num1, num2));




// TODO: 2.Verilen parametrlerde tek ve cutlerin tapilmasi.(Rest operatoru istifade etmek)(14, 20, 35, 40, 57, 60, 100)


// function sum (...args) {


// let odd = 0;
// let even = 0;

// for (let i = 0; i < args.length; i++) {
    
//     if (args[i] % 2 == 0) {
//         even++
//     }
//     else  {
//         odd++
//     }
// }

// return {even,odd}

// }

// console.log(sum(14, 20, 35, 40, 57, 60, 100))



// TODO: 3.Verilmis arreyde elementlerin həm 4-ə, həm də 5-ə bölününen elementlerin cemini tapin.[14, 20, 35, 40, 57, 60, 100]


// function  division(...args) {

// let num = 0;

// for (let i = 0; i < args.length; i++) {
    
//     if (args[i] % 4 == 0 && args[i] % 5 ==0) {
//         num+=args[i]
//     }
   
// }
// return{num}
// }
// let arry = [14, 20, 35, 40, 57, 60, 100]
// console.log(division(...arry))



// TODO: 4. Daxil edilmiş cümlədə daxil edilmis simvoldan nece eded olduğunu tapan Proqramın alqoritmini yazin.


// function countCharacter(sentence, targetChar) {
//     let count = 0;
//     for (let i = 0; i < sentence.length; i++) {
//         if (sentence[i] === targetChar) {
//             count++;
//         }
//     }
//     return count;
// }

// let sentence = prompt('Cümlə:');
// let targetChar = prompt('Tapılacaq Simvol:');

// console.log(`Cümlədə '${targetChar}' simvolu ${countCharacter(sentence, targetChar)} dəfə təkrarlanır.`);


// TODO: 5. Daxil edilen ededin Aboundant ve ya Deficient oldugunu yoxlayan algorithm.(Abundant ədəd öz müsbət bolenlerinin(ozunden basqa) cəmi özündən böyük olan müsbət tam ədədlərə deyilir. Eks halda Deficient eded olur. 12-Aboundant, 13- Deficient)




// function isNumber(a){

// let number = 0;
// if (a < 0) {
//     alert('ədəd mənfidir')
// }


// for (let i = 1; i < a; i++) {
//      if (a % i == 0) {
//         number+= i
//      }
// }

// if (a <number) {
//     return `${number} Abundant ədəddir.`;
// } else if (a > number) {
//     return `${number} Deficient ədəddir.`;

// }
// return{a}

// }

// console.log(isNumber(Number(prompt('Bir rəqəm yazı: ' ))));



// TODO: 6 Array-in bütün elementlərini kvadrata yüksəldib yeni array qaytaran funksiya yazın.



function newArray (...args){

let  arry = [];

for (let i = 0; i < args.length; i++) {
    arry.push(args[i]**2)
}
return arry

}

console.log(newArray(1,4,5,6,7,8,));



// TODO: 7. İçərisində name və age key-ləri olan obyektlərdən təşkil olunmuş bir array var. Ən az yaşı olan ilə ən çox yaşı olan elementin yaşlarını və onların fərqini array şəklində qaytaran funksiya yazın. Məsələn - [13,67,54]




function ageDifference(arr) {

    let minAge = Infinity;
    let maxAge = -Infinity;


    for (let i = 0; i < arr.length; i++) {
   
        let age = arr[i].age;


        if (age < minAge) {
            minAge = age;
        }

  
        if (age > maxAge) {
            maxAge = age;
        }
    }


    let difference = maxAge - minAge;

 
    return [minAge, maxAge, difference];
}


let people = [
    { name: 'Aysel', age: 25 },
    { name: 'Ramil', age: 30 },
    { name: 'Leyla', age: 22 },
    { name: 'Murad', age: 35 }
];


console.log(ageDifference(people)); 
