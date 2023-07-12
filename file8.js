//  Nested if else

// let winningNum = 19;
// let userGuess = +prompt("your guess");
// console.log(userGuess , typeof userGuess);

// if(userGuess > winningNum)
// {
//     console.log("your Guess is too high");
// }
// else if(userGuess < winningNum)
// {
//     console.log("your Guess is too low");
// }
// else
// {
//     console.log("you have Guessed the rignt number");
// }


// temp 0 to 16
// temp 16 to 25
// temp 26 to 45
// temp 46 and above

let temp = +prompt("temperature in Degree");
console.log(temp);

if(temp <= 16){
    console.log("it's cold outside");
}else if(temp > 16 && temp <= 25){
    console.log("weather is pleasent");
}else if(temp > 25 && temp <= 45){
    console.log("let's go for swimming");
}else{
    console.log("it's hot outside");
}