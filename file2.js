//trim()

let firstName = "   Nitin Nihal   ";

console.log(firstName);
console.log(firstName.length);

let modifiedName = firstName.trim();    // here we can't do console.log(firstName.trim()), coz, string is immutable trim() methods gives us a new string. so we are saving it in another varibable and then we can print it. 

console.log(modifiedName);
console.log(modifiedName.length);

//toUpperCase()

//convert all the lower case char. to upper case.

console.log(firstName.toUpperCase());


//toLowerCase()

// convert all the upper case char. to lower case.

let fName = "NIHAL";

console.log(fName.toLowerCase());

//slice(start index , end index )

// the end index is excluded from being sliced .


let rName = "Raakesh";
console.log(rName.slice(0,3));




