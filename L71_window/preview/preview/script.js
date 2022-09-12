'use strict';

const   box = document.querySelector('.box'),
        btn = document.querySelector('button');

const   heightCl = box.clientHeight,
        widthCl = box.clientWidth;

const   heightOff = box.offsetHeight,
        widthOff = box.offsetWidth;

const   heightScrl = box.scrollHeight,
        widthScrl = box.scrollWidth;

console.log(widthCl, heightCl);

const style = window.getComputedStyle(box);
const boxHeight = window.getComputedStyle(box).height;
            
btn.addEventListener('click', () => {
    console.log(box.offsetHeight +" "+ box.scrollHeight);
    console.log(box.clientHeight - box.scrollHeight);
    if (box.offsetHeight == box.scrollHeight){
        box.style.height = boxHeight;
    } else {
        box.style.height = box.scrollHeight + 'px';
    }
    console.log(box.scrollTop);
    console.log(box.getBoundingClientRect());
    console.log(box.getBoundingClientRect().top);
    console.log(style.height);
    console.log(document.documentElement.scrollTop);
    document.documentElement.scrollTop = 100;
    window.scrollTo(0,20);
    window.scrollBy(0,20);

    
});


