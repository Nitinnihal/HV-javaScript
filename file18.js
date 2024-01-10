// for loop in array

let letters = ["abcd", "bcde", "cdef", "defg", "efgh"];
// console.log(letters.length);
console.log(letters);
let letters2 = [];
for (let i = 0; i < letters.length; i++) {
  letters2.push(letters[i].toUpperCase());
}

console.log(letters2);
