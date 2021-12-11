// interface
interface PersonInterface {
  readonly id: number;
  name: string;
  age?: number;
}

let personDetails: PersonInterface = {
  id: 1,
  name: "hello",
};
// personDetails.id = 2 // readonly property

// interface function
interface MathFunc {
  (x: number, y: number): number;
}

const add: MathFunc = (x, y) => x + y;

interface PersonInterface2 {
  readonly id: number;
  name: string;
  register(): string;
}

// Classes
// its like declaring typings for a class
class Person implements PersonInterface2 {
  id: number;
  name: string;

  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
  }

  register() {
    return `${this.name} is registered`; // if you return a number you will get error, this class implements PersonInterface2
  }
}

const dikshit = new Person(1, "Dikshit");
const jaga = new Person(1, "Jaga");
console.log(dikshit, jaga, dikshit.register());

// sub class
class Employee extends Person {
  position: string;
  constructor(id: number, name: string, position: string) {
    super(id, name);
    this.position = position;
  }
}

const logesh = new Employee(1, "Logesh", "DEV");
// console.log(logesh.register());

// class MyArray {
//   myArray: Array<any>;
//   constructor(arrayLength?: number) {
//     this.myArray = [];
//     this.returnArray(arrayLength);
//   }

//   returnArray(arrayLength?: number) {
//     return this.myArray;
//   }
// }
// console.log(new MyArray());

// Generics
function getArray<T>(items: T[]): T[] {
  return new Array().concat(items);
}

let numArray = getArray([1, 2, 3, 4, 5]);
let stringArray = getArray(["Dikshit", "Jaga", 1]);

// numArray.push('hello') // this shows error as only numbers should be provided
