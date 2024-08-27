'use strict';
//////////////////////////////////////
// Coding Challenge #1

/* 
1. Use a constructor function to implement a Car. A car has a make and a speed property. The speed property is the current speed of the car in km/h;
2. Implement an 'accelerate' method that will increase the car's speed by 10, and log the new speed to the console;
3. Implement a 'brake' method that will decrease the car's speed by 5, and log the new speed to the console;
4. Create 2 car objects and experiment with calling 'accelerate' and 'brake' multiple times on each of them.

DATA CAR 1: 'BMW' going at 120 km/h
DATA CAR 2: 'Mercedes' going at 95 km/h

GOOD LUCK 😀
*/

// const Car = function (make, speed) {
//   this.make = make;
//   this.speed = speed;
// };

// Car.prototype.accelerate = function () {
//   this.speed = this.speed + 10;
//   console.log(
//     `${this.make} is going to increase to the speed of ${this.speed}`
//   );
// };

// Car.prototype.brake = function () {
//   this.speed = this.speed - 5;
//   console.log(
//     `${this.make} is going to decrease to the speed of ${this.speed}`
//   );
// };
// let car1 = new Car('BMW', 120);
// car1.accelerate();
// car1.brake();
// car1.accelerate();
// car1.brake();
// car1.accelerate();
// car1.brake();

///Classes

// class Person {
//   constructor(name, year) {
//     this.name = name;
//     this.year = year;
//     this.normalfunction = function () {
//       console.log('Sample fucntion');
//     };
//   }

//   calAge() {
//     return (this.year = 2029 - this.year);
//   }
// }

// let ravi = new Person('Ravi', 1996);
// console.log(ravi);
// console.log(ravi.calAge());
// console.log(ravi.__proto__ == Person.prototype);
// console.log(ravi.__proto__.calAge == Person.prototype.calAge);

// console.log(ravi.__proto__.normalfunction);

//Getters and Setters

// let newobject = {
//   name: 'Ravi',
//   movements: [300, 10, 20, 300, 100],

//   get latest() {
//     return this.movements.slice(-1).pop();
//   },

//   set pushing(number) {
//     this.movements.push(number);
//   },
// };

// console.log(newobject.latest);
// newobject.pushing = 10;
// console.log(newobject.movements);
// console.log(newobject.latest);

// Inheritances consturctor fucntions

// function Person(name, brithyear) {
//   this.name = name;
//   this.brithyear = brithyear;
// }

// function Student(name, brithyear, courses) {
//   this.name = name;
//   this.brithyear = brithyear;
//   this.courses = courses;
// }

// let person1 = new Person('Ravi', 1998);
// console.log(person1);

// Person.prototype.calAge = function () {
//   return 2029 - this.brithyear;
// };
// Student.prototype = Object.create(Person.prototype);

// Student.prototype.introduce = function () {
//   return `My Name is ${this.name} and I am Studying ${this.courses}`;
// };
// let student1 = new Student('Muppalla', 1990, 'Biotechnology');
// console.log(student1);

// console.log(student1.calAge());

//Inhertiances of classes

class Person {
  constructor(name, year) {
    this.name = name;
    this.year = year;
  }
  calAge() {
    return `The Age is ${2039 - this.year}`;
  }
}

class Student extends Person {
  constructor(name, year, course) {
    super(name, year);
    this.course = course;
  }
  introduce() {
    return `My Name is ${this.name} and I am Studying ${this.course}`;
  }
}

let stud1 = new Student('Ravi', 1998, 'ECE');
console.log(stud1.introduce());
console.log(stud1.calAge());
