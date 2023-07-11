// Write a function that takes an array with arbitrary elements and a number as arguments. Return a new array, the first element should be either the given number itself. or zero if the number is smaller than 6. The other elements should be the elements of the original array. Try not to mutate the original array

function newArrayWithNumber(arr, number) { 
    let num = number
    num <= 6 ? num = 0 : num = number
    return [num, ...arr]
}

const originalArray = [10, 20, 30, 40, 50];
const number = 5;
console.log(newArrayWithNumber(originalArray, number));
// Output: [0, 10, 20, 30, 40, 50]