'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');
const imgContainer = document.querySelector('.images');
const mainImg = document.getElementsByTagName('img');

const renderError = function (msg) {
  countriesContainer.insertAdjacentText('beforeend', msg);
};

const renderCountry = function (data, className = '') {
  const html = `
    <article class="country ${className}">
        <img class="country__img" src="${data.flag}" />
        <div class="country__data">
        <h3 class="country__name">${data.name}</h3>
        <h4 class="country__region">${data.region}</h4>
        <p class="country__row"><span>👫</span>${(
          +data.population / 1000000
        ).toFixed(1)} people</p>
        <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
        <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
        </div>
  </article>    
    `;
  countriesContainer.insertAdjacentHTML('beforeend', html);
  countriesContainer.style.opacity = 1;
};

///////////////////////////////////////

// The Old Way: XMLHttpRequest
// const getCountryData = function (country) {
//   const request = new XMLHttpRequest();
//   request.open(
//     'GET',
//     `https://countries-api-836d.onrender.com/countries/name/${country}`
//   );
//   request.send();

//   request.addEventListener('load', function () {
//     // console.log(this.responseText);
//     const [data] = JSON.parse(this.responseText);
//     console.log(data);

//     const html = `
//         <article class="country">
//             <img class="country__img" src="${data.flag}" />
//             <div class="country__data">
//             <h3 class="country__name">${data.name}</h3>
//             <h4 class="country__region">${data.region}</h4>
//             <p class="country__row"><span>👫</span>${(
//               +data.population / 1000000
//             ).toFixed(1)} people</p>
//             <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
//             <p class="country__row"><span>💰</span>${
//               data.currencies[0].name
//             }</p>
//             </div>
//       </article>
//         `;
//     countriesContainer.insertAdjacentHTML('beforeend', html);
//     countriesContainer.style.opacity = 1;
//   });
// };
// getCountryData('portugal');
// getCountryData('france');

// const getCountryAndNeighbor = function (country) {
//   // AJAX call country 1
//   const request = new XMLHttpRequest();
//   request.open(
//     'GET',
//     `https://countries-api-836d.onrender.com/countries/name/${country}`
//   );
//   request.send();

//   request.addEventListener('load', function () {
//     // console.log(this.responseText);
//     const [data] = JSON.parse(this.responseText);
//     console.log(data);

//     // Render country 1
//     renderCountry(data);

//     // Get neighbor country 2
//     const neighbor = data.borders?.[0];
//     // if (!neighbor) return;

//     // AJAX call country 2
//     const request2 = new XMLHttpRequest();
//     request2.open(
//       'GET',
//       `https://countries-api-836d.onrender.com/countries/alpha/${neighbor}`
//     );
//     request2.send();

//     request2.addEventListener('load', function () {
//         const data2 = JSON.parse(this.responseText);
//         console.log(data2);
//         renderCountry(data2, 'neighbour');
//     });
//   });
// };
// getCountryAndNeighbor('Argentina');
// getCountryAndNeighbor('usa');

// The Modern Way: Fetch API
// const request = fetch('https://countries-api-836d.onrender.com/countries/name/Argentina')  // Making a simple GET request.
// // The fetch function can take a second argument, an object with options.
// console.log(request);

// const getCountryData = function (country) {
//   fetch(`https://countries-api-836d.onrender.com/countries/name/${country}`)
//     .then(function (response) {
//       console.log(response);
//       return response.json();
//     })
//     .then(function (data) {
//       console.log(data);
//       renderCountry(data[0]);
//     });
// };

// const getCountryData = function (country) {
//   fetch(`https://countries-api-836d.onrender.com/countries/name/${country}`)
//     .then(function (response) {
//       console.log(response);
//       return response.json();
//     })
//     .then(function (data) {
//       console.log(data);
//       renderCountry(data[0]);
//     });
// };

const getJSON = function (url, errorMsg = 'Something went wrong') {
  return fetch(url).then(response => {
    if (!response.ok) {
      throw new Error(`${errorMsg} (${response.status})`);
    }
    return response.json();
  });
};

// Much Simpler with Arrow Functions
const getCountryData = function (country) {
  // Country 1
  getJSON(
    `https://countries-api-836d.onrender.com/countries/name/${country}`,
    'Country not found'
  )
    .then(data => {
      renderCountry(data[0]);
      const neighbour = data[0].borders?.[0];

      if (!neighbour) throw new Error('No neighbour found!');

      // Country 2
      return getJSON(
        `https://countries-api-836d.onrender.com/countries/alpha/${neighbour}`,
        'Country not found'
      );
    })
    .then(data => renderCountry(data, 'neighbour'))
    .catch(err => {
      console.error(`${err} 💥💥💥`);
      renderError(`Something went wrong 💥💥💥 ${err.message}. Try again!`);
    })
    .finally(() => {
      countriesContainer.style.opacity = 1;
    });
};

// btn.addEventListener('click', function () {
//   // getCountryData('Argentina');
//   whereAmI();
// });
// getCountryData('Australia');

// const getCountryData = function (country) {
//   // Country 1
//   fetch(`https://restcountries.eu/rest/v2/name/${country}`)
//     .then(response => {
//       console.log(response);

//       if (!response.ok)
//         throw new Error(`Country not found (${response.status})`);

//       return response.json();
//     })
//     .then(data => {
//       renderCountry(data[0]);
//       // const neighbour = data[0].borders[0];
//       const neighbour = 'dfsdfdef';

//       if (!neighbour) return;

//       // Country 2
//       return fetch(`https://restcountries.eu/rest/v2/alpha/${neighbour}`);
//     })
//     .then(response => {
//       if (!response.ok)
//         throw new Error(`Country not found (${response.status})`);

//       return response.json();
//     })
//     .then(data => renderCountry(data, 'neighbour'))
//     .catch(err => {
//       console.error(`${err} 💥💥💥`);
//       renderError(`Something went wrong 💥💥 ${err.message}. Try again!`);
//     })
//     .finally(() => {
//       countriesContainer.style.opacity = 1;
//     });
// };

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
const checkResponse = function (response, errorMsg) {
  if (!response.ok) {
    throw new Error(`${errorMsg}, ${response.status}`);
  }
  return response.json();
};

// const whereAmII = function (lat, lng) {
//   fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`)
//     .then(response => checkResponse(response, `Timeout Error`))
//     .then(data => {
//       console.log(data);
//       console.log(`You are in ${data.city}, ${data.country}`);

//       // Getting the country from the coordinates
//       return fetch(
//         `https://countries-api-836d.onrender.com/countries/name/${data.country}`
//       );
//     })
//     .then(response => checkResponse(response, `Country not found`))
//     .then(data => renderCountry(data[0]))
//     .catch(err => {
//       console.error(`${err.message} 💥💥`);
//     });
// };

// whereAmI(52.508, 13.381);
// whereAmI(19.037, 72.873);
// whereAmI(-33.933, 18.474);

////////////////////////////////
// EVENT LOOPS IN PRACTICE

// console.log('Test Start');
// setTimeout(() => console.log('0 sec timer'), 0);
// Promise.resolve('Resolved promise 1').then(response => console.log(response));

// Promise.resolve('Resolved promise 2').then(response => {
//   for (let i = 0; i < 100000000; i++) {}
//   console.log(response);
// })

// console.log('Test End');

//////////////////////////////////////
// BUILDING A SIMPLE PROMISE

// const lottertyPromise = new Promise(function (resolve, reject) {
//   console.log(`Lottery draw is happening 🔮`);
//   setTimeout(() => {
//     if (Math.random() >= 0.5) {
//       resolve('You WIN! 💰');
//     } else {
//       reject(new Error('You lost your money!💩'));
//     }
//   }, 2000);
// });

// lottertyPromise
//   .then(response => console.log(response))
//   .catch(err => console.error(err));

// Promisifying setTimeout
const wait = function (seconds) {
  return new Promise(function (resolve) {
    setTimeout(resolve, seconds * 1000);
  });
};

// wait(2)
//   .then(() => {
//     console.log('I waited for 2 seconds');
//     return wait(1);
//   })
//   .then(() => console.log('I waited for 1 second'));

// Promise.resolve('abc').then(x => console.log(x));
// Promise.reject(new Error('Problem!')).catch(error => console.error(error));

//////////////////////////////////////////////////////
// PROMISIFYING THE GEOLOCATION API

// navigator.geolocation.getCurrentPosition(position => console.log(position), err => console.error(err))
// console.log('Getting position...');

const getPosition = function () {
  return new Promise(function (resolve, reject) {
    // navigator.geolocation.getCurrentPosition(position => resolve(position), err => reject(err))
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};
// getPosition().then(position => console.log(position));

// const whereAmI = function () {
//   getPosition()
//     .then(position => {
//       console.log(position.coords);
//       const { latitude: lat, longitude: lng } = position.coords;
//       return fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`);
//     })
//     .then(response => checkResponse(response, `Timeout Error`))
//     .then(data => {
//       console.log(data);
//       console.log(`You are in ${data.city}, ${data.country}`);

//       // Getting the country from the coordinates
//       return fetch(
//         `https://countries-api-836d.onrender.com/countries/name/${data.country}`
//       );
//     })
//     .then(response => checkResponse(response, `Country not found`))
//     .then(data => {
//       // console.log(data[0]);
//       renderCountry(data[0])
//     })
//     .catch(err => {
//       console.error(`${err.message} 💥💥`);
//     });
// };

///////////////////////////////////////
// Coding Challenge #2

/* 
Build the image loading functionality that I just showed you on the screen.

Tasks are not super-descriptive this time, so that you can figure out some stuff on your own. Pretend you're working on your own 😉

PART 1
1. Create a function 'createImage' which receives imgPath as an input. This function returns a promise which creates a new image (use document.createElement('img')) and sets the .src attribute to the provided image path. When the image is done loading, append it to the DOM element with the 'images' class, and resolve the promise. The fulfilled value should be the image element itself. In case there is an error loading the image ('error' event), reject the promise.

If this part is too tricky for you, just watch the first part of the solution.

PART 2
2. Comsume the promise using .then and also add an error handler;
3. After the image has loaded, pause execution for 2 seconds using the wait function we created earlier;
4. After the 2 seconds have passed, hide the current image (set display to 'none'), and load a second image (HINT: Use the image element returned by the createImage promise to hide the current image. You will need a global variable for that 😉);
5. After the second image has loaded, pause execution for 2 seconds again;
6. After the 2 seconds have passed, hide the current image.

TEST DATA: Images in the img folder. Test the error handler by passing a wrong image path. Set the network speed to 'Fast 3G' in the dev tools Network tab, otherwise images load too fast.

GOOD LUCK 😀
*/

// MY SOLUTION
// let img;
// const createImage = function (imgPath) {
//   return new Promise(function (resolve, reject) {
//     img = document.createElement('img');
//     img.src = imgPath;

//     img.addEventListener('load', function () {
//       console.log(img);
//       console.log('Image Loaded');
//       imgContainer.append(img);
//       resolve(img);
//     });

//     img.addEventListener('error', function () {
//       reject(new Error('Image not found'));
//     });
//   });
// };

// createImage('img/img-1.jpg')
//   .then(resImg => {
//     img = resImg;
//     return wait(2);
//   })
//   .then(() => {
//     img.style.display = 'none';
//     img.src = 'img/img-2.jpg';
//     return wait(2);
//   })
//   .then(() => {
//     img.style.display = 'block';
//     return wait(2);
//   })
//   .then(() => (img.style.display = 'none'))
//   .catch(err => console.error(err));

// JONAS SOLUTION

const createImage = function (imgPath) {
  return new Promise(function (resolve, reject) {
    const img = document.createElement('img');
    img.src = imgPath;

    img.addEventListener('load', function () {
      imgContainer.append(img);
      resolve(img);
    });

    img.addEventListener('error', function () {
      reject(new Error('Image not Found'));
    });
  });
};

// let currentImg;

// createImage('img/img-1.jpg')
//   .then(resImg => {
//     currentImg = resImg
//     console.log('Img1 Loaded');
//     return wait(2);
//   })
//   .then(() => {
//     currentImg.style.display = 'none';
//     return createImage('img/img-2.jpg')
//   })
//   .then(resImg => {
//     currentImg = resImg;
//     console.log('Image 2 Loaded');
//     return wait(2);
//   })
//   .then(() => {
//     currentImg.style.display = 'none'
//   })
//   .catch(err => console.error(err));

////////////////////////////////////////////////
// CONSUMING PROMISES WITH ASYNC AND AWAIT

const whereAmI = async function () {
  try {
    // Geolocation
    const position = await getPosition();
    const { latitude: lat, longitude: lng } = position.coords;

    // Reverse Geocoding
    const resGeo = await fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`);
    if (!resGeo.ok) throw new Error('Problem getting location data');
    const dataGeo = await resGeo.json();

    // Country Data
    const res = await fetch(
      `https://countries-api-836d.onrender.com/countries/name/${dataGeo.country}`
    );
    if (!res.ok) throw new Error('Problem getting country');
    const data = await res.json();
    renderCountry(data[0]);

    return `You are in ${dataGeo.city}, ${dataGeo.country}`;
  } catch (err) {
    console.error(`${err} 💥`);
    renderError(`💥 ${err.message}. Try again!`);

    // Rejecting the promise returned from the async function
    throw err;
  }
};

// console.log('1: Will get location');
// const city = whereAmI();
// console.log(city);
// whereAmI()
//   .then(city => console.log(`2 ${city}`))
//   .catch(err => console.error(`2 ${err.message} 💥`))
//   .finally(() => console.log('3: Finished getting location'));

// (async function () {
//   try {
//     const city = await whereAmI();
//     console.log(`2: ${city}`);
//   } catch (err) {
//     console.error(`2: ${err.message} 💥`);
//   }
//   console.log('3: Finished getting location');
// })();

// Running Promises in Parallel
// const get3Countries = async function(c1, c2, c3){
//   try{
//     // const [data1] = await getJSON(`https://countries-api-836d.onrender.com/countries/name/${c1}`);
//     // const [data2] = await getJSON(`https://countries-api-836d.onrender.com/countries/name/${c2}`);
//     // const [data3] = await getJSON(`https://countries-api-836d.onrender.com/countries/name/${c3}`);
//     // console.log([data1.capital, data2.capital, data3.capital]);

//     const data = await Promise.all([
//       getJSON(`https://countries-api-836d.onrender.com/countries/name/${c1}`),
//       getJSON(`https://countries-api-836d.onrender.com/countries/name/${c2}`),
//       getJSON(`https://countries-api-836d.onrender.com/countries/name/${c3}`)
//     ]);
//     console.log(data.map(d => d[0].capital));
//   } catch(err){
//     console.error(err);
//   }
// }

// get3Countries('Argentina', 'Nigeria', 'France');

// THE 3 OTHER PROMISE COMBINATORS (RACE, ALLSETTLED & ANY)
// Promise.race - Returns a promise that fulfills or rejects as soon as one of the promises in an iterable fulfills or rejects, with the value or reason from that promise.

// (async function () {
//   const res = await Promise.race([
//     getJSON(`https://countries-api-836d.onrender.com/countries/name/Argentina`),
//     getJSON(`https://countries-api-836d.onrender.com/countries/name/Nigeria`),
//     getJSON(`https://countries-api-836d.onrender.com/countries/name/Mexico`),
//   ]);
//   console.log(res);
//   console.log(res[0]);
// })();

const timeout = function (seconds) {
  return new Promise(function (_, reject) {
    setTimeout(
      () => reject(new Error('Request took too long!')),
      seconds * 1000
    );
  });
};

// Promise.race([
//   getJSON(`https://countries-api-836d.onrender.com/countries/name/Sweden`),
//   timeout(0.9),
// ])
//   .then(data => console.log(data[0]))
//   .catch(err => console.error(err));

// Promise.allSettled - Returns a promise that resolves after all of the given promises have either fulfilled or rejected, with an array of objects that each describes the outcome of each promise.
// Promise.any - Takes an iterable of Promise objects and, as soon as one of the promises in the iterable fulfills, returns a single promise that resolves with the value from that promise. If no promises in the iterable fulfill (if all of the given promises are rejected), then the returned promise is rejected with an AggregateError, a new subclass of Error that groups together individual errors.

// Promise.any([
//   Promise.resolve('Success'),
//   Promise.reject('ERROR'),
//   Promise.resolve('Another Success'),
// ])
//   .then(res => console.log(res))
//   .catch(err => console.error(err));

///////////////////////////////////////
// Coding Challenge #3

/* 
PART 1
Write an async function 'loadNPause' that recreates Coding Challenge #2, this time using async/await (only the part where the promise is consumed). Compare the two versions, think about the big differences, and see which one you like more.
Don't forget to test the error handler, and to set the network speed to 'Fast 3G' in the dev tools Network tab.

PART 2
1. Create an async function 'loadAll' that receives an array of image paths 'imgArr';
2. Use .map to loop over the array, to load all the images with the 'createImage' function (call the resulting array 'imgs')
3. Check out the 'imgs' array in the console! Is it like you expected?
4. Use a promise combinator function to actually get the images from the array 😉
5. Add the 'paralell' class to all the images (it has some CSS styles).

TEST DATA: ['img/img-1.jpg', 'img/img-2.jpg', 'img/img-3.jpg']. To test, turn off the 'loadNPause' function.

GOOD LUCK 😀
*/

/// PART 1

// MY SOLUTION
// let currentImg;
// console.log(currentImg);
// const loadNPause = async function(){
//   try {
//     // Loading the first Image
//     const img1 = await createImage('img/img-1.jpg')
//     currentImg = img1;
//     console.log('Image 1 loaded');   
//     await wait(2);
//     currentImg.style.display = 'none';

//     // Loading the second Image
//     const img2 = await createImage('img/img-2.jpg')
//     currentImg = img2;
//     console.log('Image 2 loaded');
//     await wait(2);
//     currentImg.style.display = 'none';
//   } catch(err){
//     console.error(err);
//   }
// }
// loadNPause();

// JONAS SOLUTION
// const loadNPause = async function(){
//   try {
//     // Loading the first Image
//     let img = await createImage('img/img-1.jpg')
//     console.log('Image 1 loaded');   
//     await wait(2);
//     img.style.display = 'none';

//     // Loading the second Image
//     img = await createImage('img/img-2.jpg')
//     console.log('Image 2 loaded');
//     await wait(2);
//     img.style.display = 'none';
//   } catch(err){
//     console.error(err);
//   }
// }
// loadNPause();

// PART 2
// MY SOLUTION
const loadAll = async function(imgArr){
  try{
    const imgs = imgArr.map(async img => createImage(img));
    console.log(imgs); // It's not as i expected

    const imgEl = await Promise.all(imgs);

    console.log(imgEl); // This is what i expected
  } catch (err){
    console.error(err);
  }
}
loadAll(['img/img-1.jpg', 'img/img-2.jpg', 'img/img-3.jpg']);

