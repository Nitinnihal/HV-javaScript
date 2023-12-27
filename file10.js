//  while loop

// let i = 0;
// while(i <= 3){
//     console.log(i);
//     i++;
// }

// print sum of first n natural numbers
let n = 0;
let sum = 0;
while (n <= 10) {
  sum = sum + n;
  n++;
}
console.log(sum);

// using math total  = (num*(num+1))/2          *****faster than loop*******
let num = 10;
let total = (num * (num + 1)) / 2;
console.log(total);
