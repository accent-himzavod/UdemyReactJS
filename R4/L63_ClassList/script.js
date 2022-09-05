'use strict';

const btns = document.querySelectorAll('button');
console.log(btns[0].classList.length);
console.log(btns[0].classList.item(1));
btns[1].classList.add('red', 'green');
btns[1].classList.remove('red');
btns[2].classList.toggle('red');
btns[0].addEventListener('click', () => {
    if (!btns[0].classList.contains('red')) {
        btns[0].classList.add('red');
    } else {
        btns[0].classList.remove('red');
    };
});

const wrapper = document.querySelector('.btn-block');
wrapper.addEventListener('click', (event) =>{
    // if (event.target && event.target.tagName == 'BUTTON') {
    if (event.target && event.target.matches('button.red')) {
        console.log('Hello');
    }
})