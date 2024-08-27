'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

const _renderCountry = function (data) {
  let html = `   
       <article class="country">
    <img class="country__img" src="${data.flags.svg}" />
     <div class="country__data">
      <h3 class="country__name">${data.name.common}</h3>
      <h4 class="country__region">${data.region}</h4>
      <p class="country__row"><span>👫</span>${(
        +data.population / 1000000
      ).toFixed(1)} people</p>
      <p class="country__row"><span>🗣️</span>${
        Object.values(data.languages)[0]
      }</p>
      <p class="country__row"><span>💰</span>${
        Object.values(data.currencies)[0].name
      }</p>
    </div>
   
  </article>`;

  countriesContainer.insertAdjacentHTML('beforeend', html);
};

const renderError = function (msg) {
  countriesContainer.insertAdjacentText('beforeend', msg);
};

let getJSON = function (url, message = 'Something went wrong') {
  return fetch(url).then(function (response) {
    if (!response.ok) throw new Error(`${message} ${response.status} `);
    return response.json();
  });
};

///////////////////////////////////////

// function requestingcountries(countryName) {
//   let request = new XMLHttpRequest();
//   request.open('GET', `https://restcountries.com/v3.1/alpha/${countryName}`);
//   request.send();

//   request.addEventListener('load', function () {
//     const [data] = JSON.parse(this.responseText);
//     console.log(data);
//     _renderCountry(data);
//     const [fisrBorder] = data.borders;

//     let request = new XMLHttpRequest();
//     request.open('GET', `https://restcountries.com/v3.1/alpha/${fisrBorder}`);
//     request.send();

//     request.addEventListener('load', function () {
//       const [data] = JSON.parse(this.responseText);
//       _renderCountry(data);
//     });
//   });
// }

// function requestingcountries(countryName) {
//   getJSON(
//     `https://restcountries.com/v3.1/name/${countryName}`,
//     'Invalid Request with Status of '
//   )
//     .then(function (data) {
//       _renderCountry(data[0]);
//       console.log(data[0]);
//       const fisrBorder = data[0].borders[0];
//       if (!fisrBorder) throw new Error('No neighbour found!');
//       //   if (!fisrBorder) console.log(fisrBorder);
//       return getJSON(
//         `https://restcountries.com/v3.1/alpha/${fisrBorder}`,
//         'Invalid Request with Status of '
//       );
//     })
//     .then(function (nextdata) {
//       _renderCountry(nextdata[0]);
//     })
//     .catch(function (err) {
//       let customError = `Something went wrong 💥💥 ${err.message}. Try again!`;
//       //   console.err(customError);
//       renderError(customError);
//     })
//     .finally(function () {
//       countriesContainer.style.opacity = 1;
//     });
// }

// btn.addEventListener('click', function (e) {
//   e.preventDefault();
//   requestingcountries('australia');
// });

///////////////////////////////////////
// Coding Challenge #1

/* 
In this challenge you will build a function 'whereAmI' which renders a country ONLY based on GPS coordinates. For that, you will use a second API to geocode coordinates.

Here are your tasks:

PART 1
1. Create a function 'whereAmI' which takes as inputs a latitude value (lat) and a longitude value (lng) (these are GPS coordinates, examples are below).
2. Do 'reverse geocoding' of the provided coordinates. Reverse geocoding means to convert coordinates to a meaningful location, like a city and country name. Use this API to do reverse geocoding: https://geocode.xyz/api.
The AJAX call will be done to a URL with this format: https://geocode.xyz/52.508,13.381?geoit=json. Use the fetch API and promises to get the data. Do NOT use the getJSON function we created, that is cheating 😉
3. Once you have the data, take a look at it in the console to see all the attributes that you recieved about the provided location. Then, using this data, log a messsage like this to the console: 'You are in Berlin, Germany'
4. Chain a .catch method to the end of the promise chain and log errors to the console
5. This API allows you to make only 3 requests per second. If you reload fast, you will get this error with code 403. This is an error with the request. Remember, fetch() does NOT reject the promise in this case. So create an error to reject the promise yourself, with a meaningful error message.

PART 2
6. Now it's time to use the received data to render a country. So take the relevant attribute from the geocoding API result, and plug it into the countries API that we have been using.
7. Render the country and catch any errors, just like we have done in the last lecture (you can even copy this code, no need to type the same code)

TEST COORDINATES 1: 52.508, 13.381 (Latitude, Longitude)
TEST COORDINATES 2: 19.037, 72.873
TEST COORDINATES 2: -33.933, 18.474

GOOD LUCK 😀
*/

// whereAmI(17.4123487, 78.4080455);

/////Event looping  pratice

// console.log('Started the Fuctionlity');
// setTimeout(() => {
//   console.log('Wating for Set Time out fucntionlity');
// }, 0);

// Promise.resolve('waiting for first promise 1').then(function (res) {
//   console.log(res);
// });
// Promise.resolve(wastingtime()).then(function (val) {
//   console.log(val);
// });
// console.log('Ended the Fuctionlity');

// function wastingtime() {
//   for (let index = 0; index < 1000000000; index++) {}
//   return 'waiting for first promise 2';
// }

//////////////////////////////////////////////

// const creatingcustomPromise = new Promise(function (resolve, reject) {
//   console.log('Started the lotty ');
//   setTimeout(() => {
//     if (Math.random() >= 0.5) {
//       resolve('You won the lotty');
//     } else {
//       reject('You Lost try again');
//     }
//   }, 2000);
// });

// creatingcustomPromise
//   .then(function (value) {
//     console.log(value);
//   })
//   .catch(function (err) {
//     console.error(err);
//   });
// console.log('End of the lotty');

// function Waitime() {
//   setTimeout(() => {}, timeout);
//   return '';
// }

function whereAmI() {
  new Promise(function (reslove, reject) {
    navigator.geolocation.getCurrentPosition(function (position) {
      reslove(position),
        function (err) {
          reject(err);
        };
    });
  })
    .then(function (pos) {
      const { latitude: lat, longitude: lng } = pos.coords;
      return fetch(
        `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lng}&zoom=18&addressdetails=1`
      );
    })
    .then(function (value) {
      if (!value.ok) throw new Error(`Problem with geocoding ${value.status}`);
      return value.json();
    })
    .then(function (data) {
      let currentCountry = data.address.country;
      console.log('You are in ' + currentCountry);

      return fetch(`https://restcountries.com/v3.1/name/${currentCountry}`);
    })
    .then(function (res) {
      //   if (!res.ok) throw new Error(`Problem with geocoding ${value.status}`);
      return res.json();
    })
    .then(function (data) {
      _renderCountry(...data);
    })
    .catch(function (err) {
      console.error(
        `Some thing went wrong couldn't get the data ${err.message}`
      );
    })
    .finally(function () {
      countriesContainer.style.opacity = 1;
    });
}

btn.addEventListener('click', function () {
  whereAmI();
});
