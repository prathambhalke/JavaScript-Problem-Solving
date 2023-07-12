// This challenge is a little bit more complex. Write a function that takes a number (a) as argument. If a is prime, return a. If not, return the next higher prime number.

function checkPrime(number) {
  for (var i = 2; i < number; i++) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
}

function myFunction(number) {
  if (checkPrime(number)) {
    return number;
  } else {
    while (checkPrime(number) === false) {
      number++;
    }
  }
  return number;
}

console.log(myFunction(12)); // Expected 13
console.log(myFunction(38)); // Expected 41
