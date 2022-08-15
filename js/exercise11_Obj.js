"use strict";

//=== Work with Arrays======
const oldArray = [1,2,3];
const newArray = oldArray.slice(); //clone array by value, (Object.assign())
//-----------------------------------------------------
const family = ['Peter', 'Ann', 'Alex', 'Linda'];

function showFamily(arr) {
    return `Семья состоит из: ${[...arr].join(' ')}`;
}

console.log(showFamily(family));

const favoriteCities = ['liSBon', 'ROME', 'miLan', 'Dublin'];

function standardizeStrings(arr) {
    
}