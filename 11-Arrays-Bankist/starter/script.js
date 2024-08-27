'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
  movementsDates: [
    '2019-11-18T21:31:17.178Z',
    '2019-12-23T07:42:02.383Z',
    '2020-01-28T09:15:04.904Z',
    '2020-04-01T10:17:24.185Z',
    '2020-05-08T14:11:59.604Z',
    '2020-05-27T17:01:17.194Z',
    '2020-07-11T23:36:17.929Z',
    '2020-07-12T10:51:36.790Z',
  ],
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
  movementsDates: [
    '2019-11-01T13:15:33.035Z',
    '2019-11-30T09:48:16.867Z',
    '2019-12-25T06:04:23.907Z',
    '2020-01-25T14:18:46.235Z',
    '2020-02-05T16:33:06.386Z',
    '2020-04-10T14:43:26.374Z',
    '2020-06-25T18:49:59.371Z',
    '2020-07-26T12:01:20.894Z',
  ],
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
  movementsDates: [
    '2019-11-18T21:31:17.178Z',
    '2019-12-23T07:42:02.383Z',
    '2020-01-28T09:15:04.904Z',
    '2020-04-01T10:17:24.185Z',
    '2020-05-08T14:11:59.604Z',
    '2020-05-27T17:01:17.194Z',
    '2020-07-11T23:36:17.929Z',
    '2020-07-12T10:51:36.790Z',
  ],
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
  movementsDates: [
    '2019-11-01T13:15:33.035Z',
    '2019-11-30T09:48:16.867Z',
    '2019-12-25T06:04:23.907Z',
    '2020-01-25T14:18:46.235Z',
    '2020-02-05T16:33:06.386Z',
    '2020-04-10T14:43:26.374Z',
    '2020-06-25T18:49:59.371Z',
    '2020-07-26T12:01:20.894Z',
  ],
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

function formatedDateMethod(date) {
  const getYear = `${date.getFullYear()}`;
  const getmonth = `${date.getMonth() + 1}`.padStart(2, 0);
  const getDay = `${date.getDate()}`.padStart(2, 0);
  const getHours = `${date.getHours()}`.padStart(2, 0);
  const getMinutes = `${date.getMinutes()}`.padStart(2, 0);
  return `${getDay}/${getmonth}/${getYear},${getHours}:${getMinutes}`;
}

labelDate.textContent = formatedDateMethod(new Date());

const displayMovements = function (accountdetails, sorted = false) {
  const movs = sorted
    ? accountdetails.movements.slice().sort((a, b) => a - b)
    : accountdetails.movements;
  movs.forEach(function (movvalues, index) {
    const date = new Date(accountdetails.movementsDates[index]);
    const eachDateForAccounts = formatedDateMethod(date);
    const type = movvalues > 0 ? 'deposit' : 'withdrawal';
    const html = ` 
          <div class="movements__row">
              <div class="movements__type movements__type--${type}">${index} ${type}</div>
              <div class="movements__date">${eachDateForAccounts}</div>
              <div class="movements__value">${movvalues}€</div>
          </div>`;
    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

function gettingUserNames(accounts) {
  accounts.forEach(eachaccount => {
    const UN = eachaccount.owner
      .toLowerCase()
      .split(' ')
      .map(word => word[0])
      .join('');

    eachaccount.username = UN;
  });
}

gettingUserNames(accounts);

function UpdateUI(accountobject) {
  totalSummary(accountobject);
  totalamount(accountobject);
  displayMovements(accountobject);
}

function totalamount(accountmovements) {
  let totalamount = accountmovements.movements.reduce(function (aut, curr) {
    return aut + curr;
  }, 0);
  accountmovements.balance = totalamount;
  labelBalance.textContent = `${accountmovements.balance}€`;
  return accountmovements.balance;
}

const totalSummary = function (movment) {
  // const totalIn = movment.movements.fil
  const totalIn = movment.movements
    .filter(mov => mov > 0)
    .reduce((elu, curr) => elu + curr, 0);
  labelSumIn.textContent = `${totalIn}€`;

  const totalOut = movment.movements
    .filter(mov => mov < 0)
    .reduce((elu, curr) => elu + curr, 0);
  labelSumOut.textContent = `${Math.abs(totalOut)}€`;

  const totalInterset = movment.movements
    .filter(mov => mov > 0)
    .map(each => (each * movment.interestRate) / 100)
    .filter(value => value > 1)
    .reduce((ecul, curr) => ecul + curr, 0);

  // console.log(totalInterset);

  labelSumInterest.textContent = `${Math.abs(totalInterset)}€`;
};

let currentaccountdeatils;
btnLogin.addEventListener('click', function (e) {
  // Prevent form from submitting
  e.preventDefault();
  // console.log(accounts);
  currentaccountdeatils = accounts.find(acc => {
    return acc.username === inputLoginUsername.value;
  });
  // console.log(currentaccountdeatils);
  if (currentaccountdeatils?.pin == inputLoginPin.value) {
    labelWelcome.textContent = `Welcome come back ${
      currentaccountdeatils.owner.split(' ')[0]
    }`;
    containerApp.style.opacity = 100;
    UpdateUI(currentaccountdeatils);
  }
  inputLoginUsername.value = inputLoginPin.value = '';
});

btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  let transferamount = Number(inputTransferAmount.value);
  let reciveracc = accounts.find(acc => acc.username == inputTransferTo.value);
  if (
    transferamount > 0 &&
    reciveracc &&
    transferamount < currentaccountdeatils.balance &&
    reciveracc?.username !== currentaccountdeatils.username
  ) {
    currentaccountdeatils.movements.push(-transferamount);
    reciveracc.movements.push(transferamount);
    currentaccountdeatils.movementsDates.push(formatedDateMethod(new Date()));
    reciveracc.movementsDates.push(formatedDateMethod(new Date()));
  }
  UpdateUI(currentaccountdeatils);
  inputTransferAmount.value = inputTransferTo.value = '';
});

btnLoan.addEventListener('click', function (e) {
  e.preventDefault();

  let loanAmount = Number(inputLoanAmount.value);
  if (
    loanAmount > 0 &&
    currentaccountdeatils.movements.some(mov => mov >= loanAmount * 0.1)
  ) {
    currentaccountdeatils.movements.push(loanAmount);
    currentaccountdeatils.movementsDates.push(formatedDateMethod(new Date()));
  }
  // Update UI
  UpdateUI(currentaccountdeatils);
  inputLoanAmount.value = '';
});
btnClose.addEventListener('click', function (e) {
  e.preventDefault();
  if (
    inputCloseUsername.value === currentaccountdeatils.username &&
    Number(inputClosePin.value) == currentaccountdeatils.pin
  ) {
    const indexOfDeletingObject = accounts.findIndex(
      acc => acc.username === inputCloseUsername.value
    );
    accounts.splice(indexOfDeletingObject, 1);
  }
  inputCloseUsername.value = inputClosePin.value = '';
  containerApp.style.opacity = 0;
});

let sorted = false;
btnSort.addEventListener('click', function (e) {
  e.preventDefault();
  displayMovements(currentaccountdeatils, !sorted);
  sorted = !sorted;
});

currentaccountdeatils = account1;
containerApp.style.opacity = 100;
UpdateUI(currentaccountdeatils);

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////

// TEST DATA 1: Julia's data [3, 5, 2, 12, 7], Kate's data [4, 1, 15, 8, 3]
// TEST DATA 2: Julia's data [9, 16, 6, 8, 3], Kate's data [10, 5, 6, 1, 4]

// function ageOfDogs(arr1, arr2) {
//   const dogsJuliaCorrected = arr1.slice();
//   dogsJuliaCorrected.splice(0, 1);
//   dogsJuliaCorrected.splice(-2);
//   console.log(dogsJuliaCorrected);
//   const finalList = dogsJuliaCorrected.concat(arr2);
//   finalList.forEach(function (value, index) {
//     if (value > 3) {
//       console.log(`Dog number ${index} is an adult, and is ${value} years old`);
//     } else {
//       console.log(`Dog number ${index} is still a puppy 🐶`);
//     }
//   });
// }
// const juleDataSet1 = [3, 5, 2, 12, 7];
// const kateDataSet1 = [10, 5, 6, 1, 4];
// ageOfDogs(juleDataSet1, kateDataSet1);

/// Maps

// let enrovalue = 1.1;
// const movementsIneuros = movements.map(function (mov, index) {
//   return `Movements ${
//     index + 1
//   } : Your ${mov > 0 ? 'Depoisted' : 'Withdrew'} ${Math.trunc(mov)}`;
// });
// const movementsIneuros = movements.map(
//   (mov, index) =>
//     `Movements ${index + 1} : Your ${
//       mov > 0 ? 'Depoisted' : 'Withdrew'
//     } ${Math.trunc(mov)}`
// );

// console.log(movementsIneuros);
