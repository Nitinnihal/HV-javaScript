// hoisting

// function hello() {               // normal cases
//   console.log("hello world...!");
// }
// hello();

//In JavaScript, hoisting is a behavior where variable and function declarations are moved to the top of their containing scope during the compilation phase, before the code is executed. This means that we can use variables and functions before they are declared in the code.

// below function is called even before declaring.which is unusual in other programming language but it is allowed in javaScript.but we cannot do this in other form of writing function(eg:- function expression, arrow function).it is only possible in function declaration

// hello();
// function hello() {
//   console.log("hello world...!");
// }


//      VARIABLE HOISTING

console.log(x); // undefined
var x = 5;
console.log(x); // 5
