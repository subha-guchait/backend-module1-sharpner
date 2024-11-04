//destructuring
//Destructuring in JavaScript is a syntax that allows you to unpack values from arrays or properties from objects into distinct variables.

//obj destructuring
const person = {
  name: "alice",
  age: 29,
  salary: 25000,
};

//
const printname = ({ name }) => {
  console.log(name);
};
printname(person);

//
const printNameAndAge = ({ name, age }) => {
  console.log(name + " is " + age + "years old");
};
printNameAndAge(person);

const { name, age } = person; // in obj destructing we have to choose same name as obj property
console.log(name, age);

//array destrucring
const hobbies = ["sports", "dance"];

const displayHobbies = ([hobby1, hobby2]) => {
  console.log(hobby1, hobby2);
};
displayHobbies(hobbies);

const [hobby1, hobby2] = hobbies; //in array destructuring we can choose any variable name instead of hobby1 and hobby2 because the element has no name they are pulled by position
console.log(hobby1, hobby2);

// Using the Rest Operator with Objects
const personData = {
  nameofPerson: "Alice",
  age: 30,
  city: "New York",
  country: "USA",
};
const { nameofPerson, ...restProps } = personData;

console.log(nameofPerson);
console.log(restProps);

//using rest operator withh array
const array = [1, 2, 3, 4, 5, 6];
const [num1, num2, ...numbers] = array;
console.log(num1);
console.log(num2);
console.log(numbers);

// What will be the output of the following?

const obj1 = { key1: 1, key2: 2, key3: 1000 };

const { key1, key3 } = { ...obj1 };

console.log(key1, key3);

//

const arr1 = ["value1", "value2"];

const [val1, val2] = arr1;

console.log(val1);

console.log(val2);

//
const obj2 = { key4: 1, key5: 2, key6: 1000 };

let { key4, key6 } = obj1;

key4 = 20;

key6 = 123;

console.log(obj1.key1, obj1.key3);
