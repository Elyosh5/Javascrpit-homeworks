// let arr = [1, 2, 3, 4, 5];
// arr.unshift(4, 5, 6);
// console.log(arr);

// let arr1 = ["js", "css", "jq"];
// console.log(arr1.shift());

// let arr2 = ["js", "css", "jq"];
// console.log(arr2.pop());

// let arr3 = [5, 2, 4, 2, 7];
// console.log(arr3.slice(0, 3));

// let arr4 = [3, 4, 1, 2, 7];
// arr4.sort((a, b) => a - b);
// console.log(arr4);

// let arr5 = [1, 2, 3, 4, 5];
// let splice = arr5.splice(1, 3);
// console.log(splice);

// let arr6 = [5, 2, 1, -10, 8];
// arr6.sort((a, b) => b - a);
// console.log(arr6);

// let arr7 = ["Apple", "Orange", "Banana", "Pineapple", "Cherry"];
// arr7.sort((a, b) => b.length - a.length);
// console.log(arr7);

// let arr8 = [0, -11, 121, 3, 18];
// arr8.sort((a, b) => a - b);
// console.log(arr8.pop());

// let arr9 = ["Life", "is", "hard"];
// arr9.splice(2, 1, "good");
// console.log(arr9);

// let rever = ["dlrow", "olleH"];
// let reJoin = rever.join("");
// let reSplit = reJoin.split("");
// reSplit.reverse();
// console.log(reSplit);

// let addEnd = ["а", "б", "в"];
// addEnd.push(4, 3, 5, 5);
// console.log(addEnd);

// let fruits = ["Apple", "Orange", "Pinapple", "Cherry"];
// fruits.shift();
// fruits.splice(2, 0, "Apple");
// console.log(fruits);

// let num = [8, -7, -21, 44, 3];
// num.sort((a, b) => b - a);
// console.log(num.shift());

let str = ["coding"];
let strjoin = str.join("");
let strsplit = strjoin.split("");
strsplit.shift();
strsplit.splice(1, 1);
strsplit.splice(2, 1);
console.log(strsplit);

let num1 = 20;
let num2 = 2;
console.log(num1 + num2);
console.log(num1 - num2);
console.log(num1 / num2);

let num = 5;
console.log(num * num);

let str1 = "Hello";
let str2 = "ElaMan!";
console.log(str1, ",", str2);

const age = 18;
console.log(`I am ${age} years old`);

let userName = "Kubat";
let userLastName = "Abrahmanov";
console.log(userName, userLastName);

let userName2 = "null";
console.log(typeof userName2);

let firstName = "Goku";
let lastNmae = "Son";
console.log(`Hello ${lastNmae} ${firstName}`);

let arr = [5, +5];
console.log(arr);
let arr2 = ["5" + 5];
console.log(arr2);

let person = {
  name: "Sanzhar",
  surname: "Kadyrkulov",
  age: 20,
};
console.log(person.name);
console.log(person.surname);
console.log(person.age);

let expression = +"2" + 2 + 2;
console.log(expression);

let myBool = true;
console.log(myBool);

let myNum = 5;
let newNum = myNum.toString();
console.log(newNum);
console.log(typeof newNum);

let myStr = "5";
let myNumber = 5;
console.log(+myStr + myNumber);

let firstWord = "Hello";
let SecondWord = "World";
console.log(firstWord.length);
console.log(SecondWord.length);
console.log(firstWord.length + SecondWord.length);
