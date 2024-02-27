// block scope vs function scope

// let andconst are block scope whereas, var is function scope.

// {
//     let firstName = "Nitin";
//     console.log(firstName);         // only accessable within these block.
// }
// console.log(firstName);         // it will throw error that firstName is not defined , this happens because let is a block scope.

// {
//         const firstName = "RAM";
//         console.log(firstName);         // even though we are keeping the name of our variable same within the file then also it will not give error that is because of the block scope of the "const" keyword.
// }

// const firstName = "Durgatishamni";
// console.log(firstName);

// {
//   var firstName = "Nitin";
// }
// console.log(firstName);         // since var is a function scoped hence we can access it outside of the block too. (which is within global scope)

const myFuc = () => {
  if (true) {
    // const firstName = "Nitin";
    var firstName = "Nitin";
    console.log(firstName);
  }
  console.log(firstName); // will give error as not defined
};

myFuc();
