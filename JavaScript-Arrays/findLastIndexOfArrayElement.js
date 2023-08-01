// In this coding challenge, you will be implementing a function called findLastIndexOf(array, value) that takes two arguments: an array and a value. The function should return the index of the last occurrence of the value in the array.

const findLastIndexOf = (array, value) => {
  // return array.lastIndexOf(value)

  for (let i = array.length - 1; i >= 0; i--) {
    if (array[i] === value) {
      return i;
    }
  }
};
console.log(findLastIndexOf([1, 2, 3, 2], 2)); // Output: 3
console.log(findLastIndexOf(["foo", "bar", "baz", "bar"], "bar")); // Output: 3
