// JavaScript Types
// 1. Number
// 2. String
// 3. Boolean
// 4. Undefined
// 5. Null
// 6. Symbol
// 7. Object - Arrays, Functions, Objects
// 8. BigInt
// console.log(typeof null) // object

// Pass by value vs Pass by reference
// var a = 5;
// var b = a;
// b++;
// console.log(a); // 5
// console.log(b); // 6

let obj1 = { name: "Yao", password: "123" };
let obj2 = obj1;
let obj3 = { ...obj2 };

obj2.password = "easypeasy";
// console.log(obj1); // {name: 'Yao', password: 'easypeasy'}
// console.log(obj2); // {name: 'Yao', password: 'easypeasy'}
// console.log(obj3); // {name: 'Yao', password: '123'}

// Array
var c = [1, 2, 3, 4, 5];
var d = c;
d.push(1876);
// console.log(c); // [1, 2, 3, 4, 5, 1876]
// console.log(d); // [1, 2, 3, 4, 5, 1876]

// Shallow Cloning
var obj = { a: "a", b: "b", c: { deep: "try and copy me" } };
var clone = Object.assign({}, obj);
var clone2 = { ...obj };

obj.c.deep = "hahaha";
// console.log(obj); // {a: 'a', b: 'b', c: {deep: 'hahaha'}}
// console.log(clone); // {a: 'a', b: 'b', c: {deep: 'hahaha'}}
// console.log(clone2); // {a: 'a', b: 'b', c: {deep: 'hahaha'}}

var user1 = { name: "nerd", org: "dev" };
var user2 = { name: "nerd", org: "dev" };
var eq = user1 === user2;
// console.log(eq);

const number = 100;
const string = "Jay";
let object1 = {
  value: "a",
};
let object2 = {
  value: "b",
};
let object3 = object2;

function change(number, string, object1, object2) {
  number = number * 10;
  string = "Pete";
  object1 = object2;
  object2.value = "c";
}

change(number, string, object1, obj2);

//Guess the outputs here before you run the code:
// console.log(number);
// console.log(string);
// console.log(object1.value);


// Type Coercion

console.log("1" == 1); // true
