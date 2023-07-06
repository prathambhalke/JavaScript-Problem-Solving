// Write a function that takes two strings (a and b) as arguments. If a contains b, append b to the beginning of a. If not, append it to the end. Return the concatenation

const stringChecker = (a, b) => {
  //   console.log(str.includes(substr));
  if (a.includes(b)) {
    console.log(b + a);
  } else {
    console.log(a + b);
  }
};

stringChecker("cheese", "cake"); //Expected 'cheesecake'
stringChecker("lips", "s"); //Expected 'slips'
stringChecker("Java", "script"); //Expected 'Javascript'
stringChecker(" think, therefore I am", "I"); //Expected 'I think, therefore I am'
