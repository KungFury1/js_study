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


// let a = 0
// let b = 0
// let dif = 0
// for (let c = 1; c <= 100; c++) {
//     a = a + c;
// } for (let x = 1; x <= 100; x++) {
//     if (x % 3) continue; 
// { b = b + x;
//     }
// } dif = a - b;
// console.log(dif)

// function math(x, y) {
//     if (x > 0 && y == 0) {
//         return undefined;
//     }
//     a = x;
//     while(y > 1) {
//     a = x * a;
//     y = --y;
//     }
//     return a;
// } 
// console.log(math(3, 2));