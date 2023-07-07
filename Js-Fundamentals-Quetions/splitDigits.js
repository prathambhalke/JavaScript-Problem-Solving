// Write a function that takes a number (a) as argument. Split a into its individual digits and return them in an array. Tipp: you might want to change the type of the number for the splitting

const splitDigits = (num) => {
  console.log(String(num).split(""));
};

splitDigits(10); //Expected [1,0]
splitDigits(931); //Expected [9,3,1]
splitDigits(193278); //Expected [1,9,3,2,7,8]
