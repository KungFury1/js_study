// var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// // const blender = arr.sort(() => Math.random() - 0.5);
// // console.log(blender);
// function blend(arr) {
//     for (var i = arr.length - 1; i > 0; i--) {
//       var l = Math.floor(Math.random() * (i + 1)); 
//       [arr[i], arr[l]] = [arr[l], arr[i]];
//     }
//     console.log(arr);
//   }
//   blend(arr);



// const company = {
//     name: 'Велика Компанія',
//     type:'Головна компанія',
//     platform: 'Платформа для продажу квитків',
//     sellsSolution: 'Рішення для продажу квитків',
//     clients: [
//       {
//         name: 'Клієнт 1',
//         type: 'subCompany',
//         uses: 'ПО для продажу квитків',
//         sells: 'Рішення для продажу квитків',
//         partners: [
//           {
//             name: 'Клієнт 1.1',
//             type: 'subSubCompany',
//             uses: 'Рішення для продажу квитків',
//             sells: 'Рішення для продажу квитків',
//           },
//           {
//             name: 'Клієнт 1.2',
//             type: 'subSubCompany',
//             uses: 'Рішення для продажу квитків',
//             sells: 'Рішення для продажу квитків',
//             partners: [
//               {
//                 name: 'Клієнт 1.2.3',
//                 type: 'subSubCompany',
//                 uses: 'Рішення для продажу квитків',
//                 sells: 'Рішення для продажу квитків',
//               }
//             ]
//           }
//         ]
//       },
//       {
//         name: 'Клієнт 2',
//         type: 'subCompany',
//         uses: 'ПО для продажу квитків',
//         sells: 'Рішення для продажу квитків'
//       }
//     ]
//   };

//   console.log(company.clients);

//   let result = company.clients.filter(function (item) {
// 	return item.partners.name;
// });
// console.log(result);


// if (Array.isArray(company.clients)) {
// 	console.log('Это массив!');
// } else {
// 	console.log('Это не массив!');
// }


// for (let arrItem of company.clients) {
// 	console.log(arrItem);
// }

// for (let i = 0; i < company.clients.length; i++) {
// 	console.log(company.clients[i]);
// } 
