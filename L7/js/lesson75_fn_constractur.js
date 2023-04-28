'use strict';

//Lesson 75 - Function Constructor (ES 5)
function User(name,id){
	this.name = name;
	this.id = id;
	this.human = true;
	this.hello = function(){
		console.log(`Hello, ${this.name}`);
	};
}

User.prototype.exit = function(){
	console.log(`User ${this.name} leave the chat`);
};

const ivan = new User("Ivan",28);
const alex = new User("Alex", 23);

ivan.hello();
ivan.exit();

//Lesson 76 - Call context (This)
//1) Simple function:
//showThis - in strict mode: this = undefined
//showThis - in not strict mode: this = window
function showThis(){
	console.log(this);
}
//showThis();

//1.2) Nested function:
function showThis2(a,b){
	console.log(this);
	function sum(){
		console.log(this);
		// return this.a + this.b;
		return a + b; //lock function
	}
	console.log(sum());
}
showThis2(4,5);

//2) Function of Object:
//Context for Methods of objects is own object
const obj = {
	a: 4,
	b: 5,
	sum: function(){
		function shout(){
			console.log(this);
		}
		shout();
	}
};
obj.sum();

//3) this for Constrectors and Classes is new instance of object (Vova)

function Agent(name,id){
	this.name = name;
	this.id = id;
	this.human = true;
	this.hello = function(){
		console.log(`Hello, ${this.name}`);
	};
}

const vova = new Agent("Vova",28);

//4) Manual assign this for function: call, apply, bind

function sayName(Surename){
	console.log(this);
	console.log(this.name + Surename);
}

const user = {
	name: "Nikolai"
};

sayName.call(user, "Shamanov");
sayName.apply(user, ["Shamanov"]);

function count(sum){
	return this*sum;
}
const double = count.bind(2);
console.log(double(5));

//5) ()=>{} don't has own conext, it use context of parent
const btn = document.querySelector('heart');

//btn.addEventListener("click", () => {        //we've lost the context
btn.addEventListener("click", function(){
//btn.addEventListener("click", function(e){
	this.backgroundColor = "red";
	//e.target.style.backgroundColor = "red"; //the same
});


const double2 = (a) => {
	return a * 2;
};
//the same
const double3 = (a) => a * 2;
//the same
const double4 = a => a * 2;