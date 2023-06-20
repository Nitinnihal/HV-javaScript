"use strict";

// printing your 1st javaScript prg.
console.log("hello world.");

// working with variables

var firstName = "Nitin";    //declaring a variable
console.log(firstName); //using that variable.

firstName = "Nihal";    // we can change the value of variables.
console.log(firstName); 

let lastName = "Nihal";
// let lastName = "jha"; we can't redeclare but we can change the value of variable;
lastName = "jha";

console.log(lastName);

//constant


const a = 1111;

// a = 20; this is not possible coz, we can't re-assign a new value to a constant.

console.log(a);


//string indexing

let str = "Nitin";

// length of string

console.log(str.length);
console.log(str[0]);    // printing any char. from string.

// last index of string

console.log(str[str.length-1]);