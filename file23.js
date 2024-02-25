// ARRAY DESTRUCTURING

const myArr = ["val1", "val2", 5, "val4"];
// const myVar1 = myArr[0];
// const myVar2 = myArr[1];

// console.log("value of myVar1 is = " + myVar1);
// console.log("value of myVar2 is = " + myVar2);

let [myVar1, myVar2, myVar3] = myArr;
myVar1 = 7;
console.log("value of myVar1 is = " + myVar1);
console.log("value of myVar2 is = " + myVar2);
console.log("value of myVar3 is = " + myVar3);
