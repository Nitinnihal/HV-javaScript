// for of loop in array

const items = [1, 2, 3, 4.6, "abc", "z", null, true]; // according to convention name of array is generally written in plural.and name used before "of" keyword in loop is written in singular ,but we can write anything.
for (let item of items) {
  console.log(item);
}

// works similarly as Normal for loop but we don't need length of array to iterate through this(for-of) loop.
