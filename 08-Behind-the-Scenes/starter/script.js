'use strict';

// function calAge(age) {
//   const currentAge = 2037 - age;
//   console.log(currentAge);
//   function printAge() {
//     let output = `${name}, you are ${age}, born in ${currentAge}`;
//     console.log(output);
//     if (age >= 1981 && age <= 2000) {
//       const firstname = 'Ravi';
//       console.log('You are matrial buddy ' + name);
//       function add(a, b) {
//         return a + b;
//       }
//       console.log(add(2, 9));
//     }
//     // console.log(firstname);
//     // console.log(add(2, 9));
//   }
//   printAge();
// }

// const name = 'Jones';
// calAge(1991);
// add(2, 3);

//Hosting

//Variables
// console.log(a);
// // console.log(b);
// // console.log(c);
// var a = 10;
// let b = 20;
// const c = 30;

//fucntions
// console.log(fucntion1());
// console.log(fucntion2());
// console.log(fucntion3va(10, 20));

// function fucntion1() {
//   let a = 10;
//   let b = 20;
//   return a + b;
// }

// var fucntion2 = function () {
//   return 'StringFUcntion11';
// };

// var fucntion3va = () => {
//   return a + b;
// };
// // function()=>"SampleValues";
// console.log(fucntion1());
// console.log(fucntion2());
// console.log(fucntion3va(10, 20));

// if (!num) console.log(detection());
// var num = 10;

// function detection() {
//   return 'Noting';
// }

////////////////////////////this keyword

// function a() {
//   console.log(this);
// }

// var object1 = {
//   intial: 2000,
//   fucntionaname: function () {
//     console.log(2037 - this.intial);
//   },
// };

// var object2 = {
//   intial: 1998,
// };
// object1.fucntionaname();
// // object2.fucntionaname();
// a();

// object2.fucntionaname = object1.fucntionaname;
// object2.fucntionaname();

////////////////////////////////////////////

let jones = {
  firstName: 'RaviTeja',
  year: 1996,
  calAge: function () {
    console.log(2037 - this.year);

    // //Problem
    // const ismaelanual = function () {
    //   console.log(this);
    //   console.log(this.year >= 1981 && this.year <= 1996);
    // };
    // ismaelanual();

    //Solution1
    // const self = this;
    // const ismaelanual = function () {
    //   console.log(self);
    //   console.log(self.year >= 1981 && self.year <= 1996);
    // };
    // ismaelanual();

    // //Solution2
    // const ismaelanual = () => {
    //   console.log(this);
    //   console.log(this.year >= 1981 && this.year <= 1996);
    // };
    // ismaelanual();
  },

  greet() {
    console.log(`Hey ${this.firstName}`);
  },
  greet()
};

jones.calAge();
// jones.greet();
