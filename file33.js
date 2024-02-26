// Arrow function

// const sayMyName = () => {

//   console.log("Heisenberg....!");
// };

// sayMyName();

// const twoPlusFour = function (){
//   return 2+4;
// }

// const twoPlusFour = ()=>{
//     return 2+4;
// }

// const sum = twoPlusFour();
// console.log(sum);

// const sumTwoNumbers = function (a, b) {
//   return a + b;
// };

// const sumTwoNumbers = (a, b) => {
//   return a + b;
// };
// console.log(sumTwoNumbers(2, 4));

// write a function which takes single parameter and return true for even numbrs and false for odd numbers.

// const isEven = function (num) {
//   return num % 2 === 0;
// };

// const isEven = (num) => {
//   return num % 2 === 0;
// };

// the above arrow function can also be simplified further and can be written in the following form, coz it has only one parameter and only one body statement to execute -

const isEven = num =>  num % 2 === 0;


const returnedVal = isEven(4);
console.log(returnedVal);

// write a function which takes a string as input an return it's 1st character as output.
// const returnCharacter = (str) => {
// const returnCharacter = str=> {
//   // if we are giving  only one parameter then there is no need to write it inside a small bracket.
//   //   return str.slice(str.length - 1);
//   return str[0];
// };
// const result = returnCharacter("nitin");
// console.log(result);

// write a function which takes an array an a target value as parameter if the target is found return a message of the index at which target is found.

// const search = (arr, t) => {
//   for (let i = 0; i <= arr.length - 1; i++) {
//     if (arr[i] === t) {
//       return i;
//     }
//   }
//   return -1;
// };
// const Res = search([1, 2, 3, 4, 5], 8);
// console.log(Res);
