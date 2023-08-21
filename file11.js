//                                  [].map()

const arr = [2, 4, 6, 9, 8];

// double-[4, 8, 12, 16]
//binary-['10', '100', '110', '1000']

// function double(x){
//     return x*2
// }

// const double = (x)=>{
//     return (
//         x*2
//     )
// }

// const double = (x) => x * 2;
// console.log(arr.map(double));

// const binary = (x)=>{
//     return(
//         x.toString(2)
//     )
// }

// here we have done nothing but passed a function inside map(), and that's why map() function is a higher order function.
// console.log(
//   arr.map(function binary(x) {
//     return x.toString(2);
//   })
// );

// console.log(
//   arr.map(function double(x) {
//     return x * 2;
//   })
// );

// here we have done the same thing but instead of passing a normal js function we have passed a arrow function(anonynomus function).

// console.log(
//   arr.map((x) => {
//     return x * 2;
//   })
// );

// when there is only one return statement inside an arrow function we can remove the word return and we can also remove the curly brackets so basically we have written line no. 28 to 32 in one line i.e. line below

// console.log(arr.map((x) => x.toString(2)));

//                           [].filter()


// prg to filter out all the odd number in the given array and to print it.
// function isOdd(x) {
//   return x % 2;
// }
// console.log(arr.filter(isOdd));

// const isOdd = (x)=>{
//     return(
//         x%2
//     )
// }
// console.log(arr.filter(isOdd));

// console.log(arr.filter((x) => x % 2));

// the below statement will filter out all the even number from the given array and will console it.
console.log(arr.filter((x) => x % 2 === 0));
