// Write a function that takes an array of objects and a string as arguments. Add a property with key 'continent' and value equal to the string to each of the objects. Return the new array of objects. Tipp: try not to mutate the original array

const addContinentToObjects = (arr, continent) => {
  return arr.map((obj) => {
    return {
      ...obj,
      continent: continent,
    };
  });
};

const countries = [
  { name: "USA", population: 331449281 },
  { name: "China", population: 1444216107 },
  { name: "India", population: 1393409038 },
];

const updatedCountries = addContinentToObjects(countries, "Asia");

console.log(updatedCountries);
/*
  Output:
  [
    { name: 'USA', population: 331449281, continent: 'Asia' },
    { name: 'China', population: 1444216107, continent: 'Asia' },
    { name: 'India', population: 1393409038, continent: 'Asia' }
  ]
  */
