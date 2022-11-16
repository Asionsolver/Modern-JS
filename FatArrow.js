// Normal function
function number() {
    return 5;
}

function number(n) {
    return n;
}

console.log(number(10));

// ES6 flat arrow function

var numbers = () => {
    return 5;
}

console.log(numbers());

//If one statement is there in the function then we can remove the curly braces and return keyword

var numbers = () => 5;
console.log(numbers());

var number = () => console.log (5);
number();

// If we have only one parameter then we can remove the parenthesis

var numbers = n => 10;
console.log(numbers(10));

var number = (n) => 10;
console.log(number(10));

// If we have more than one parameter then we have to use parenthesis

var numbers = (a, b) => a + b;
console.log(numbers(10, 20)); 

// var javascript ={
//     name: 'JavaScript',
//     libraries: ['React', 'Angular', 'Vue'],
//     printLibraries: function() {
//         var self = this; 
//         self.libraries.forEach(function(a) {
//             console.log(`${self.name} loves ${a}`);
//         })
//     }
//}

var javascript ={
    name: 'JavaScript',
    libraries: ['React', 'Angular', 'Vue'],
    printLibraries: function() {
        this.libraries.forEach((a) => console.log(`${this.name} loves ${a}`));
    },
};




javascript.printLibraries();
