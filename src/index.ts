//Basic types

let id: number = 5;

console.log("id", id);

let company: string = "Carl Serquina";

let isPublished: boolean = true;

let x: any = "hello";

x = true;

let age: number;

age = 30;

// arrays

let ids: number[] = [1, 2, 3, 4, 5];

let arr: any[] = [1, true, "hello"];

// tuple
//specify the exact types inside of an array

//Tuple

let person: [number, string, boolean] = [1, "Carl", false];

// Tuple Array
let employee: [number, string][];

employee = [
  [1, "Carl"],
  [2, "Jack"],
  [3, "Jill"],
];

// Union

let pid: string | number;

pid = "hello";

// Enum
enum Direction1 {
  Up = 1,
  Down,
  Left,
  Right,
}

console.log(Direction1.Up);

enum Direction2 {
  Up = "Up",
  Down = "Down",
  Left = "Left",
  Right = "Right",
}

console.log(Direction2.Down);

//Objects

type User = {
  id: number;
  name: string;
};

const user: User = {
  id: 1,
  name: "John",
};

//Type Assertion
let cid: any = 1;
// let customerId = <number>cid

// customerId = true
let customer = cid as number;

// Functions

function addNum(x: number, y: number): number {
  return x + y;
}

console.log(addNum(1, 2));

function log(message: string | number): void {
  return console.log(message);
}

log("hello there!");

// Interface

interface UserInterface {
  readonly id: number;
  name: string;
  age?: number;
}
//readonly properties
//question mark means optional not really required

const user1: UserInterface = {
  id: 2,
  name: "Jack",
};

//you cant use Interface with primitives and unions
type Point = number | string;

const p1: Point = 1;

interface MathFunc {
  (x: number, y: number): number;
}

const add: MathFunc = (x: number, y: number): number => x + y;

const sub: MathFunc = (x: number, y: number): number => x - y;

// Classes

interface PersonInterface {
  id: number;
  name: string;
  register(): string;
  age: number;
}

class Person implements PersonInterface {
  id: number;
  name: string;
  public age: number;

  constructor(id: number, name: string, age: number) {
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
  private id: number;
  protected name: string;
  age: number;

  constructor(id: number, name: string, age: number) {
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
  position: string;

  constructor(id: number, name: string, age: number, position: string) {
    super(id, name, age);
    this.position = position;
  }
}

const emp = new Employee(3, "Sean", 30, "developer");

console.log(emp.register());

//Generics
//Generics are <T> like a placeholder or a Type!

function getArray<T>(items: T[]): T[] {
  return new Array().concat(items);
}

let numArray = getArray<number>([1, 2, 3, 4]);
let strArray = getArray<string>(["brad", "john", "jill"]);

numArray.push(5);
strArray.push("carl");
