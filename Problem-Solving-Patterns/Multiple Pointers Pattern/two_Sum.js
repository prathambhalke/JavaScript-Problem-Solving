// Given a sorted array of integers and a target value, write a function that finds two numbers from the array that sum up to the target value. The function should return these two numbers as an array.
// If no such pair exists, return undefined.

const twoSum = (arr, target) => {
    let start = 0;
    let end = arr.length - 1;

    while (start < end) {
        let sum = arr[start] + arr[end];
        if (sum === target) {
            return [arr[start], arr[end]];
        } else if (sum > target) {
            end--;
        } else {
            start++;
        }
    }
    return undefined;
};

// Test cases
console.log(twoSum([-4, -3, -2, -1, 0, 1, 2, 3, 10], 0)); // [-3, 3]
console.log(twoSum([1, 2, 3, 4, 6, 8, 11], 10)); // [2, 8]
console.log(twoSum([5, 7, 9, 11, 12], 20)); // [9, 11]
console.log(twoSum([-2, -1, 1, 2], 3)); // undefined
