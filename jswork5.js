// let myProfile = {
//     name: 'Alex',
//     age: 29,
//     role: 'QA',
//     getInfo: function() {
//       for (let key in this) {
//         if (typeof this[key] !== 'function') {
//             console.log(key + ":" + this[key]);
//         }
//       }
//     }
//   };
  
//   myProfile.getInfo(); 
//   myProfile.newProperty = 'Нова властивість!';
//   myProfile.getInfo();





//   const services = {
//     "стрижка": "80 грн",
//     "гоління": "60 грн",
//     "Миття голови": "100 грн",
//     price: function() {
//         let total = 0;
//         for (let service in this) {
//             if (typeof this[service] === 'string') {
//                 total += parseInt(this[service]);
//             }
//         }
//         return total;
//     },

//     minPrice: function() {
//         let min = Infinity;
//         for (let service in this) {
//             if (typeof this[service] === 'string') {
//                 let price = parseInt(this[service]);
//                 if (price < min) {
//                     min = price;
//                 }
//             }
//         }
//         return min;
//     },

//     maxPrice: function() {
//         let max = -Infinity;
//         for (let service in this) {
//                 if (typeof this[service] === 'string') {
//                 let price = parseInt(this[service]);
//                 if (price > max) {
//                     max = price;
//                 }
//             }
//         }
//         return max;
//     }
// };

// services['Розбити скло'] = "200 грн";

// console.log("Загальна вартість наданих послуг: " + services.price() + " грн");
// console.log("Мінімальна ціна: " + services.minPrice() + " грн");
// console.log("Максимальна ціна: " + services.maxPrice() + " грн");

