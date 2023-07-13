// Write a function that takes an object with two properties and a string as arguments. It should return the value of the property with key equal to the value of the string

function accessObjProp(obj, key) {
  console.log(obj[key]);
}

accessObjProp({ continent: "Asia", country: "Japan" }, "continent"); //Expected 'Asia'
accessObjProp({ country: "Sweden", continent: "Europe" }, "country"); //Expected 'Sweden'
