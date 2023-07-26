// Write a function that takes a sentence as input and returns a new sentence with the first letter of each word capitalized and the rest of the letters in lowercase.

function titleCase(sentence) {
  const words = sentence.split(" ");

  const titleCaseWords = words.map((word) => {
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
  });

  const result = titleCaseWords.join(" ");

  return result;
}

const sentence = "this is a sentence";
const titleCasedSentence = titleCase(sentence);
console.log(titleCasedSentence); // Output: "This Is A Sentence"
