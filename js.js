let age = prompt("How old are you?");
if (age <= 13) {
  console.log("Watch Ben 10");
} else if (age <= 17) {
  console.log("Watch  movie Spider-Man: Into the Spider-verse");
} else if (age >= 18) {
  console.log("Watch movie Fighting Club");
}

let stroke = 244;
let num1 = stroke.toString();
+num1[0] + +num1[1] + +num1[2];
let seasons = 1;
let result = "";
if ((seasons = 1)) {
  console.log("winter");
  result = "winter";
} else if ((seasons = 2)) {
  console.log("spring");
  result = "spring";
} else if ((seasons = 3)) {
  console.log("summer");
  result = "summer";
} else if ((seasons = 2)) {
  console.log("autumn");
  result = "autumn";
}

switch (seasons) {
  case 1:
    console.log("winter");
    result = "winter";
    break;
  case 2:
    console.log("spring");
    console.log("spring");
    break;
  case 3:
    console.log("summer");
    console.log("summer");
    break;
  case 4:
    console.log("autumn");
    console.log("autumn");
    break;
}
let answer = +prompt("Введите число от 1 до 4");
if (answer == 1) {
  console.log("winter");
  result = "winter";
} else if (answer == 2) {
  console.log("spring");
  result = "spring";
} else if (answer == 3) {
  console.log("summer");
  result = "summer";
} else if (answer == 4) {
  console.log("autumn");
  result = "autumn";
}
console.log(`Вы ввели число ${answer}. В переменной записалось ${result}`);

(2 < 3 && 3 > 4) || true;
(true && false) || true;
false || true;
false;

!true && (!true || 100 != 5 * 5);
false && (false || true);
false && true;

false("123" == 123) || (10 <= 10 && " " === false);
False || (True && True);
True && True;
True;