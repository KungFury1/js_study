var year = +prompt("Вкажіть скільки вам років");

var result;
if (year < 0) {
    result = "Від'ємно живий"; // можно було зробити просто алерт інвалід параметерс але вирішив трохи меми згадати)
} else if (year == 0) {
    result = "Ще не народився"; // нуль років так то але з рештою ще не народився :))
} else if (year % 10 == 0) {
    result = year + " років";
} else if (year % 50 == 11) {
    result = year + " років";
} else if (year % 10 == 1) {
    result = year + " рік";
} else if (year % 50 > 4) {
    result = year + " років"
} else if (year % 10 > 4) {
    result = year + " років";
} else {
    result = year + " роки";
}
alert(result);



// Нижче не частина мого домашнього завдання, залишив собі на згадку бо коли я написав цей код з нього народився той що вище. 
// if (year < 0) {
//     alert("Від'ємно живий");
// } else if (year == 0) {
//     alert("Років ще не народився");
// } else if (year % 10 == 1) {
//     alert("Рік");
// } else if (year % 10 > 4) {
//     alert("Років");
// } else {
//     alert("Роки");
// };

