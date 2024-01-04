// primitive vs reference types

// primitive type(are stored in stack memory, because they occupy less memory)
// let n1 = 5;
// let n2 = n1;
// console.log("n1 :", n1);
// console.log("n2 :", n2);
// n1++;
// console.log("after increasing n1");
// console.log("n1 :", n1);
// console.log("n2 :", n2);

//reference types(are stored in heap memory and it has an address which points towards that ref. datatypes, these address are stored in stack.)
let arr1 = ["a", "b", "c", 2, 3.6];
let arr2 = arr1;
console.log("arr1 is:", arr1);
console.log("arr2 is :", arr2);
arr1.push(12);
console.log("after pushing element into arr1");
console.log("arr1 is:", arr1);
console.log("arr2 is :", arr2);
