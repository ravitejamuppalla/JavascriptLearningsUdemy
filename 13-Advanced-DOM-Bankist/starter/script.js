'use strict';

///////////////////////////////////////
// Modal window

// const modal = document.querySelector('.modal');
// const overlay = document.querySelector('.overlay');
// const btnCloseModal = document.querySelector('.btn--close-modal');
// const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

// const openModal = function (e) {
//   e.preventDefault();
//   modal.classList.remove('hidden');
//   overlay.classList.remove('hidden');
// };

// const closeModal = function () {
//   modal.classList.add('hidden');
//   overlay.classList.add('hidden');
// };

// btnsOpenModal.forEach(buttonmodels => {
//   buttonmodels.addEventListener('click', openModal);
// });

// btnCloseModal.addEventListener('click', closeModal);
// overlay.addEventListener('click', closeModal);

// document.addEventListener('keydown', function (e) {
//   if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
//     closeModal();
//   }
// });

const header = document.querySelector('.header');
// console.log(document.documentElement);
// console.log(document.head);
// console.log(document.body);
// console.log();
// console.log(document.querySelectorAll('button'));
// console.log(document.getElementById('section--1'));
// console.log(document.getElementsByTagName('button'));
// console.log(document.getElementsByClassName('section'));

const message = document.createElement('div');
// console.log(message);
// message.classList.add('cookie-message');
// message.textContent = 'Just simply taking your whole xdata';

// message.innerHTML = `Just simply taking your whole data <button class="btn btn--close-cookie">Got it!</button>`;
// header.prepend(message);
// document
//   .querySelector('.btn--close-cookie')
//   .addEventListener('click', function () {
//     message.remove();
//   });

// message.style.backgroundColor = '	#303030';
// message.style.width = '120%';

// console.log(getComputedStyle(message).color);

// let changeheight=

message.style.height =
  Number.parseFloat(getComputedStyle(message).height) + 40 + 'px';

// console.log(getComputedStyle(message).height);

//Event propagation
const navlink = document.querySelector('.nav__link');
const navlinks = document.querySelector('.nav__links');
const navmainLink = document.querySelector('.nav');

let randomnumber = function (min, max) {
  return Math.floor(Math.random() * (max - min + 1) - min);
};

let randomColour = function () {
  return `rgb(${randomnumber(0, 255)},${randomnumber(0, 255)},${randomnumber(
    0,
    255
  )})`;
};

// console.log('colour' + randomColour());

// navlink.addEventListener('click', function (e) {
//   e.preventDefault();
//   this.style.backgroundColor = randomColour();
//   console.log(e.target, e.currentTarget);
//   // console.log(e.currentTarget == this);
// });

// navlinks.addEventListener('click', function (e) {
//   navlinks.style.backgroundColor = randomColour();
//   // console.log(e.target, e.currentTarget);
// });

// navmainLink.addEventListener('click', function (e) {
//   navmainLink.style.backgroundColor = randomColour();
//   // console.log(e.target, e.currentTarget);
// });

navlinks.addEventListener('click', function (e) {
  e.preventDefault();
  document
    .querySelector(e.target.getAttribute('href'))
    .scrollIntoView({ behavior: 'smooth' });
});

///Travesing

// let h1 = document.querySelector('h1');
// console.log(h1);
// console.log(h1.childNodes);
// console.log(h1.children);
// h1.firstElementChild.backgroundColor = '#333';
// console.log(h1.firstElementChild);
// console.log(h1.lastElementChild);
// console.log(h1.parentNode);
// console.log(h1.parentElement);
// console.log(h1.parentNode.children);

// [...h1.parentNode.children].forEach(function (el) {
//   el.style.transform = 'scale(1)';
// });

const containerTab = document.querySelector('.operations__tab-container');
const tabs = document.querySelectorAll('.operations__tab');
const operationContent = document.querySelectorAll('.operations__content');

// console.log(tabs);

containerTab.addEventListener('click', function (e) {
  e.preventDefault();
  let clicked = e.target.closest('.operations__tab');
  if (!clicked) return;
  tabs.forEach(function (eachelem) {
    eachelem.classList.remove('operations__tab--active');
  });
  operationContent.forEach(function (eachelem) {
    eachelem.classList.remove('operations__content--active');
  });
  clicked.classList.add('operations__tab--active');
  document
    .querySelector(`.operations__content--${clicked.getAttribute('data-tab')}`)
    .classList.add('operations__content--active');
});

function hovermethod(e, opty) {
  e.preventDefault();
  if (e.target.classList.contains('nav__link')) {
    let siblings = e.target.closest('.nav').querySelectorAll('.nav__link');
    // console.log(siblings);
    siblings.forEach(function (ele) {
      if (ele != e.target) ele.style.opacity = opty;
    });
  }
}
navmainLink.addEventListener('mouseover', function (e) {
  hovermethod(e, 0.5);
});

navmainLink.addEventListener('mouseout', function (e) {
  hovermethod(e, 1);
});

// const silderMutiple=
// data-tab="2"
// console.log(());
//Section1

// console.log(document.documentElement);
// console.log(document.querySelector('.section'));
// console.log(document.querySelectorAll('.section'));
// console.log(document.getElementById('section--1'));
// console.log(document.getElementsByClassName('section'));
// console.log(document.getElementsByTagName('button'));

// const headerclass = document.querySelector('.header');
// const message = document.createElement('div');
// message.classList.add('cookie-message');
// message.innerHTML = `We use cookied for improved functionality and analytics <button class = 'btn btn--close-cookie'>Got it! </button>`;

// headerclass.prepend(message);
// headerclass.append(message);

// headerclass.before(message);
// headerclass.after(message);

// document
//   .querySelector('.btn--close-cookie')
//   .addEventListener('click', function () {
//     message.remove();
//   });

// const btntoScrollTo = document.querySelector('.btn--scroll-to');
// const section1 = document.querySelector('#section--1');

// btntoScrollTo.addEventListener('click', function () {
//   const s1coordiates = section1.getBoundingClientRect();
//   console.log(s1coordiates);

//   console.log(
//     'Current scroll (X/Y) : ' + window.pageXOffset,
//     window.pageYOffset
//   );

//   console.log(
//     'Current height and width : ' + document.documentElement.clientHeight,
//     document.documentElement.clientWidth
//   );
// window.scrollTo(
//   s1coordiates.left + window.pageXOffset,
//   s1coordiates.top + window.pageYOffset
// );

// window.scrollTo({
//   left: s1coordiates.left + window.pageXOffset,
//   top: s1coordiates.top + window.pageYOffset,
//   behavior: 'smooth',
// });
// section1.scrollIntoView({ behavior: 'smooth' });
// });

// document.querySelectorAll('.nav__link').forEach(function (e) {
//   e.addEventListener('click', function (el) {
//     el.preventDefault();
//     const id = this.getAttribute('href');
//     document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
//     // id.scrollIntoView({ behavior: 'smooth' });
//   });
// });

// document.querySelector('.nav__links').addEventListener('click', function (e) {
//   if (e.target.classList.contains('nav__link')) {
//     e.preventDefault();
//     const id = e.target.getAttribute('href');
//     document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
//   }
// });

// document.querySelectorAll('.nav__link').forEach(function (el) {
//   el.addEventListener('click', function (e) {
//     e.preventDefault();
//     const id = this.getAttribute('href');
//     console.log(id);
//     document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
//   });
// });

// const h1 = document.querySelector('h1');

// const h1Alert = function () {
//   alert('Welcome you just read the data for h1');

//   // h1.removeEventListener('mouseenter', h1Alert);
// };
// h1.addEventListener('mouseenter', h1Alert);
// setTimeout(() => {
//   h1.removeEventListener('mouseenter', h1Alert);
// }, 3000);

// //Event propgation

// const randomInt = function (min, max) {
//   return Math.floor(Math.random() * (max - min) + 1 + min);
// };

// console.log(
//   `rgb(${randomInt(0, 255)},${randomInt(0, 255)},${randomInt(0, 255)})`
// );
// const randomColour = function () {
//   return `rgb(${randomInt(0, 255)},${randomInt(0, 255)},${randomInt(0, 255)})`;
// };

// document.querySelector('.nav__link').addEventListener('click', function (e) {
//   this.style.backgroundColor = randomColour();
//   e.stopPropagation();
// });

// document.querySelector('.nav__links').addEventListener('click', function (e) {
//   this.style.backgroundColor = randomColour();
//   e.stopPropagation();
// });

// document.querySelector('.nav').addEventListener('click', function (e) {
//   this.style.backgroundColor = randomColour();
//   e.stopPropagation();
// });

// const h1 = document.querySelector('h1');
// console.log(h1.childNodes);
// console.log(h1.children);

// console.log(h1.firstElementChild);
// console.log(h1.lastElementChild);

// console.log(h1.parentNode);
// console.log(h1.parentElement);
// console.log(h1.closest('.header'));

// console.log(h1.parentElement.children);
