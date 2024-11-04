const arr = ["apple", "oranges", " ", "mango", " ", "lemon"];

function findEmptyString(str) {
  if (str == " ") {
    return "empty string";
  }
  return str;
}

console.log(arr.map(findEmptyString));
//using arrow function
console.log(arr.map((str) => (str === " " ? "empty string" : str)));

//spread operator
//it copies all the properties of a object or copies all the element of an array and store it in new reference memory location
const hobbies = ["sports", "cooking"];
const copiedArray = [...hobbies];
console.log(copiedArray);

const person = {
  name: "max",
  age: 29,
  greet() {
    console.log("hi I'm " + this.name);
  },
};
const copiedPerson = { ...person }; // here copied person will be new object copied all the properties from person
console.log(copiedPerson);
copiedPerson.gender = "male";
console.log(person); // so here when we added new properties to copiedperson object it will not added to person object because this is diffrent object
console.log(copiedPerson);

// rest operator syntax same as spread operator accroding to their usage we call it diffrently. Rest operator used to merge multiple arguments into an array
const toArray = (...args) => {
  return args;
};
console.log(toArray(1, 2, 3, 4, 5));

//some exercise
const obj1 = { key1: 1 };

const obj2 = { ...obj1 };

if (obj2 === obj1) {
  console.log("same objects");
} else {
  console.log("different objects"); // it will be output because spread operate create new object with new referencee
}

const obj3 = { key1: 1, key2: 2 };

const obj4 = { ...obj1, key1: 1000 };

console.log(obj3); // key1: 1, key2: 2

console.log(obj4); // key1: 1000, key2: 2 , here first obj 4 will copy all the properties from obj3 and then it will modify key1 property to 1000
