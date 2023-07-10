// Write a function that takes an array as argument. It should return true if all elements in the array are equal. It should return false otherwise.

function areAllElementsEqual(arr) {
  const res = arr.every((element) => element === arr[0]);
  console.log(res);
}

//! Test Cases:

areAllElementsEqual([true, true, true, true]); //Expected true
areAllElementsEqual(["test", "test", "test"]); //Expected true
areAllElementsEqual([1, 1, 1, 2]); //Expected false
areAllElementsEqual(["10", 10, 10, 10]); //Expected false
