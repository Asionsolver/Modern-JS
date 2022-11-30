//Array.prototype.concat() method

// Definition and Usage
// The concat() method concatenates (joins) two or more arrays.

// The concat() method returns a new array, containing the joined arrays.

// The concat() method does not change the existing arrays.

const arr1 = ["Cecilie", "Lone"];
const arr2 = ["Emil", "Tobias", "Linus"];
const children = arr1.concat(arr2);

console.log(children);
console.log(arr1); // !Note that arr1 is not changed

const arr11 = ["Cecilie", "Lone"];
const arr21 = ["Emil", "Tobias", "Linus"];
const arr31 = ["Robin"];
const children1 = arr11.concat(arr21, arr31);

console.log(children1);
