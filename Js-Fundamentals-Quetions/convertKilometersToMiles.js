// JavaScript Program to Convert Kilometers to Miles

function convertKilometersToMiles(kilometers) {
  // Conversion factor
  const factor = 0.621371;

  // Calculate miles
  const miles = kilometers * factor;

  return miles;
}

// Example usage:
const kilometers = 10;
const miles = convertKilometersToMiles(kilometers);
console.log(`${kilometers} kilometers is equal to ${miles} miles.`);
