// ARRAY DESTRUCTURING

const myArr = ["val1", "val2", 5, "val4"];
// const myVar1 = myArr[0];
// const myVar2 = myArr[1];

// console.log("value of myVar1 is = " + myVar1);
// console.log("value of myVar2 is = " + myVar2);

// let [myVar1, myVar2, myVar3] = myArr;
// myVar1 = 7;
// console.log("value of myVar1 is = " + myVar1);
// console.log("value of myVar2 is = " + myVar2);
// console.log("value of myVar3 is = " + myVar3);

// let's suppose that we have to store 5 in myVar2 then in that case -

// let [myVar1, , myVar2] = myArr;
// console.log(myVar1);
// console.log(myVar2);

// let's suppose we have to store 3rd and 4th item of our original array into a new array then-

// let myNewArr = myArr.slice(2);
// console.log(myNewArr);

// but the above outcome can be achieved by the method below with a slightly easier approach, by using rest operator-

let [myVar1, , ...myNewArr] = myArr;
console.log(myNewArr);
