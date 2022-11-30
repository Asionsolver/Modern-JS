// Array.prototype.push() method

// Definition and Usage
// The push() method adds new items to the end of an array.

// The push() method changes the length of the array.

// The push() method returns the new length.

// Note: This method changes the original array.

// Syntax
// array.push(item1, item2, ..., itemX)


// Return value from the push() method
// The push() method returns the new array length.

// Example
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var numbers2 = [11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
var numbers3 = [22, 23, 24, 25, 26, 27, 28, 29, 30];


var result = numbers.push(11,12,13,14);
var result2 = numbers2.push(21);
var result3 = numbers3.push([31,32,33,34,35,36,37,38,39,40]);

console.log(result);
console.log(result2)
console.log(result3)

console.log(numbers);
console.log(numbers2);
console.log(numbers3);