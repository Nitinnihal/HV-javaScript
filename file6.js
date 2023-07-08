//  boolean and comparison operator

// let n1 = 7;
// let n2 = "7";

// // console.log(n1>n2);
// // console.log(n1 <= n2);


// //  == vs ===
// console.log(n1==n2);    //gives true coz, it(==) will only compare the value of the n1 and n2 variable;


// console.log(n1===n2);   //gives false coz, it(===) will compare the data type of the variables too, before giving the results.


// //  != vs !==

// console.log(n1 != n2);  // will give false, coz it is only comparing the value of variables.


// console.log(n1 !== n2); // will give true, coz it is comparing the data type of variables too.


//      if-else condition

// let age = 18;

// if(age >= 18){
//     console.log("can paly the game");
// }
// else{
//     console.log("jaake padhle bete 😁");
// }


// to check if a number is odd/even

// let num = 1;

// if(num%2===0){
//     console.log("even");
// }else{
//     console.log("odd");
// }


//truthy and falsy 

//  falsy values
// 1. ""
// 2. undefined
// 3. null
// 4. false
// 5 0


// all the above mentioned value is falsy value , they will provide false as an output.

//  truthy values   --> any value except falsy value.

// let fName = "";
// let fName;
// let fName = null;
// let fName = 0;
// let fName = false;


let fName = "Nitin"
if(fName){
    console.log(fName);
}else{
    console.log("fName has a falsy value.")
}