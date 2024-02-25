// DOT notation vs BRACKET notation.

const person = {
  name: "Nitin",
  age: 24,
  "person skills": ["html5", "css3", "java", "javaScript"],
};
// console.log(person["person skills"]);


// let's suppose there is a variable named key and a value is stored in that key named variable.now we have to add this variable's value as a key to the object and we can give any value for this property(key) to the object. then-

const key = "email";
person[key] = "nnjha1111@gmail.com";
console.log(person);