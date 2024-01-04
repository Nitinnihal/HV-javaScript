//      ARRAY PUSH-POP

let mixed = [1, 2, 4, 3.4, "nitin", null, undefined];
console.log(mixed);

// PUSH --> add item to last index  of the array.

// mixed.push("mango");
// console.log(mixed);

//  POP --> removes item from last index of the array. and return that item too.
// mixed.pop();
// let poppedItem = mixed.pop();
// console.log(mixed);
// console.log("popped item is", poppedItem);

//         ARRAY SHIFT-UNSHIFT

// UNSHIFT --> add item to starting index of an array.

// mixed.unshift(10);
// console.log(mixed);

// SHIFT --> remove item from starting index of an array.and return it too.

// mixed.shift();
let removedItem = mixed.shift();
console.log(mixed);
console.log("the removed item is", removedItem);


// push & pop are faster in comparision with shift, unshif.