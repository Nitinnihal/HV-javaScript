// How to iterate objects.

const person = {
  name: "Nitin",
  age: 24,
  "person skills": ["html5", "css3", "java", "javaScript"],
};

// for-in loop
// Object.keys()     (capital "O")

// for (let key in person) {
//   console.log(person[key]);
// }

// for(let key in person){
//     // console.log(`${key}: ${person[key]}`);
//     console.log(key,":",person[key]);
// }
// console.log(Object.keys(person));

for(let key of Object.keys(person)){
    console.log(person[key]);
}
