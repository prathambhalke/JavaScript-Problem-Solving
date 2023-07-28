// write a firstFactorial(num) take the num parameter being passed and return the factorial of it.

function FirstFactorial(num) {
  let factorial = 1;
  // code goes here
  for (let i = num; i > 0; i--) {
    factorial *= i;
  }
  return factorial;
}

// keep this function call here
console.log(FirstFactorial(4)); // Expected 24
