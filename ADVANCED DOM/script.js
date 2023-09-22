'use strict';
/// SELECTING ELEMENTS //

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');
const nav = document.querySelector('nav');
const tabs = document.querySelectorAll('.operations__tab');
const tabsContainer = document.querySelector('.operations__tab-container');
const tabsContent = document.querySelectorAll('.operations__content');

///////////////////////////// FUNCTIONS /////////////////////////////

// MODAL WINDOW //
const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

// BUTTON SCROLLING //
btnScrollTo.addEventListener('click', e => {
  //   const s1coords = section1.getBoundingClientRect();
  //   console.log(s1coords);
  //   console.log(e.target.getBoundingClientRect());
  //   console.log(
  //     'Current Scroll (X/Y) position:',
  //     window.pageXOffset,
  //     pageYOffset
  //   );
  //   console.log(
  //     'Height/Width Viewport',
  //     document.documentElement.clientHeight,
  //     document.documentElement.clientWidth
  //   );

  // Scrolling
  //   window.scrollTo(
  //     s1coords.left + window.pageXOffset, // Calculating the absolute position of the element relative to the document i.e the entire page.
  //     s1coords.top + window.pageYOffset   // Calculating the absolute position of the element relative to the document i.e the entire page.
  //   );

  // Old Method of implementing the scroll functionality
  //   window.scrollTo({
  //     left: s1coords.left + window.pageXOffset, // Calculating the absolute position of the element relative to the document i.e the entire page.
  //     top: s1coords.top + window.pageYOffset, // Calculating the absolute position of the element relative to the document i.e the entire page.
  //     behavior: 'smooth',
  //   });

  // Newer method of implementing it.
  section1.scrollIntoView({
    behavior: 'smooth',
  });
});

// PAGE NAVIGATION

// WITHOUT EVENT DELEGATION
// document.querySelectorAll('.nav__link').forEach((link, i) => {
//   link.addEventListener('click', function (e) {
//     e.preventDefault();
//     console.log(`LINK-${i + 1}`);

//     // Implementing the smooth scrolling
//     const id = this.getAttribute('href');
//     console.log(id);

//     document.querySelector(id).scrollIntoView({
//       behavior: 'smooth',
//     });
//   });
// });

// WITH EVENT DELEGATION
// - Add the event listener to the common parent element
// - Determine what element originated the event

document.querySelector('.nav__links').addEventListener('click', function (e) {
  e.preventDefault();

  // Matching strategy
  if (e.target.classList.contains('nav__link')) {
    const id = e.target.getAttribute('href');
    document.querySelector(id).scrollIntoView({
      behavior: 'smooth',
    });
  }
});

// Tabbed Component
tabsContainer.addEventListener('click', e => {
  e.preventDefault();

  // Getting the Matching strategy
  const clicked = e.target.closest('.operations__tab');

  // Guard Clause
  if (!clicked) return;

  // removing active classes
  tabs.forEach(t => t.classList.remove('operations__tab--active'));
  tabsContent.forEach(c => c.classList.remove('operations__content--active'));

  // Active tab
  clicked.classList.add('operations__tab--active');

  // Activating Content Area/Information
  document
    .querySelector(`.operations__content--${clicked.dataset.tab}`)
    .classList.add('operations__content--active');
});

//   MENU FADE ANIMATION
nav.addEventListener('mouseover', function (e) {
  if (e.target.classList.contains('nav__link')) {
    const link = e.target;
    const siblings = link.closest('.nav').querySelectorAll('.nav__link');
    const logo = link.closest('.nav').querySelector('img');

    siblings.forEach(el => {
      if (el !== link) el.style.opacity = 0.5;
    });
    logo.style.opacity = 0.5;
  }
});

nav.addEventListener('mouseout', function (e) {
  if (e.target.classList.contains('nav__link')) {
    const link = e.target;
    const siblings = link.closest('.nav').querySelectorAll('.nav__link');
    const logo = link.closest('.nav').querySelector('img');

    siblings.forEach(el => {
      if (el !== link) el.style.opacity = 1;
    });
    logo.style.opacity = 1;
  }
});

// STICKY NAVIGATION
// const initialCoords = section1.getBoundingClientRect();
// console.log(initialCoords);

// Using the scroll event for performance based on scroll position is bad and not efficient because the event fires all the time no matter how small the change is in the scroll.
// window.addEventListener('scroll', ()=>{
//   console.log(window.scrollY);

//   if (window.scrollY > initialCoords.top) {
//     nav.classList.add('sticky')
//   } else {
//     nav.classList.remove('sticky');
//   }
// })

// USING THE INTERSECTION OBSERVER API, A BETTER TOOL
// STICKY NAVIGATION (INTERSECTION OBSERVER API)

// const observerCallBack = (entries, observer) => {
//   entries.forEach((entry)=> console.log(entry));
// }
// const observerOptions = {
//   root:  null,
//   threshold: [0, 0.2],

// }

const observer = new IntersectionObserver(observerCallBack, observerOptions);
observer.observe(section1);
