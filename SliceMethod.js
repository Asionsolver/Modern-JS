// Array.prototype.slice() method

// The slice() method returns a shallow copy of a portion of an array into a new array object selected from begin to end (end not included). The original array will not be modified.

var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(arr.slice(2, 5));
console.log(arr.slice(-3, 8));

var numbers = [1,2,3,4,5]
console.log(numbers.slice(-2,4));



// Using slice, create newCar from myCar.
const myHonda = { color: 'red', wheels: 4,
                engine: { cylinders: 4, size: 2.2 } 
            };


const myCar = [myHonda, 2, 'cherry condition', 'purchased 1997'];

const newCar = myCar.slice(0, 2);

console.log(newCar);

// console.log('myCar =', myCar);
console.log('myCar[0].color =', myCar[0].color);
console.log('newCar[0].color =', newCar[0].color);

// Change the color of myHonda.
myHonda.color = 'purple';
console.log('The new color of my Honda is', myHonda.color);

console.log('myCar[0].color =', myCar[0].color);
console.log('newCar[0].color =', newCar[0].color);

