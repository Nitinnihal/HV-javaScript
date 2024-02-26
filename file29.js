// object Destructuring

const obj = {
  name: "nitin",
  age: 24,
  nationality: "Indian",
  yop: 2022,
};
// const name = obj.name;
// const nationality = obj.nationality;
// console.log(name);
// console.log(nationality);

// const { name, nationality } = obj;
// console.log(nationality);

// const {name:v1,nationality:v2} = obj;
// console.log(v2);

const {name:v1, nationality:v2,...restProps} = obj;
console.log(restProps);