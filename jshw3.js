// трикутники
// function triangle(height) {
//    let lenght = "";
//    for (let i = 1; i <= height; i++) {
//        for (let j = 1; j <= i; j++){
//         lenght += "*";
//     }
//     lenght += "\n";
//    }
//    return lenght;
// }
// console.log(triangle(5));

// function triangle2(height) {
//      let lenght = "";
//      let symbol = "*";
//      let line = "";
//      let breaker = "\n";
//      for (let i = 0; i < height; i++){
//         line += symbol;
//         lenght += line + breaker;
//      }
//     return lenght;
// }
// console.log(triangle2(5))

// сума не кратних 3
// let sum = 0;

// for (let i = 1; i <= 100; i++) {
//   if (i % 3 !== 0) {
//     sum += i;
//   }
// }
// console.log(sum)

// піднесення до ступеня
// function pow(x, y) {
//   let result = 1;

//   for (let i = 0; i < y; i++) {
//     result *= x;
//   }

//   return result;
// }
// console.log(pow(4, 2));