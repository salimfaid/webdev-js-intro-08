// Prevent us from attempting to use variables
// that are not declared

"use strict";

// 1. Basic loop syntax
const basicLoopArray = [1, 2, 3, 4, 5];
for (let i = 0; i < basicLoopArray.length; i++) {
    console.log(`Basic loop value at index ${i}: ${basicLoopArray[i]}`);
}

// 2. "for.of" loop syntax
const forOfLoopArray = ["a", "b", "c", "d"];
for (const value of forOfLoopArray) {
    console.log(`For...of loop value: ${value}`);
}

// 3. Array.forEach() method
const forEachArray = [10, 20, 30, 40];
forEachArray.forEach((value, index) => {
    console.log(`forEach loop value at index ${index}: ${value}`);
});

// 4. "for...of" loop with assignment of new values
const forOfAssignArray = [5, 10, 15, 20];
for (let value of forOfAssignArray) {
    value *= 2; // Attempt to assign a new value
    console.log(`Modified value (for...of): ${value}`);
}
console.log("Array after for...of modification attempt:", forOfAssignArray);


// 5. Array.forEach() method with assignment of new values
const forEachAssignArray = [3, 6, 9, 12];
forEachAssignArray.forEach((value, index, array) => {
    array[index] = value * 2; 
    console.log(`Modified value (forEach): ${array[index]}`);
});
console.log("Array after forEach modification:", forEachAssignArray);


// 6. Research "for...in" loop (useful for objects)
const forInObject = { a: 1, b: 2, c: 3 };
for (const key in forInObject) {
    console.log(`Key: ${key}, Value: ${forInObject[key]}`);
}

