// typeof datatype

// this method tells us the category of datatype in which a variable falls.

let age = 20;
let bool = false;

console.log(typeof age);    // number
console.log(typeof bool);   // boolean

//converting number to string
// age = age + "";
// console.log(typeof age);


// console.log(typeof (age + ""));

age = String(age);
console.log(typeof age);    // string

//converting string to number

let myString = "34";
console.log(typeof myString);

// myString = +myString;
// console.log(typeof myString);

myString =  Number(myString);
console.log(typeof myString);   //number