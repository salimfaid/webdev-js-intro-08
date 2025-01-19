"use strict";

// Get references to DOM elements
const submissionBtn = document.getElementById("submission-btn");
const smallestNumberElement = document.getElementById("smallest-number");
const largestNumberElement = document.getElementById("largest-number");
const averageNumberElement = document.getElementById("average-number");

// Define the array
const myNumbers = [35, 130, 354, 100, 25, 134, 99, 200, 35];

// Function to find the smallest number in the array
function findSmallestNumber(array) {
    let smallest = array[0];
    for (let i = 1; i < array.length; i++) {
        if (array[i] < smallest) {
            smallest = array[i];
        }
    }
    return smallest;
}

// Function to find the largest number in the array
function findLargestNumber(array) {
    let largest = array[0];
    for (let i = 1; i < array.length; i++) {
        if (array[i] > largest) {
            largest = array[i];
        }
    }
    return largest;
}

// Function to calculate the average of the numbers in the array
function findAverage(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }
    return sum / array.length;
}

// Add an event listener to the submission button
submissionBtn.addEventListener("click", () => {
    // Calculate results
    const smallestNumber = findSmallestNumber(myNumbers);
    const largestNumber = findLargestNumber(myNumbers);
    const averageNumber = findAverage(myNumbers);

    // Render the results to the HTML elements
    smallestNumberElement.textContent = smallestNumber;
    largestNumberElement.textContent = largestNumber;
    averageNumberElement.textContent = averageNumber.toFixed(2); // Round average to 2 decimals
});
