// Write a function that takes arguments an arbitrary number of arrays. It should return an array containing the values of all arrays.

const mergeArrays = (...arrays) => {
  const mergedArray = [];
  for (let i = 0; i < arrays.length; i++) {
    mergedArray.push(...arrays[i]);
  }
  console.log(mergedArray);
};

//! Another Approch

// const mergeArrays = (...arrays) => {
//   const res = arrays.flat();
//   console.log(res);
// };

//! Test Cases

mergeArrays([1, 2, 3], [4, 5, 6]); //Expected [1, 2, 3, 4, 5, 6]
mergeArrays(["a", "b", "c"], [4, 5, 6]); //Expected ['a', 'b', 'c', 4, 5, 6]
mergeArrays([true, true], [1, 2], ["a", "b"]); //Expected [true, true, 1, 2, 'a', 'b']
