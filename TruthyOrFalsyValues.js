// ! Truthy Conditions
// 1. Explicitly false
// 2. Explicitly 0
// 3. Explicitly Empty string
// 4. Explicitly null
// 5. Explicitly undefined
// 6. Explicitly NaN

// ! Falsy Conditions
// 1. Explicitly true
// 2. Explicitly 1
// 3. Explicitly Non-empty string
// 4. Explicitly Non-empty array
// 5. Explicitly Non-empty object
// 6. Explicitly Non-empty function

// ! Truthy and Falsy Values

// var myVar = 'test';
// myVar = '';
// myVar = 0;
// myVar = [];
myVar = {};

if (myVar) {
    console.log('Truthy');
}
else {
    console.log('Falsy');
}

