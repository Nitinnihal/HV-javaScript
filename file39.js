// rest parameters

// const func = (a, b, ...c) => {
//   console.log(`a is ${a}`);
//   console.log(`b is ${b}`);
//   console.log(`c is`, c);
//   //   console.log(`d is ${d}`);
// };

// func(3, 4, 5, 6, 7, 8);

console.log(addAll(2, 3, 4, 5, 6, 7, 8, 9));

function addAll(...num) {
  let res = 0;
  for (item of num) {
    res = res + item;
  }
  return res;
}
