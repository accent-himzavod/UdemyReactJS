"use strict";

//=== Work with Arrays======
const oldArray = [1,2,3];
const newArray = oldArray.slice(); //clone array by value, (Object.assign())
//-----------------------------------------------------
const family = ['Peter', 'Ann', 'Alex', 'Linda'];

function showFamily(arr) {
    if (arr.length === 0) {
        return `Семья пуста`;
    } else {
        return `Семья состоит из: ${[...arr].join(' ')}`;
    }    
}
console.log(showFamily(family));

const favoriteCities = ['liSBon', 'ROME', 'miLan', 'Dublin'];

function standardizeStrings(arr) {
    console.log([...arr].join('\n').toLocaleLowerCase());
}
standardizeStrings(favoriteCities);

//teacher
// function showFamily(arr) {
//     let str = '';
//     arr.length === 0 ? str = 'Семья пуста' : str = 'Семья состоит из: ';
//     arr.forEach(member => {
//         str += `${member} `
//     });
//     return str;
// }
// function standardizeStrings(arr) {
//     arr.forEach(city => {
//         console.log(city.toLowerCase())
//     })
// }