// JavaScript Program to Calculate the Area of a Triangle

function calculateTriangleArea(base, height) {
  // Calculate the area
  const area = (base * height) / 2;

  return area;
}

// Example usage:
const baseValue = 10;
const heightValue = 5;
const areaValue = calculateTriangleArea(baseValue, heightValue);

console.log(`The area of the triangle is ${areaValue}`);
