//! Can not use ternary operator for multiple conditions. Only for single condition. Because ternary operator is a single line statement.


var age = 5;

// if (age >= 18) {
//   console.log("You are an adult");
// }else {
//     console.log("You are a child");
// }

var message = (age >= 18) ? "You are an adult" : "You are a minor";
console.log(message);

var canVote = (age >= 18) ? "Can Vote" : "Cannot Vote";
console.log(canVote);

// nested ternary operator
var isAdult = (age >= 18) ? "Adult" : (age >= 10) ? "Teenager" : "Child";
console.log(isAdult);

// Ternary operator with function
function checkAge(age) {
    return (age >= 18) ? "Adult" : "Minor";
}

console.log(checkAge(20));

var value = 5
console.log(value >5);
