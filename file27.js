// computed properties

const key1 = "objKey1";
const key2 = "objKey2";

const val1 = "myVal1";
const val2 = "myVal2";

// make an object using these variables and its values.

// const obj = {};
// obj[key1] =  val1;
// obj[key2] = val2;
// console.log(obj);

const obj = {
  [key1]: val1, // this method of extracting values using square brackets is called as computed property
  [key2]: val2, // computed property
};
console.log(obj);
