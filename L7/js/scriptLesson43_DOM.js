'use strict';

const   box = document.getElementById('box'),
        btns = document.getElementsByTagName('button'),
        //btns = document.getElementsByTagName('button')[0],
        //isFav = formAdd.querySelector("[type='checkbox']"),
        crcls = document.getElementsByClassName('circle'),
        wrapper = document.querySelector('.wrapper'),
        hearts = wrapper.querySelectorAll('.heart'),	// by class
        oneHeart = wrapper.querySelector('#heart'); // by Id  

//Style
box.style.backgroundColor = 'blue';
box.style.width = '500px';
box.style.cssText = `background-color: blue; width: 500px`;
btns[0].style.borderRadius = '100%'; 
crcls[1].style.backgroundColor = 'red';

for (let i = 0; i < hearts.length; i++) {
    hearts[i].style.backgroundColor = 'blue';
}

hearts.forEach(item => {
    item.style.backgroundColor = 'red';
});
//Create elements
const div = document.createElement('div');
const text = document.createTextNode('I am a robot');

div.classList.add('black');
//Inserting elements
wrapper.append(div);
wrapper.appendChild(div);
wrapper.prepend(div);

hearts[0].before(div);
hearts[0].after(div);

wrapper.insertBefore(div, hearts[2]);

crcls[0].remove();
hearts[0].replaceWith(crcls[0]);
wrapper.removeChild(hearts[1]);
wrapper.replaceChild(crcls[0], hearts[0]);

div.innerHTML = '<h1>Hello world</h1>';
div.textContent = "Hello world";

div.insertAdjacentHTML("afterbegin",'<h2>Hello!</h2>');
div.insertAdjacentHTML("afterend",'<h2>Hello!</h2>');
div.insertAdjacentHTML("beforebegin",'<h2>Hello!</h2>');
div.insertAdjacentHTML("beforeend",'<h2>Hello!</h2>');
//==================================================================
//Events
const deleteElement = (event) => {
    e.target.remove();
};
btns.forEach(btn => {
    btn.addEventListener('click',(event) => {
        console.log(event.target);
        console.log(event.currentTarget);
        console.log(event.type);
        //event.target.remove();
    })
}); 
btns[0].addEventListener('click', deleteElement, {once: true});
btns[1].removeEventListener('click', deleteElement);

//Prevent Default Events
let link = document.querySelector('a');
link.addEventListener('click', function(event){
    event.preventDefault();
});
//==================================================================
//DOM movement
document.head;
document.documentElement;
document.body.childNodes;
document.body.firstChild;               //Node
document.body.firstElementChild;        //Element
document.body.lastChild;
document.body.lastElementChild;
document.querySelector('#current').parentNode.parentNode;       //Node
document.querySelector('#current').parentElement;               //Element
document.querySelector('[data-current="3"]').nextSibling;       //Node
document.querySelector('[data-current="3"]').nextElementSibling //Element
document.querySelector('[data-current="3"]').previousSibling;
document.querySelector('[data-current="3"]').previousElementSibling
//document body childElements
for (node of document.body.childNodes) {
    if (node.nodeName == '#text') {
        continue;
    }
    console.log(node);
}

