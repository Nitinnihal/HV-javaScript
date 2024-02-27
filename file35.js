// functions inside function

const app = () => {
  const myFunc = () => {
    console.log("hi from my func");
  };
  const add = (a, b) => a + b;
  const sub = (a, b) => a - b;
  const mul = (a, b) => a * b;

  console.log("inside my App..!");
  console.log(add(2, 4));
  console.log(sub(4, 3));
  console.log(mul(2, 2));
  myFunc();
};
app();
