// Write a JavaScript function `usernameValidation(str)` to determine if the input string is a valid username based on the rules:

// 1. Username is between 4 and 25 characters.
// 2. It must start with a letter.
// 3. It can only contain letters, numbers, and underscores.
// 4. It cannot end with an underscore character.

// Return `true` if the username is valid, otherwise return `false`.

function usernameValidation(str) {
  if (str.length < 4 || str.length > 25) {
    return "false";
  }

  if (!/^[a-zA-Z]/.test(str)) {
    return "false";
  }

  if (!/^[a-zA-Z0-9_]+$/.test(str)) {
    return "false";
  }

  if (str.endsWith("_")) {
    return "false";
  }

  return "true";
}

//! Another Optimised Approch

// function usernameValidation(str) {
//   const regex = /^[a-zA-Z][a-zA-Z0-9_]{2,23}(?<!_)$/; // A single regex for validation

//   return regex.test(str) ? "true" : "false";
// }

// Test cases
console.log(usernameValidation("hello_world123")); // Output: true
console.log(usernameValidation("123username")); // Output: false
console.log(usernameValidation("user@name")); // Output: false
console.log(usernameValidation("short")); // Output: false
