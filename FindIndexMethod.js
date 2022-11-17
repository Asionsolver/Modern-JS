//Array.prototype.findIndexMethod

var number = [1.5, 2.3, 3.9, 4.5, 5.9, 6, 7, 8, 9, 10];

var result = number.findIndex(function(currentValue, index, arr) {
    return currentValue > 5;
});

var result = number.findIndex(function(currentValue, index, arr) {
    return currentValue > 50;
});

console.log(result);