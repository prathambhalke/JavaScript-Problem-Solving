// Write a function that takes a string as argument. Extract the last 3 characters from the string. Return the result

const extractLastThreeCharacters = (str) => {
  return str.slice(-3);
};

extractLastThreeCharacters("abcdefg"); //Expected 'efg'
extractLastThreeCharacters("1234"); //Expected '234'
extractLastThreeCharacters("fgedcba"); //Expected 'cba'
