// for-in loop in array
// gives index of the array

const arr = [1, 2, 3, 4, 5, 6.77, "shiv", "m"];
const arr2 = [];
for (let index in arr) {
  //   console.log(index);
  //   console.log(arr[index].toString().toUpperCase());
  arr2.push(arr[index].toString().toUpperCase());
}
console.log(arr2);
