//undefined -->  a variable that is declared but has not been asssigned a value , is of type undefined.this is only valid for "var" and "let" , coz for "const" we need to assign value as soon as we declare a variable otherwise it will show an error.

// const fname;       ( Uncaught SyntaxError: Missing initializer in const declaration)


// let fName;
// console.log(typeof fName);

// fName = "Nitin";
// console.log(typeof fName , fName);


// null --> is a special value that represents an empty or unknown value. it represents absence of any object.[typeof null is object]


// let a = null;
// console.log(a, typeof a);   // null , object


//BigInt        introduced in 2020

// any operation on BigInt can only be done with BigInt , we cant mix normal integers with BigInt .



console.log(Number.MAX_SAFE_INTEGER);       //gives us the value of maximum integer that can be saved (2^53 – 1) in javaScript safely.

let b = BigInt(12);
console.log(typeof b , b);
let c = 1233n; 

// let c = BigInt(123333498349834985987534987455766766766776767676766767676766676767667667676);

console.log(typeof c , c);