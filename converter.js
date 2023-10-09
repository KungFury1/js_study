const value = prompt("Enter the value (Km, Hrs, Kg):");
const measure = +prompt("Enter measure:")
let result;
    switch (value) {
        case "Km":
            result = measure * 1000 + " meters";
            break;
        case "Hrs":
            result = measure * 60 + "minutes";
            break;
        case "Kg":
            result = measure * 1000 + "grams";
            break;
        default:
            result = "Unknown value";
            break;
    }
   alert(result);

// const value = "Km";
// const measure = 10
// let result;
//     switch (value) {
//         case "Km":
//             result = measure * 1000 + "meters";
//             break;
//         case "Hrs":
//             result = measure * 60 + "minutes";
//             break;
//         case "Kg":
//             result = measure * 1000 + "grams";
//             break;
//         default:
//             result = "Unknown value";
//             break;
//     }
//    console.log(result);