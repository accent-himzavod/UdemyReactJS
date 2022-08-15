"use strict";

const someString = 'This is some strange string';

// console.log(someString.length);

function reverse(str) {
    let resultStr = '';
    if (typeof(str) !=='string') {return 'Ошибка!'}
    //return str.split('').reverse().join('');  //=teacher==
    for (let i=str.length; i > 0; i--) {
        resultStr += str[i-1]; 
    }
    return resultStr;
}
console.log(reverse(someString));

const baseCurrencies = ['USD', 'EUR'];
const additionalCurrencies = ['UAH', 'RUB', 'CNY'];

function availableCurr(arr, missingCurr) {
    let resultStr = '';
    //arr.length === 0 ? resultStr = 'Нет доступных валют' : resultStr = 'Доступные валюты:\n';
    if (arr.length === 0){
        return 'Нет доступных валют';
    } else {
        resultStr = 'Доступные валюты:\n' 
        arr.join(',').split(',').forEach(cur => {
        if (cur !== missingCurr) {resultStr += `${cur}\n`}
         });
         return resultStr;
    }    
}

console.log(availableCurr([...baseCurrencies,...additionalCurrencies],'RUB')); //teacher
console.log(availableCurr([baseCurrencies, additionalCurrencies],'RUB'));       // Me


