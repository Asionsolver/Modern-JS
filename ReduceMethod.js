// Array.prototype.reduce() method

/*
Definition and Usage
The reduce() method executes a reducer function for array element.

The reduce() method returns a single value: the function's accumulated result.

The reduce() method does not execute the function for empty array elements.

The reduce() method does not change the original array.
*/

/*
!Note
At the first callback, there is no return value from the previous callback.

Normally, array element 0 is used as initial value, and the iteration starts from array element 1.

If an initial value is supplied, this is used, and the iteration starts from array element 0.
*/

/*
Syntax
array.reduce(function(total, currentValue, currentIndex, arr), initialValue)
*/

/*

Parameters
Parameter	            Description
function()	            Required.
                        A function to be run for each element in the array.


Reducer function parameters:

total	                Required.
                        The initialValue, or the previously returned value of the function.

currentValue	        Required.
                        The value of the current element.

currentIndex	        Optional.
                        The index of the current element.

arr	                    Optional.
                        The array the current element belongs to.

initialValue	        Optional.
                        A value to be passed to the function as the initial value.
*/
/*
Return Value
The accumulated result from the last call of the callback function.
*/



var numbers = [1,2,3,4];

var sum = numbers.reduce((prevValue, currentValue)=> {
    return prevValue + currentValue;
    },0);

console.log(sum);