//  *******  BREAK AND CONTINUE  *******

// BREAK KEYWORD

// for (let i = 0; i <= 10; i++) {
//   if (i == 5) {
//     break;
//   }
//   console.log(i);
// }
// console.log("hello");

// CONTINUE KEYWORD

for (let i = 0; i <= 10; i++) {
  if (i == 5) {
    // here we are skipping 5 by usinng continue keyword coz it will not  let the lineno. 20 and afterwards get executed.instead it will again go to the for loop and hence skip the printing of 5.
    continue;
  }
  console.log(i);
}
console.log("hello");
