// Write a function that takes an array of strings as argument. Group those strings by their first letter. Return an object that contains properties with keys representing first letters. The values should be arrays of strings containing only the corresponding strings. For example, the array ['Alf', 'Alice', 'Ben'] should be transformed to. { a: ['Alf', 'Alice'], b: ['Ben']}

const groupByFirstLetter = (array) => {
  const result = {};
  array.forEach((item) => {
    let firstLetter = item[0].toLowerCase();
    if (result[firstLetter]) {
      result[firstLetter].push(item);
    } else {
      result[firstLetter] = [item];
    }
  });
  console.log(result);
};

const strings = ["Alf", "Alice", "Ben", "apple", "banana"];
groupByFirstLetter(strings);
