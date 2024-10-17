// Write a function called countUniqueValues that accepts a sorted array of integers. The function should return the count of unique values present in the array.

// If the array is empty, the function should return 0.

const countUniqueValues = (arr) => {
    if (arr.length === 0) return 0;

    let unique = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== arr[i + 1]) {
            unique++;
        }
    }
    return unique;
};

// Test cases
console.log(countUniqueValues([1, 1, 2, 3, 3, 4, 5])); // 5
console.log(countUniqueValues([-2, -2, -1, 0, 1, 1, 2])); // 5
console.log(countUniqueValues([5, 5, 5, 5, 5])); // 1
console.log(countUniqueValues([])); // 0
