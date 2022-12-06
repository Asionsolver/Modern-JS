// Definition and Usage
// map() creates a new array from calling a function for every array element.

// map() calls a function once for each element in an array.

// map() does not execute the function for empty elements.

// map() does not change the original array.

//Syntax
// array.map(function(currentValue, index, arr), thisValue)

/* 
Parameters

Parameter	            Description

1. function()	        Required.
                        A function to be run for each array element.

2. currentValue	        Required.
                        The value of the current element.

3. index	            Optional.
                        The index of the current element.

4. arr	                Optional.
                        The array of the current element.

5. thisValue	        Optional.
                        Default value undefined.
                        A value passed to the function to be used as its this value. 
*/
/*

Return Value
Type	                Description

An array	            The results of a function for each array element.

*/

const numbers = [4, 9, 16, 25];
const newArr = numbers.map(Math.sqrt)

console.log(newArr); // [2, 3, 4, 5]
console.log(numbers);

const numbers1 = [65, 44, 12, 4];
const newArr1 = numbers1.map(myFunction)

function myFunction(num) {
  return num * 10;
}

console.log(newArr1); // [650, 440, 120, 40]
console.log(numbers1);

const persons = [
  {firstname : "Malcom", lastname: "Reynolds"},
  {firstname : "Kaylee", lastname: "Frye"},
  {firstname : "Jayne", lastname: "Cobb"}
];


function getFullName(item) {
    return [item.firstname,item.lastname].join(" ");
}
console.log(persons.map(getFullName));