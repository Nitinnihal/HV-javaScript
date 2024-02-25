// introduction to objects

// Arrays are good but it is not sufficient for real world data.
// objects store key-value pairs, object does not have index

//how to create objects.

// const person = { name: "Nitin Nihal", age: 24 };
const person = {
  name: "Nitin",
  age: 24,
  skills: ["html5", "css3", "java", "javaScript"],
};
// console.log(person);

// how to access data from an object

// console.log(person.age);

//[]square bracket notation for accessing data from object.

// console.log(person["name"]);        // inside javaScript object keys are by default written in form of String but outside an object we should write key in the form of String. otherwise it will say "undefined".(while using bracket notation)

// console.log(person.skills);
// console.log(person.skills.toString().toUpperCase());
// console.log(person.skills[2].toUpperCase());

// how to add key-value pair to object
// person.gender = "Σmale";
person["gender"] = "Σmale";
console.log(person);
