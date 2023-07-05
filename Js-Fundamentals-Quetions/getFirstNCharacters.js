// Write a function that takes a string (a) as argument. Get the first 3 characters of a. Return the result

const getFirstNCharacters = (str) => {
  return str.slice(0, 3);
};

getFirstNCharacters("abcdefg"); //Expected 'abc'
getFirstNCharacters("1234"); //Expected '123'
getFirstNCharacters("fgedcba"); //Expected 'fge'
