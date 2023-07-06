// Write a function that takes a string (a) as argument. Remove the last 3 characters of a. Return the result

const removeLastNCharacter = (str) => {
  return str.slice(0, -3);
};

removeLastNCharacter("abcdefg"); //Expected 'abcd'
removeLastNCharacter("1234"); //Expected '1'
removeLastNCharacter("fgedcba"); //Expected 'fged'
