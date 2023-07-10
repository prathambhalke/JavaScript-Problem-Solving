// Write a function that takes an array of strings as argument. Return the longest string.

const findLongestString = (array) => {
  let longest = "";

  array.forEach((item) => {
    if (item.length > longest.length) {
      longest = item;
    }
  });

  console.log(longest);
};

// !Test Cases:
findLongestString(["help", "me", "iuguiiuguig"]); //Expected 'help'
findLongestString(["I", "need", "candy"]); //Expected 'candy'
