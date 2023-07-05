// Write a function that takes a string (a) as argument. Remove the first 3 characters of a. Return the result

const removeFirstThreeCharacters = (str) => {
  return str.slice(3);
};

removeFirstThreeCharacters("abcdefg"); //Expected 'defg'
removeFirstThreeCharacters("1234"); //Expected '4'
removeFirstThreeCharacters("fgedcba"); //Expected 'dcba'
