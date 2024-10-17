// Given two strings, write a function to determine if the two strings are anagrams of each other.
// An anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

const validAnagram = (str1, str2) => {
    if (str1.length !== str2.length) return false;

    const str1Frequency = {};
    const str2Frequency = {};

    // Populate frequency counter for str1
    for (let char of str1) {
        str1Frequency[char] = (str1Frequency[char] || 0) + 1;
    }

    // Populate frequency counter for str2
    for (let char of str2) {
        str2Frequency[char] = (str2Frequency[char] || 0) + 1;
    }

    // Compare both frequency counters
    for (let key in str1Frequency) {
        if (str2Frequency[key] !== str1Frequency[key]) return false;
    }

    return true;
};

// Test cases
console.log(validAnagram("ice", "iec")); // true
console.log(validAnagram("listen", "silent")); // true
console.log(validAnagram("hello", "world")); // false
console.log(validAnagram("rat", "car")); // false
