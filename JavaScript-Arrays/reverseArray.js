// In this coding challenge, you will be implementing a function called reverseArray(array, value) that takes one argument: an array. The function should reverse the order of the elements in the array.

const reverseArray = (array) => {
  //   return array.reverse(); // using inbuilt method reverse

  // Another Approch without inbuilt methods

  let reversedArray = [];

  for (let i = array.length - 1; i >= 0; i--) {
    // reversedArray.push(array[i]);
    reversedArray[reversedArray.length] = array[i];
  }
  return reversedArray;
};

console.log(reverseArray([1, 2, 3, 4])); // Output: [4, 3, 2, 1]
console.log(reverseArray([1, 2])); // Output: [2, 1]
console.log(reverseArray([])); // Output: []
