// spread operator in arrays
// const arr1 = [1, 2, 3];
// const arr2 = [4, 5, 6];
// const myArr = [...arr1, ...arr2, 7, 8, 9];
// console.log(myArr);
// const newArr = [..."abcdefg", ..."12345678"]; // here only strings and arrays can be spread coz they are iterable.
// console.log(newArr);

// spread operator in objects

const obj1 = {
  key1: "val1",
  key2: "val2",
};
const obj2 = {
  key3: "val3",
  key4: "val4",
};
// const newObj = { ...obj1, ...obj2, key69: 69 };
const newObj = { ..."abcdef" };
// const newObj = { ...["item1", "item2"] };
console.log(newObj);

// NOTE:- key should always be unique, if two key have same name then the later one will overide the 1st one.
