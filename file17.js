// how to clone an array
let arr1 = [1, 2, "3", "Abcd"];
// let arr2 = arr1.slice(0);            // fastest method to clone an array
// let arr2  = [].concat(arr1);

//  SPREAD OPERATOR

// let arr2 = [...arr1];               // most used method to clone an array

// arr1.push("NITIN");
// console.log(arr1 === arr2);
// console.log(arr1);
// console.log(arr2);

// how to concatenate arrays

// let arr2 = arr1.slice(0).concat(["i", 2.0]);
// let arr2 = [].concat(arr1, ["i", 2.0]);

// using spread operator
// let arr2 = [...arr1, "i", 2.0];
let onemoreArr = [0, 9, 8, 6];
let arr2 = [...arr1, ...onemoreArr];
arr1.push("NITIN");
console.log(arr1 === arr2);
console.log(arr1);
console.log(arr2);
