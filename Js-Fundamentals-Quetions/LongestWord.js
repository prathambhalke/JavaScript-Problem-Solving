// Have the function LongestWord(sen) take the sen parameter being passed and return the longest word in the string. If there are two or more words that are the same length, return the first word from the string with that length. Ignore punctuation and assume sen will not be empty. Words may also contain numbers, for example "Hello world123 567"

function LongestWord(sen) {
  // Remove non-alphanumeric characters and split the string into words
  const words = sen.replace(/[^a-zA-Z0-9 ]/g, "").split(" ");

  // Initialize variables to keep track of the longest word and its length
  let longestWord = "";
  let maxLength = 0;

  // Iterate through the words to find the longest word
  for (const word of words) {
    if (word.length > maxLength) {
      longestWord = word;
      maxLength = word.length;
    }
  }

  return longestWord;
}

// Test cases
console.log(LongestWord("fun&!! time")); // Output: time
console.log(LongestWord("Hello world123 567")); // Output: Hello
