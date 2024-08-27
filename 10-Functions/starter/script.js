'use strict';

// let fightnumber = 'KHG123';
// let ravi = {
//   name: 'ravitejamuppalla',
//   passportNumber: '234844949399',
// };
// let flightDatavalue = function (fightnum, objectvalue) {
//   fightnum = 'KJD9803';
//   objectvalue.name = 'Mr. ' + objectvalue.name;
// };

// flightDatavalue(fightnumber, ravi);

// console.log(fightnumber);
// console.log(ravi.name);

// let bookinglist = [];
// let createbooking = function (
//   filghtname,
//   numbersofpassengers = 1,
//   price = 300 * numbersofpassengers
// ) {
//   let booking = {
//     filghtname,
//     numbersofpassengers,
//     price,
//   };

//   bookinglist.push(booking);
// };

// createbooking('indigo', '3', '1000');
// createbooking('indigo');
// createbooking('indigo', '3');
// // createbooking('indigo', '3', '1000');

// console.log(bookinglist);

// function oneword(str) {
//   return str.replace(/\s/g, '');
// }
// function firstwordUppercase(str) {
//   let [firstvalue, ...others] = str.split(' ');
//   return [firstvalue.toUpperCase(), ...others].join(' ');
// }

// function trnasformer(str, fn) {
//   console.log(`Before getting the data the string is : ${str}`);
//   console.log(`Transformed fucntion name : ${fn(str)}`);
//   console.log(`Transformed function name : ${fn.name}`);
// }

// trnasformer('Javascript is best Language', firstwordUppercase);
// trnasformer('Javascript is best Language', oneword);

// const high5 = function () {
//   console.log('💪💪');
// };
// document.body.addEventListener('click', high5);

// ['pizza', 'biryani', 'chahew'].forEach(high5);

//call method

// let airline1 = {
//   airlinename: 'indianairways',
//   iataCode: 'IR1',
//   bookings: [],
//   book(flightID = 'UIOI1ss', name = 'Un Known Person') {
//     console.log(
//       `${name} booked a seat on ${this.airlinename} flight on ${flightID}  with Iatacode ${this.iataCode}`
//     );
//     this.bookings.push({ flight: `${this.iataCode}${flightID}`, name });
//   },
// };

// airline1.book('IRt1', 'Ravi');
// airline1.book(undefined, 'Ravi');
// airline1.book();
// console.log(airline1.bookings);
// let airline2 = {
//   airlinename: 'indigo',
//   iataCode: 'IT2',
//   bookings: [],
// };

// airline1.book.call(airline2, 'IGHI', 'muppalla');

// airline1.book.call(airline2);

// let samplearray = ['MUUWW', 'Muppalla'];
// airline1.book.apply(airline2, samplearray);

// airline1.book.call(airline2, ...samplearray);

// let airline2Obj = airline1.book.bind(airline2);
// let airline1Obj = airline1.book.bind(airline1);
// airline2Obj('lidwq', 'iwellwi');

// airline1.planes = 300;
// airline1.buyPlane = function () {
//   console.log(this);

//   this.planes++;
//   console.log(this.planes);
// };
// // airline1.buyPlane();

// document
//   .querySelector('.buy')
//   .addEventListener('click', airline1.buyPlane.bind(airline1));

// let addtax = (rate, value) => value + value * rate;

// console.log(addtax(0.8, 600));

// let indiatax = addtax.bind(null, 0.3);
// console.log(indiatax(600));

// const poll = {
//   question: 'What is your favourite programming language?',
//   options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
//   // This generates [0, 0, 0, 0]. More in the next section 😃
//   answers: new Array(4).fill(0),
//   registerNewAnswer() {
//     let answer = Number(
//       prompt(`${this.question} \n ${this.options}\n Select you option`)
//     );
//     if (typeof answer == 'number' && answer < this.answers.length) {
//       this.answers[answer]++;
//       // this.displayResults();
//       this.displayResults('String');
//     } else {
//       console.log('Please eneter valid ID ');
//     }
//   },
//   displayResults(type = 'array') {
//     if (type == 'array') console.log(this.answers);
//     if (type == 'String') console.log(this.answers.join(','));
//   },
// };

// document
//   .querySelector('.poll')
//   .addEventListener('click', poll.registerNewAnswer.bind(poll));

// const header = document.querySelector('h1');
// (function () {
//   header.style.color = 'red';
// })();

// document.body.addEventListener('click', function () {
//   header.style.color = 'blue';
// });

// const greet = function (greeting) {
//   return function (name) {
//     console.log(`${greeting} ${name}`);
//   };
// };

// greeterhey('Ravi');
// const greet = greeting => name => console.log(`${greeting} ${name}`);
// const greeterhey = greet('Hey')('Muppalla');

// const lufthansa = {
//   airline: 'lufthansa',
//   iataCode: 'LH',
//   bookings: [],
//   book(flightNum, Name) {
//     console.log(
//       `${Name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
//     );
//     this.bookings.push({
//       flight: `${this.iataCode} ${flightNum}`,
//       name: `${Name}`,
//     });
//   },
// };

// const airline = {
//   airline: 'Airline',
//   iataCode: 'AI',
//   bookings: [],
// };
// lufthansa.book('JH009', 'Raviteja');

// const bookings = lufthansa.book;
// // bookings('KL123', 'Muppalla');
// bookings.call(airline, 'KL123', 'Muppalla');

// const bookluf = bookings.bind(lufthansa);
// bookluf('23', 'Finalvallue');

// const book23 = bookings.bind(airline, '23');
// book23('biding23');

// lufthansa.planes = 300;
// lufthansa.buyPlanes = function () {
//   console.log(this);
//   this.planes++;
//   console.log(this.planes);
// };

// document
//   .querySelector('.buy')
//   .addEventListener('click', lufthansa.buyPlanes.bind(lufthansa));

let arr = '123456';
const finalval = [...arr].reduce(function (ecu, curr) {
  return ecu - curr;
}, '');
console.log(finalval);
