'use strict';

const   inputRUB = document.querySelector('#rub'),
        inputUSD = document.querySelector('#usd');

inputRUB.addEventListener('input', ()=>{
    const request = new XMLHttpRequest();

    request.open('GET','./js/current.json');

    request.setRequestHeader('Content-type','application/json; char-set=utf-8');
    request.send();

    // request.addEventListener('readystatechange', ()=>{
    //      if (request.readyState === 4 ||  request.status === 200){
    request.addEventListener('load', ()=>{
        //console.log(request.status);
        if (request.status === 200){
            const data = JSON.parse(request.response);
            //console.log(data.current.usd);
            inputUSD.value = (+inputRUB.value / data.current.usd).toFixed(2);
        } else {
            inputUSD.value = '!err'
        }        
    });
});