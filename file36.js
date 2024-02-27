// lexical scope

// A lexical environment in JavaScript is a concept that describes the association between identifiers (such as variables and functions) and their values in a specific region of your code during the runtime. It consists of two components: the environment record and a reference to the outer lexical environment.

// 1. **Environment Record:** This is a data structure that stores identifier bindings and their associated values. The environment record is like a "box" where variables and functions declared in a specific scope are stored. There are different types of environment records, such as declarative environment records and object environment records, each serving different purposes.

// 2. **Outer Lexical Environment Reference:** This is a reference to the lexical environment in which the current environment is nested. It forms a chain of lexical environments, known as the lexical scope chain or scope chain. This reference is essential for resolving the values of variables when they are not found in the current environment.

// Lexical environments are created at runtime as the JavaScript engine executes your code. Each function call or block statement establishes a new lexical environment. When a function is invoked, a new lexical environment is created, and it captures a reference to the lexical environment in which the function was declared, forming a chain.

// function outerFunction() {
//   var outerVariable = "I'm in the outer function";

//   function innerFunction() {
//     var innerVariable = "I'm in the inner function";
//     console.log(outerVariable); // Access outerVariable from the outer lexical environment
//     console.log(innerVariable); // Access innerVariable from the inner lexical environment
//   }

//   innerFunction(); // Call the inner function
// }

// outerFunction(); // Call the outer function

// In this example above, `innerFunction` has its own lexical environment, and it has access to the lexical environment of `outerFunction` due to the lexical scope chain.

const myVar = "val1";
const myApp = () => {
  //   const myVar = "val1";
  const myFunc = () => {
    // const myVar = "val69";               // after commenting this out it will take val1 as the value of myVar.
    const myFunc2 = () => {
      console.log("inside my Func", myVar);
    };
    myFunc2();
  };

  console.log(myVar);
  myFunc();
};
myApp();
