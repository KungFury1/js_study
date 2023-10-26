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

// function findValueByKey(company, companyName) {
//     if (company.name === companyName) {
//         return company;
//     }

//     if (company.clients) {
//         for (const client of company.clients) {
//             const result = findValueByKey(client, companyName);
//             if (result) {
//                 return result;
//             }
//         }
//     } else if (company.partners) {
//         for (const partner of company.partners) {
//             const result = findValueByKey(partner, companyName);
//             if (result) {
//                 return result;
//             }
//         }
//     }

//     return null;
// }

// const result = findValueByKey(company, 'Клієнт 1.2.3');

// if (result) {
//     console.log('Знайдено компанію:', result.name);
//     console.log('Тип:', result.type);
//     console.log('Використовує:', result.uses);
//     console.log('Продає:', result.sells);
// } else {
//     console.log('Компанію не знайдено');
// }
