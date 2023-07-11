// Write a function that takes two arrays as arguments. Merge both arrays and remove duplicate values. Sort the merge result in ascending order. Return the resulting array

const mergeAndSortArrays = (array1, array2) => {
  let mergedArr = [...array1, ...array2];
  let set1 = new Set(mergedArr);
  let result = [...set1].sort((a, b) => a - b);
  console.log(result);
};

mergeAndSortArrays([1, 2, 3], [3, 4, 5]); //Expected [ 1, 2, 3, 4, 5 ]
mergeAndSortArrays([-10, 22, 333, 42], [-11, 5, 22, 41, 42]); //Expected [ -11, -10, 5, 22, 41,  42, 333]
