// nested Destructuring

const User = [
  { userId: 1, name: "nitin", gender: "Σ-male", age: 24 },
  { userId: 2, name: "mohit", gender: "α-male", age: 25 },
  { userId: 3, name: "Ram", gender: "Purroshotam", age: "eternity" },
  { userId: 4, name: "keshav", gender: "male", age: 29 },
];

// const [user1, user2, user3] = User;
// console.log(User);

// let's say now we have to destructure only the userId of 1st object , name of 2nd user and gender of 4th user , for that we have to follow this process-
const [
  { userId },
  { name, userId: user2Usedid },
  ,
  { gender: userThirdGender },
] = User;
console.log(userId);
console.log(name, user2Usedid);
console.log(userThirdGender);
