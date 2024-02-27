// callback function

// function func(a) {
//   console.log(a);
// }

function func2(name) {
  console.log("inside my func2");
  console.log(`your name is ${name}`);
}
// a can be anything depending on the arguments passed while calling func();
// func([1, 2, 3, 4, 5]);
// func({ name: "nitin", age: 2400 });

// func(func2);        // this will output whole func2 ;

function func(callback) {
  console.log("hello there i'm func");
  callback("nitin");
}

func(func2);
