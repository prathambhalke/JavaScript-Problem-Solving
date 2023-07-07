// Write a function that takes a number (a) as argument. If a is a whole number (has no decimal place), return true. Otherwise, return false.

const checkWholeNumber = (a) => {
  console.log(Number.isInteger(a));
  console.log(a - Math.floor(a) === 0); //another approch
};

checkWholeNumber(4); //Expected true
checkWholeNumber(1.123); //Expected false
checkWholeNumber(1048); //Expected true
checkWholeNumber(10.48); //Expected false
