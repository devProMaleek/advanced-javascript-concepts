// Function Invocation and the Execution Stack and Arguments
function marry(person1, person2) {
  console.log(arguments);
  return `${person1} is now married to ${person2}`;
}

// marry("Tim", "Tina");

const marryArrow = (person1, person2) => {
  console.log(arguments);
  return `${person1} is now married to ${person2}`;
};

//marryArrow("Tim", "Tina"); // arguments is not defined

// Variable Environments: Hoisting and the TDZ
var isValid; // undefined
function two() {
  var isValid; // undefined
}

function one() {
  var isValid = true; // local environment
  two(); // new execution context
}

var isValid = false;
one();

// Scope Chain
var x = "x";
function findName() {
  console.log(x);
  var b = "b";
  return printName();
}

function printName() {
  var c = "c";
  return "Andrei Neagoie";
}

function sayMyName() {
  var a = "a";
  console.log(c)
  return findName();
}

// sayMyName();

// Function Scope vs Block Scope
function loop() {
  for (var i = 0; i < 5; i++) {
    console.log(i);
  }
  console.log(i);
}

// loop()


// this keyword
// console.log(this); // window

// 1. Gives object method access to their object properties and methods.
const obj = {
  name: "Billy",
  sing() {
    return "lalala " + this.name;
  },
  singAgain() {
    return this.sing() + "!";
  }
}

// console.log(obj.sing()); // undefined

// 2. Execute same code for multiple objects.

const name = "Sunny";
function importantPerson() {
  console.log(this.name);
}

const obj1 = { name: "Cassy", importantPerson: importantPerson };
const obj2 = { name: "Jacob", importantPerson: importantPerson };

// importantPerson(); // undefined
// obj1.importantPerson(); // Cassy
// obj2.importantPerson(); // Jacob


// call, apply, bind

const wizard = {
  name: "Merlin",
  health: 100,
  heal(num1, num2) {
    return this.health += num1 + num2;
  }
}

const archer = {
  name: "Robin Hood",
  health: 30
}

// console.log("1", archer);
// wizard.heal.call(archer, 50, 30);
 const healArcher = wizard.heal.bind(archer, 50, 30);

// console.log("2", archer);

const array = [1,2,3];
 
function getMaxNumber(arr){
  return Math.max.apply(null, arr);
}

// console.log(getMaxNumber(array));

const character = {
  name: 'Simon',
  getCharacter() {
    return this.name;
  }
};

console.log('?', character.getCharacter());
const giveMeTheCharacterNOW = character.getCharacter.bind(character);

//How Would you fix this?
console.log('?', giveMeTheCharacterNOW()); //this should return 'Simon' bud doesn't