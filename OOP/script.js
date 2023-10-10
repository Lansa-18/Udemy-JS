'use strict';

const Person = function(firstName, birthYear){

}

new Person('Lancer', 2004);

// when a function is called with the (new) keyworrd, 4 things happens behind the scene.
// 1. A new {} is created
// 2. function is then calleed, this = {}
// 3. {} linked to prototype
// 4. function automatically returns the {}