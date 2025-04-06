let word = "I am frontend DEVELOPER I LEARN Javascript";

// 1.Verilmis string-de sait herflerin tapilmasi


let sentence = word.match(/[aeiouəöüıAEIOUƏÖÜI]/gi);

if (sentence) {
  console.log("Tapılan saitlər:", sentence);
  console.log("Saitlərin sayı:", sentence.length);
} else {
  console.log("Sait tapılmadı.");
}

// 2 Verilmish string-de sozlerin bosluga gore sayi.

let spaaceWord = word.split(" ");

console.log("Sözlərin sayı:", word.length);

// 3 Verilmiş stringin-in ən uzun sözünü ekrana çıxaran proqram yazın

function maxLength(word) {
  let words = word.split(" ");
  let maxWords = "";

  for (let i = 0; i < words.length; i++) {
    if (words[i].length > maxWords.length) {
      maxWords = words[i];
    }
  }

  return maxWords;
}

let result = maxLength(word);
console.log("En uzun söz:", result);






//  4.Verilmiş string-in bütün hərfləri böyük olan sözün özünü və indeksini çapa çıxaran proqram yazın.//

function upperWordCase() {
  let words = word.split(" ");

  for (let i = 0; i < words.length; i++) {
    let word = words[i];
    if (word === word.toUpperCase()) {
      console.log(`Böyük hərflə yazılmış söz: '${word}' | İndeksi: ${i}`);
    }
  }
}
upperWordCase();




// . Verilmiş string-in 2-dən artıq böyük hərfi olan elementlərini çapa çıxaran proqram yazın

function upperWord() {
  let words = word.split(" ");

  for (let i = 0; i < words.length; i++) {
    let word = words[i];
    if (word === word.toUpperCase() && word.toUpperCase().length > 2) {
      console.log(` 2 Dən Artiıq  Böyük hərflə yazılmış söz: '${word}' | İndeksi: ${i}`);
    }
  }
}
upperWord();


// 6 Hər hansı bir cümlədə istənilən  baş hərflə olan simvolları birləşdirib qaytaran funksiya yazın.Məsələn:  My name is Jhon - MniJ

function getFirstLetters(sentence) {
let words = sentence.split(" ");
let getFirstLetters = "";
for (let i = 0; i < words.length; i++) {
  let word = words[i];
  if (word.length > 0) {
    getFirstLetters += word.charAt(0);
  }
}
return getFirstLetters;
}

console.log(getFirstLetters(word));



// 7 Cümlədə olan bütün sözləri ixtisar edən proqram tərtib edin. Əgər söz 4 hərfdən azdırsa o qısaldılmır. İxtisar zamanı başdakı və sondakı hərflər saxlanılır, ortada olan hərflərin sayı yazılır. Cümlədə heç bir durğu işarəsi olmayacaq. Məsələn: komputer-k6r, stəkan-s4n, javascript- j8t
function abbreviateWords(sentence) {
  let words = sentence.split(" ");
  let abbreviatedWords = [];

  for (let i = 0; i < words.length; i++) {
    let word = words[i];
    if (word.length > 4) {
      let abbreviatedWord =
        word.charAt(0) + (word.length - 2) + word.charAt(word.length - 1);
      abbreviatedWords.push(abbreviatedWord);
    } else {
      abbreviatedWords.push(word);
    }
  }

  return abbreviatedWords.join(" ");
}
let abbreviatedSentence = abbreviateWords(word);
console.log(abbreviatedSentence);
