'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////

// The Old Way: XMLHttpRequest
const request = new XMLHttpRequest();
request.open('GET', 'https://countries-api-836d.onrender.com/countries/name/portugal');
request.send();

request.addEventListener('load', function() {
    // console.log(this.responseText);
    const data = JSON.parse(this.responseText);
    console.log(data);
});
