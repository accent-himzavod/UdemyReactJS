'use struct';

const obj = new Object();

const options = {
    name: "test",
    width: 1024,
    height: 768,
    color: {
        border: 'black',
        bg: 'red'
    },
    makeTest: function(){
        console.log("test");
    }
}

// console.log(options.name);
// delete options.name; //видалення властивостей обєкта
// console.log(options);
//console.log(options["color"]["border"]);
// Перебор властивостей обєкта
for (let key in options) {
    if (typeof(options[key]) === 'object') {
        for (let item in options[key]) {
            console.log(`Властивість ${item} має значення: ${options[key][item]}`);
        }
    } else {        
        console.log(`Властивість ${key} має значення: ${options[key]}`);
    }    
}

console.log(Object.keys(options));
console.log(Object.keys(options).length);
console.log(Object.keys(options["color"]).length);

options.makeTest();

const {border, bg} = options.color;
console.log(border);

console.dir(options);