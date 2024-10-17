/**
 * Naive Solution
 *
 * The naive solution checks for each element in arr1 if its square exists in arr2.
 * It uses indexOf to find the square and splices it from arr2 to avoid duplicates.
 * This approach has a time complexity of O(n^2).
 *
 * @param {number[]} arr1 - The first array of numbers.
 * @param {number[]} arr2 - The second array of numbers.
 * @returns {boolean} - Returns true if arr2 contains the squares of arr1, false otherwise.
 */
function checkSquaredElements(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }

  for (let i = 0; i < arr1.length; i++) {
    const square = arr1[i] ** 2;
    const index = arr2.indexOf(square);
    if (index === -1) {
      return false; // Square not found
    }
    arr2.splice(index, 1); // Remove found square to handle duplicates
  }
  return true;
}

/**
 * Optimized Solution
 *
 * The optimized solution uses frequency counters to track the occurrences of each number.
 * This approach has a time complexity of O(n).
 *
 * @param {number[]} arr1 - The first array of numbers.
 * @param {number[]} arr2 - The second array of numbers.
 * @returns {boolean} - Returns true if arr2 contains the squares of arr1, false otherwise.
 */
function checkSquaredElements(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }

  const frequencyCounter1 = {};
  const frequencyCounter2 = {};

  // Count the frequency of each element in arr1
  for (const key of arr1) {
    frequencyCounter1[key] = (frequencyCounter1[key] || 0) + 1;
  }

  // Count the frequency of each element in arr2
  for (const key of arr2) {
    frequencyCounter2[key] = (frequencyCounter2[key] || 0) + 1;
  }

  // Check if the square of each key in frequencyCounter1 exists in frequencyCounter2
  for (const key in frequencyCounter1) {
    const square = key ** 2;
    if (!(square in frequencyCounter2)) {
      return false; // Square not found
    }
    if (frequencyCounter2[square] !== frequencyCounter1[key]) {
      return false; // Frequencies do not match
    }
  }
  return true;
}

// Test Cases
console.log(checkSquaredElements([1,1, 2, 3, 3], [3,4, 1, 9, 9])); // true
console.log(checkSquaredElements([1, 2, 3], [1, 9])); // false
console.log(checkSquaredElements([2, 2, 3], [4, 4, 9])); // true
console.log(checkSquaredElements([2, 3], [4, 9, 9])); // false
