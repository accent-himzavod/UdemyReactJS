'use strict';

const   box = document.getElementById('box'),
        btns = document.getElementsByTagName('button')[0],
        crcls = document.getElementsByClassName('circle'),
        wrapper = document.querySelector('.wrapper'),
        hearts = wrapper.querySelectorAll('.heart'),	// by class
        oneHeart = wrapper.querySelector('#heart'); // by Id  


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

        const div = document.createElement('div');
        const text = document.createTextNode('I am a robot');

        div.classList.add('black');

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
