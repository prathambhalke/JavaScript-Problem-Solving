// Write a function that takes two strings (a and b) as arguments. Return the number of times a occurs in b.

const countStringOccurrences = (substring, string) => {
  let count = 0;
  let splitString = string.split("");
  for (let i = 0; i < splitString.length; i++) {
    if (splitString[i] === substring) {
      count++;
    }
  }
  console.log(count);
};

// Another Optimised Approch
// function countStringOccurrences(substring, string) {
//   return string.split(substring).length - 1;
// }

countStringOccurrences(
  "m",
  "how many times does the character occur in this sentence?"
); //Expected 2

countStringOccurrences(
  "h",
  "how many times does the character occur in this sentence?"
); //Expected 4

countStringOccurrences(
  "?",
  "how many times does the character occur in this sentence?"
); //Expected 1

countStringOccurrences(
  "z",
  "how many times does the character occur in this sentence?"
); //Expected 0
