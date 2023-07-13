// Write a function that takes an object with two properties as argument. It should return the value of the property with key country.

const accessObjectProperties = (object) => {
  console.log(object.country);
};

accessObjectProperties({ continent: "Asia", country: "Japan" }); //Expected 'Japan'
accessObjectProperties({ country: "Sweden", continent: "Europe" }); //Expected 'Sweden'
