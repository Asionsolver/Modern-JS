// Array.prototype.find() method

const number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

var result = number.find(function(currentValue, index, arr) {
    return currentValue > 5;
});

console.log(result);

// This confusion

class Student {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }


test(){
    console.log("Hello");
}


// exampleFunction(){
//     let array = [1, 2, 3, 4];
//     array.find(function(){
//         this.test();
//     }, this );

// using arrow function
    exampleFunction(){
    let array = [1, 2, 3, 4];
    array.find(()=>{
        this.test();
    });
}
}

let student = new Student("John", 20);

student.exampleFunction();