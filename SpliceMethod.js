// Array.prototype.splice() method

var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

var result = numbers.splice(2, 3, 11,12,13,14);

console.log(result); // [3, 4, 5]

console.log(numbers); // [1, 2, 11, 12, 13, 14, 6, 7, 8, 9, 10]

// The splice() method changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.

var negativeNumber = [-1, -2, -3, -4, -5, -6, -7, -8, -9, -10];

var result = negativeNumber.splice(-2, 3, 11,12,13,14);
var result2 = negativeNumber.splice(-1, 3, 15,16,17,18);

console.log(result); // [-9, -10]
console.log(negativeNumber)
console.log(result2); // [-10]
console.log(negativeNumber)
