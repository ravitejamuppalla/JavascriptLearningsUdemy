'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  order: function (statrerIndex, mainCourseIndex) {
    return [this.starterMenu[statrerIndex], this.mainMenu[mainCourseIndex]];
  },

  orderdelivery: function ({ starterIndex = 1, mainIndex, address, time }) {
    // console.log(starterIndex, mainIndex, address, time);
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },
};

///////////////////////////////////////
// Coding Challenge #3

/* 
Let's continue with our football betting app! This time, we have a map with a log of the events that happened during the game. The values are the events themselves, and the keys are the minutes in which each event happened (a football game has 90 minutes plus some extra time).

1. Create an array 'events' of the different game events that happened (no duplicates)
2. After the game has finished, is was found that the yellow card from minute 64 was unfair. So remove this event from the game events log.
3. Print the following string to the console: "An event happened, on average, every 9 minutes" (keep in mind that a game has 90 minutes)
4. Loop over the events and log them to the console, marking whether it's in the first half or second half (after 45 min) of the game, like this:
      [FIRST HALF] 17: ⚽️ GOAL

GOOD LUCK 😀
*/

const gameEvents = new Map([
  [17, '⚽️ GOAL'],
  [36, '🔁 Substitution'],
  [47, '⚽️ GOAL'],
  [61, '🔁 Substitution'],
  [64, '🔶 Yellow card'],
  [69, '🔴 Red card'],
  [70, '🔁 Substitution'],
  [72, '🔁 Substitution'],
  [76, '⚽️ GOAL'],
  [80, '⚽️ GOAL'],
  [92, '🔶 Yellow card'],
]);

const totalValuesFromMaps = [...gameEvents.values()];
console.log(totalValuesFromMaps);
const events = new Set([...gameEvents.values()]);
console.log(events);

const deleteEvent = gameEvents.delete('64');
console.log(deleteEvent);

///////////////////////////////////////
// Coding Challenge #1

/* 
We're building a football betting app (soccer for my American friends 😅)!

Suppose we get data from a web service about a certain game (below). In this challenge we're gonna work with the data. So here are your tasks:

1. Create one player array for each team (variables 'players1' and 'players2')
2. The first player in any player array is the goalkeeper and the others are field players. For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 field players
3. Create an array 'allPlayers' containing all players of both teams (22 players)
4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a new array ('players1Final') containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic'
5. Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2')
6. Write a function ('printGoals') that receives an arbitrary number of player names (NOT an array) and prints each of them to the console, along with the number of goals that were scored in total (number of player names passed in)
7. The team with the lower odd is more likely to win. Print to the console which team is more likely to win, WITHOUT using an if/else statement or the ternary operator.

TEST DATA FOR 6: Use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'. Then, call the function again with players from game.scored

GOOD LUCK 😀
*/

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

///////////////////////////////////////
// Coding Challenge #2

/* 
Let's continue with our football betting app!

1. Loop over the game.scored array and print each player name to the console, along with the goal number (Example: "Goal 1: Lewandowski")
2. Use a loop to calculate the average odd and log it to the console (We already studied how to calculate averages, you can go check if you don't remember)
3. Print the 3 odds to the console, but in a nice formatted way, exaclty like this:
      Odd of victory Bayern Munich: 1.33
      Odd of draw: 3.25
      Odd of victory Borrussia Dortmund: 6.5
Get the team names directly from the game object, don't hardcode them (except for "draw"). HINT: Note how the odds and the game objects have the same property names 😉

BONUS: Create an object called 'scorers' which contains the names of the players who scored as properties, and the number of goals as the value. In this game, it will look like this:
      {
        Gnarby: 1,
        Hummels: 1,
        Lewandowski: 2
      }

GOOD LUCK 😀
*/

// game.scored.forEach((values, index) => {
//   console.log(`Goal ${index} : ${values}`);
// });

// const oddvalues = Object.values(game.odds);
// function average(...oddvalues) {
//   let temp = 0;
//   oddvalues.forEach(ele => (temp += ele));
//   return temp / oddvalues.length;
// }
// console.log(average(...oddvalues));

// console.log(`Odd of victory ${game.team1}: ${game.odds.team1}`);
// console.log(`Odd of victory Draw: ${game.odds.x}`);
// console.log(`Odd of victory ${game.team2}: ${game.odds.team2}`);

// Object.entries(game.odds).forEach(element => {
//   let values = game[element[0]] ? 'Draw' : element[1];
//   console.log(`Odd of victory ${values}: ${element[1]}`);
// });

// const [team1, team2] = game.players;
// console.log(team1);
// console.log(team2);

// const [team1gk, ...team1fieldPlayers] = team1;
// const [team2gk, ...team2fieldpalyers] = team2;

// console.log(team1gk);
// console.log(team1fieldPlayers);

// const allplayers = [...team1, ...team2];
// console.log(allplayers);

// const players1Final = [...team1, 'Thiago', 'Coutinho', 'Perisic'];
// console.log(players1Final);

// const { team1: team1odds, x: draw, team2: team2odds } = game.odds;
// console.log(team1odds, team2odds, draw);

// const printGoals = function (...noofplayers) {
//   console.log(noofplayers);
//   console.log(`${noofplayers.length} Goals that they have made`);
// };

// printGoals(...allplayers);

// team1odds < team2odds && console.log('Team1 won the game');
// team1odds > team2odds && console.log('Team 2 Won the game');
//Objects

// restaurant.orderdelivery({
//   mainIndex: 2,
//   address: 'Koyavaripalem,prathipadu,guntur',
//   time: '22:00',
// });

// const { name, starterMenu, mainMenu } = restaurant;
// console.log(name, starterMenu, mainMenu);

// const {
//   name: restarentName,
//   starterMenu: staternameordered,
//   mainMenu: mainmenuOrder,
//   ravi: sample = [],
// } = restaurant;

// console.log(restarentName, staternameordered, mainmenuOrder, sample);

//////////////Arrays/////////////////

// const arrr = [1, 2, 3, 4, 5, 6];
// const [a, b, c] = arrr;
// console.log(a, b, c);

// const [d, e] = arrr;
// console.log(d, e);

// let [starter, main] = restaurant.order(2, 2);
// console.log(starter, main);

// [main, starter] = [starter, main];
// console.log(starter, main);

// const [p, , [q, r]] = [1, 2, [3, 4]];
// console.log(p, q, r);

// const [l = 1, m = 1, n = 1] = [100, 2000];
// console.log(l, m, n);

// let orders = ['pizza', 'chicken', 'burger', 'king', 'pizza', 'chicken'];

// let setvalues = new Set(orders);
// console.log(setvalues);

// setvalues.add('ewie');
// console.log(setvalues);
// setvalues.delete('pizza');
// console.log(setvalues);

// let eachvariableinset = [...setvalues];
// console.log(eachvariableinset);

// for (const ecahvalues of setvalues) console.log(ecahvalues);

// console.log(setvalues.size);
// console.log(eachvariableinset.length);

// console.log(setvalues.entries());

// console.log(setvalues.has('chicken'));
// console.log(setvalues.has('pizza'));
// console.log(setvalues.keys);

// // let [a, b, ...others] = 'raviteja';
// // console.log(others);

// // function add(...stringvalues) {
// //   console.log(stringvalues.reduce((a, b) => a + b, 0));
// // }
// // add(2, 3);
// // add(2, 3, 4, 595, 22);
// // add(12, 13, 13, 111, 1190);

// // // speard arrays
// // const arr = [1, 2, 3];

// // let newbadarr = [9, 2, ...arr];
// // console.log(newbadarr);

// // //copyarr
// // let coptnewarr = [...restaurant.mainMenu];
// // console.log(coptnewarr);

// // //join twoarrays

// // let jointwoarrays = [...restaurant.mainMenu, ...restaurant.categories];
// // console.log(jointwoarrays);

// // let allletters = [...restaurant.categories];
// // let newletters = [...allletters, ' ', 'S'];
// // console.log(newletters);

// // //
// // let ingredients = [
// //   // prompt("Let's make pasta! Ingredient 1?"),
// //   // prompt('Ingredient 2'),
// //   // prompt('Ingredient 3'),
// // ];
// // restaurant.orderPasta(...ingredients);

// // let newobject = {
// //   yearofgeneration: 1989,
// //   ...restaurant.categories,
// //   foundedvalues: 'modelvaliues',
// // };
// // console.log(newobject);

// // ******************************
// //destructuring objects

// // ******************************

// // console.log(
// //   restaurant.orderDelivery({
// //     startIndex: 2,
// //     mainindex: 1,
// //     address: 'hyderabad',
// //     time: '22:30',
// //   })
// // );

// // console.log(
// //   restaurant.orderDelivery({
// //     address: 'hyderabad',
// //   })
// // );

// // const { categories: c, starterMenu: s, mainMenu: m } = restaurant;
// // console.log(c, s, m);

// // const {
// //   categories: a = [],
// //   starterMenu: b = [],
// //   mainMenu: f = [],
// // } = restaurant;
// // console.log(a, b, f);

// // let a = 100;
// // let b = 200;

// // let obj = { a: 23, b: 45, c: 67 };
// // ({ b, a } = obj);
// // console.log(a, b);

// // const {
// //   fri: { open, close },
// // } = restaurant.openingHours;
// // console.log(open, close);

// // ******************************
// /////destructuring  Arrays

// // ******************************

// // const arr = [1, 2, 3, 4];
// // const [a, b, c] = arr;
// // console.log(a, b, c);
// // const [x, , y] = arr;
// // console.log(x, y);

// // let [first, second] = restaurant.categories;
// // console.log(first, second);
// // [first, second] = [second, first];
// // console.log(first, second);

// // let [catgories, startmenu] = restaurant.order(3, 2);
// // console.log(catgories, startmenu);

// // let arr = [1, 2, [5, 6]];
// // const [a, , [b, c]] = arr;
// // console.log(a, b, c);
