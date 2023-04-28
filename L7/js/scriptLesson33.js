'use strict';
//======= Arrays ============

const arr = [2, 3, 6, 8, 10];
// arr[99] = 0;
// console.log(arr.length);
// arr.pop();       //delete
// arr.push();      //append

for (let i = 0; i < arr.length; i++) {
	console.log(arr[i]);
}
//can use break
for (let value of arr) {
	console.log(value);
}
//break - not work
arr.forEach(function(item, i, arr){
	console.log(`${i}: ${item} в середині масиву ${arr}`);
});

const str = 'dfdf, werwer, xcvx';
console.log(str.split(','));
console.log(str.split(',').join('; '));

//Sort Array like a numbers
arr.sort(compareNum);
console.log(arr);
function compareNum(a,b) {
	return a - b;
}
