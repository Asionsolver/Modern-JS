// Array.prototype.filter() method

// The filter() method creates a new array with all elements that pass the test implemented by the provided function.

var number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

var result = number.filter((currentValue, index, array) => {
    return currentValue > 4;
});

console.log(result);

var numbers = [1,7,5,3,9,2,6,4,8,10];

var results = numbers.filter((currentValue, index, array) => { 
    return currentValue > 4;
});

console.log(results);