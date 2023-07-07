// Write a function that takes two numbers (a and b) as arguments. If a is smaller than b, divide a by b. Otherwise, multiply both numbers. Return the resulting value

const mathOperators = (a, b) => {
  if (a < b) {
    console.log(a / b);
  } else {
    console.log(a * b);
  }
  //return a < b ? a / b : a * b; // another approch
};

mathOperators(10, 100); //Expected 0.1
mathOperators(90, 45); //Expected 4050
mathOperators(8, 20); //Expected 0.4
mathOperators(2, 0.5); //Expected 1
