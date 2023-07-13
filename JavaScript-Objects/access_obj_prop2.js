// Write a function that takes an object with two properties as argument. It should return the value of the property with key 'prop-2'. Tipp: you might want to use the square brackets property accessor

function accessObjProp(obj) {
  console.log(obj["prop-2"]);
}

accessObjProp({ one: 1, "prop-2": 2 }); //Expected 2
accessObjProp({ "prop-2": "two", prop: "test" }); //Expected 'two'
