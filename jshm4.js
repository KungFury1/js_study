//"isNaN"
// function IsNaNmine(value) {
//     return typeof value === "number" && value !== value;
//   }
// console.log(IsNaNmine(5));
  

//pad end/start
//   function pad(str, char, count, beggining) {

//     if (str.length >= count) {
//       return str; 
//     }
  
//     var padLength = count - str.length;
//     var padding = char.repeat(padLength);
  
//     if (beggining) {
//       return padding + str;
//     } else {
//       return str + padding;
//     }
//   }
  
//   console.log(pad('qwerty', '+', 7, true)); 
//   console.log(pad('abc', '*', 5, false));


// Theory
// function ProbabilityTheory(count) {
//     var pairCount = 0;
//     var loneCount = 0;
  
//     for (let i = 0; i < count; i++) {
//       var randomNum = Math.floor(Math.random() * (1001 - 100) + 100);
//       if (randomNum % 2 === 0) {
//         pairCount++;
//       } else {
//         loneCount++;
//       }
//     }
  
//     var totalNumbers = pairCount + loneCount;
//     var evenPercentage = (pairCount / totalNumbers) * 100;
//     var oddPercentage = (loneCount / totalNumbers) * 100;
  
//     console.log("Кількість згенерованих чисел:", totalNumbers);
//     console.log("Парних чисел:", pairCount);
//     console.log("Не парних чисел:", loneCount);
//     console.log("Відсоток парних до не парних:", evenPercentage + "% : " + oddPercentage + "%");
//     }
//     ProbabilityTheory(1000);