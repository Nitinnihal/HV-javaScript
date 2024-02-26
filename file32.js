// FUNCTIONS IN javaScript

// function sayMyName() {                  // declaring a function
//   console.log("Heisenberg....!");
// }

// const sayMyName = function () {           // function expression
//   console.log("Heisenberg....!");
// };

// sayMyName(); // calling/invoking/running a function

// function twoPlusFour() {
//   return 2 + 4;
// }

// const twoPlusFour = function (){
//   return 2+4;
// }

// // console.log(twoPlusFour());
// const sum = twoPlusFour();
// console.log(sum);

// making function re-usable

// function sumTwoNumbers(a, b) {              // here a,b are termed as parameters
//   return a + b;
// }

// const sumTwoNumbers = function (a, b) {
//   return a + b;
// };

// console.log(sumTwoNumbers(2, 4)); //  here 2,4 are known as arguments

// write a function which takes single parameter and return true for even numbrs and false for odd numbers.

// function isEven(num) {
//   if (num % 2 === 0) {
//     return true;
//   } else {
//     return false;
//   }
// }
// function isEven(num) {
//   if (num % 2 === 0) {
//     return true;
//   }
//   return false;
// }
// function isEven(num) {
//   return num % 2 === 0;
// }

// const isEven = function (num) {
//   return num % 2 === 0;
// };

// const returnedVal = isEven(4);
// console.log(returnedVal);

// write a function which takes a string as input an return it's 1st character as output.

// function returnCharacter(str) {
//   //   return str.slice(str.length - 1);
//   return str[0];
// }
// const result = returnCharacter("nitin");
// console.log(result);

// write a function which takes an array an a target value as parameter if the target is found return a message of the index at which target is found.

// function search(arr, t) {
//   for (let i = 0; i <= arr.length - 1; i++) {
//     if (arr[i] === t) {
//       return i;
//     }
//   }
//   return "not found";
// }

const search = function (arr, t) {
  for (let i = 0; i <= arr.length - 1; i++) {
    if (arr[i] === t) {
      return i;
    }
  }
  return -1;
};
const Res = search([1, 2, 3, 4, 5], 8);
console.log(Res);
