"use strict";
// Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”
let favoriteTransportation = [];
favoriteTransportation.push(["motorcycle", "Honda"]);
favoriteTransportation.push(["car", "Honda"]);
favoriteTransportation.push(["bicycle", "Soharab"]);
//console.log(favoriteTransportation)
// I would like to own a Honda motorcycle.
// using for each loop to print a series of statements
favoriteTransportation.forEach(([Transport, brand]) => { console.log(`I would liked to own a ${brand} ${Transport}.`); });
