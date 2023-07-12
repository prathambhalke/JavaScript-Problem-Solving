// Write a function that takes a string as argument. As it is, the string has no meaning. Increment each letter to the next letter in the alphabet. Return the correct word

const getNextChar = (char) => {
  let result = [];

  for (let i = 0; i < char.length; i++) {
    result.push(String.fromCharCode(char.charCodeAt(i) + 1));
  }
  console.log(result.join(""));
};

getNextChar("Hello"); // Expected Ifmmp
