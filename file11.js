//         ***** for loop *****

// for (let i = 0; i <= 9; i++) {
//   console.log(i);
// }
// console.log("value of i is " + i);  // will throw error coz, scope of let is only restricted till that small brackets of for loop.

// for (var i = 0; i <= 9; i++) {
//   console.log(i);
// }
// console.log("value of i is " + i); // will notb show errror coz , scope of var is beyond that small brackets.

// sum of 1st n natural numbers.
let sum = 0;
let num = 10;
for (let i = 0; i <= num; i++) {
  sum = sum + i;
}
console.log(sum);
