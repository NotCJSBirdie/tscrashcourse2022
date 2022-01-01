"use strict";
//Basic types
let id = 5;
console.log("id", id);
let company = "Carl Serquina";
let isPublished = true;
let x = "hello";
x = true;
let age;
age = 30;
// arrays
let ids = [1, 2, 3, 4, 5];
let arr = [1, true, "hello"];
// tuple
//specify the exact types inside of an array
//Tuple
let person = [1, "Carl", false];
// Tuple Array
let employee;
employee = [
    [1, "Carl"],
    [2, "Jack"],
    [3, "Jill"],
];
// Union
let pid;
pid = "hello";
// Enum
var Direction1;
(function (Direction1) {
    Direction1[Direction1["Up"] = 1] = "Up";
    Direction1[Direction1["Down"] = 2] = "Down";
    Direction1[Direction1["Left"] = 3] = "Left";
    Direction1[Direction1["Right"] = 4] = "Right";
})(Direction1 || (Direction1 = {}));
console.log(Direction1.Up);
var Direction2;
(function (Direction2) {
    Direction2["Up"] = "Up";
    Direction2["Down"] = "Down";
    Direction2["Left"] = "Left";
    Direction2["Right"] = "Right";
})(Direction2 || (Direction2 = {}));
console.log(Direction2.Down);
const user = {
    id: 1,
    name: "John",
};
//Type Assertion
let cid = 1;
// let customerId = <number>cid
// customerId = true
let customer = cid;
// Functions
function addNum(x, y) {
    return x + y;
}
console.log(addNum(1, 2));
function log(message) {
    return console.log(message);
}
log("hello there!");
//readonly properties
//question mark means optional not really required
const user1 = {
    id: 2,
    name: "Jack",
};
const p1 = 1;
const add = (x, y) => x + y;
const sub = (x, y) => x - y;
class Person {
    constructor(id, name, age) {
        this.id = id;
        this.name = name;
        this.age = age;
    }
    register() {
        return `${this.name} is now registered`;
    }
}
// the this keyword is just telling the property of the class to equate to the parameters of the constructor
const brad = new Person(1, "Brad Traversy", 30);
//instantiation
const mike = new Person(2, "Mike Jordan", 45);
// console.log(brad, mike);
// console.log(brad.register());
// Example of a class with a property type:
class Human {
    constructor(id, name, age) {
        this.id = id;
        this.name = name;
        this.age = age;
    }
}
const human1 = new Human(1, "Carl", 20);
console.log(human1);
//Extending Classes
//Subclasses
class Employee extends Person {
    constructor(id, name, age, position) {
        super(id, name, age);
        this.position = position;
    }
}
const emp = new Employee(3, "Sean", 30, "developer");
console.log(emp.register());
//Generics
//Generics are <T> like a placeholder or a Type!
function getArray(items) {
    return new Array().concat(items);
}
let numArray = getArray([1, 2, 3, 4]);
let strArray = getArray(["brad", "john", "jill"]);
numArray.push(5);
strArray.push("carl");
