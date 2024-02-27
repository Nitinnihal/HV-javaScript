// default parameters

// const add = (a, b) => {
//   return a + b;
// };
// console.log(add(2,3));
console.log(add(2)); // 2+undefined=NaN, since we are not giving any value to b it is assuming the undefined value by default.to handle this befor ECMA 2015 we use to write a if block as demonstrated below.

// function add(a, b) {
//   if (typeof b === "undefined") {
//     b = 0;
//   }
//   return a + b;
// }

// after ECMA2015 we use the below method to handle default parameters.

function add(a, b = 0) {
  return a + b;
}
