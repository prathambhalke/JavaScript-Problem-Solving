// Write a function that takes two strings (a and b) as arguments. Return the number of times a occurs in b.

function myFunction(a, b) {
  let count = 0;
  let index = b.indexOf(a);
  while (index !== -1) {
    count++;
    index = b.indexOf(a, index + 1);
  }
  return count;
}

// another approch
// function myFunction(a, b) {
//   return b.split(a).length - 1;
// }

myFunction("m", "how many times does the character occur in this sentence?"); //Expected 2
myFunction("h", "how many times does the character occur in this sentence?"); //Expected 4
myFunction("?", "how many times does the character occur in this sentence?"); //Expected 1
myFunction("z", "how many times does the character occur in this sentence?"); //Expected 0
