// Destructuring Object

const person = {
    name: 'John',
    age: 30,
    id : 123,
    education: {
        degree: 'Bachelors',
        skill: 'Javascript'
    }
}

// old way

// const name = person['name'];

// console.log(name);

// new way
// const {name, age, id} = person;
// const {name:title, age, id} = person;
// console.log(title, age, id);

// const {name,id, education:{degree,skill}} = person;
const {name,id, education:{degree,skill} = {}} = person;  //default value

console.log(name, id, degree, skill);


// Array Destructuring

const numbers = [1,2,3,4,5,6,[11,12,13,14,15],7,8,9,10 ];

// const [first, second, third,fourth] = numbers;
// const [, second, ,fourth] = numbers;
const [, second, ,fourth, , ,[,twelve, , fourthen]] = numbers;

console.log( second, fourth, twelve, fourthen);

var a = 10;
var b = 20;

// old way

// var temp = a;
// a = b;
// b = temp;
// console.log(a,b);


// new way

[b,a] = [b,a];

console.log(a,b);



