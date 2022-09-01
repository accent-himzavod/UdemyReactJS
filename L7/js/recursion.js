"use strict";

function factorial(x) {
    //if (typeof(n) !== 'number' || !Number.isInteger(n))
    if (typeof(x) != 'number' ||  x - x.toFixed() !== 0) {
        return 'error'
    }

    if (x < 2) {
        return 1;
    } else {
        return x * factorial(x - 1);
    }    
}

 // Более короткий вариант, который вы можете встретить
    // Но не учитывает отрицательные значения
    // return n ? n * factorial(n - 1) : 1;
console.log(factorial(5));