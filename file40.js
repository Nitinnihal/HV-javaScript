// parameter destructuring

// used with objects
// used in react frequently.

const obj1 = {
  name: "Nitin-Nihal",
  gender: "Σ-male",
  age: 24,
};

// function printDetails() {
//   console.log(obj1.name);
//   console.log(obj1.gender);
//   console.log(obj1.age);
// }
// printDetails();

const printDetails = ({ name, age, gender }) => {
  console.log(name);
  console.log(age);
  console.log(gender);
};

printDetails(obj1);
