'use strict';

const person = {
	name: 'Peter',
	phone: '+380509874512',
	parents: {
		mom: 'Olga',
		dad: 'Oleg'
	}
};

console.log(person);
console.log(JSON.stringify(person));      //to JSON
console.log(JSON.parse(JSON.stringify(person))); //to obj

const clone = JSON.parse(JSON.stringify(person));

console.log(clone);
clone.parents.mom = 'Silva';
console.log(person);
console.log(clone);