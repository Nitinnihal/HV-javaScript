// object inside Array(very useful in real world application)

const User = [
  { userId: 1, name: "nitin", gender: "Σ-male", age: 24 },
  { userId: 2, name: "mohit", gender: "α-male", age: 25 },
  { userId: 3, name: "keshav", gender: "α-male", age: 29 },
];
// console.log(User);

for (item of User) {
  console.log(item.gender);
}
