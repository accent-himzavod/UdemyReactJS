'use strict';
window.addEventListener('DOMContentLoaded',() => {
    const   tabsParent = document.querySelector('.tabheader__items'),
            tabs = tabsParent.querySelectorAll('.tabheader__item'),
            tabsContent = document.querySelectorAll('.tabcontent');
            
    //TABs
    function hideTabContent() {
        tabsContent.forEach(item => {
            item.style.display = 'none';
        });
        tabs.forEach(item => {
            item.classList.remove('tabheader__item_active')
        })
    }

    function showTabContent(i = 0) {
        tabsContent[i].style.display = 'block';
        tabs[i].classList.add('tabheader__item_active');
    }

    tabsParent.addEventListener('click', (e) => {
        const target = e.target;
        if (target && target.classList.contains('tabheader__item')) {
            tabs.forEach((item,i) => {
                if (item == target) {
                    hideTabContent();
                    showTabContent(i);
                }
            })
        }
    })
    hideTabContent();
    showTabContent(0);

    //DEADLINE
    const   deadLine = '2022-09-17';
    
    // By couch
    // function getRemainingTime(endTime){        
    //     let t = Date.parse(endTime) - Date.parse(new Date()),
    //         days = Math.floor(t / (1000 * 60 * 60 * 24)),
    //         hours = Math.floor(t / (1000 * 60 * 60) % 60),
    //         minutes = Math.floor((t / (1000 * 60)) % 60),
    //         seconds = Math.floor((t / 1000) % 60);

    //     return {
    //         total: t,
    //         days: days,
    //         hours: hours,
    //         minutes: minutes,
    //         seconds: seconds
    //     };        
    // }

    function getRemainingTime(endTime){        
        let t = {
            total: total,
            days: days,
            hours: hours,
            minutes: minutes,
            seconds: seconds
        }
        t.total = Date.parse(endTime) - Date.parse(new Date());
        if (t.total <= 0) {
            t.days = 0;
            t.hours = 0;
            t.minutes = 0;
            t.seconds = 0;
        } else {
            t.days = Math.floor(t.total / (1000 * 60 * 60 * 24));
            t.hours = Math.floor(t.total / (1000 * 60 * 60) % 60);
            t.minutes = Math.floor((t.total / (1000 * 60)) % 60);
            t.seconds = Math.floor((t.total / 1000) % 60);
        }
        return t;        
    }

    function getZero(num) {
        if (num >= 0 && num < 10) {
            return `0${num}`;
        } else {
            return num;
        }
    }

    function setClock(selector, endTime) {
        const timer = document.querySelector(selector),
                days = timer.querySelector('#days'),
                hours = timer.querySelector('#hours'),
                minutes = timer.querySelector('#minutes'),
                seconds = timer.querySelector('#seconds');
                
        const intervalID = setInterval(updateClock, 1000);
        updateClock();
        function updateClock() {
            const remTime =  getRemainingTime(endTime);
            if (remTime.total <= 0) {clearInterval(intervalID);}// clearInterval();               
          
            days.innerHTML = getZero(remTime.days);
            hours.innerHTML = getZero(remTime.hours);
            minutes.innerHTML = getZero(remTime.minutes);
            seconds.innerHTML = getZero(remTime.seconds);                
         }  
    }   

    setClock('.timer',deadLine);

    //MODAL

    const btnModal = document.querySelectorAll('[data-modal]'),
            modal = document.querySelector('.modal'),
            modalClose = document.querySelector('[data-modal_close]');
    //Open modal
    function openModal() {
         //modal.style.display = "block";
         modal.classList.add('show');
         modal.classList.remove('hide');
         document.body.style.overflow = 'hidden';
         //clearInterval(modalTimerID);
    }

    btnModal.forEach(btn => {
        btn.addEventListener('click', openModal);
    });

    //Close modal
    function closeModal() {
        modal.classList.add('hide');
        modal.classList.remove('show');
        document.body.style.overflow = '';
        clearInterval(modalTimerID); //better way close Timer here
    }
    //btn
    modalClose.addEventListener('click', closeModal)
    //bg
    modal.addEventListener('click',(e) => {        
        if (e.target === modal || e.target.getAttribute('data-modal_close') == '') {
            closeModal();
        }
    });
    //keydown
    document.addEventListener('keydown', (e) => {
        if (e.code == 'Escape' && modal.classList.contains('show')) {
            closeModal();
        }
    });

    const modalTimerID = setInterval(openModal, 3000);

    function openModalByScrol() {
        //console.log(window.pageYOffset); //deprecated
        //console.log(window.scrollY + document.documentElement.clientHeight, "=",document.documentElement.scrollHeight);
        if (window.scrollY + document.documentElement.clientHeight == document.documentElement.scrollHeight) {
            openModal();
            window.removeEventListener('scroll', openModalByScrol);
        }
    }

    window.addEventListener('scroll', openModalByScrol);

    class MenuItem{        
        constructor(imgSrc, imgAlt, title, describe, price, parentSelector, ...classes){
            this.imgSrc = imgSrc;
            this.imgAlt = imgAlt;
            this.title = title;
            this.describe = describe;
            this.price = price;
            this.classes = classes;
            this.currency = 27;
            this.convertToUAH();
            this.parent = document.querySelector(parentSelector);
        }

        convertToUAH(){
            this.price = this.price * this.currency;
        }

        render(){
            const element = document.createElement('div');
            if (this.classes.length === 0) {                
                //element.classList.add('menu__item')
                this.element = 'menu__item';
                element.classList.add(this.element);
            } else {
                this.classes.forEach(classNames => {
                    element.classList.add(classNames)
                });
            }
            
            element.innerHTML = `            
                <img src=${this.imgSrc} alt=${this.imgAlt}>
                <h3 class="menu__item-subtitle">${this.title}</h3>
                <div class="menu__item-descr">${this.describe}</div>
                <div class="menu__item-divider"></div>
                <div class="menu__item-price">
                    <div class="menu__item-cost">Цена:</div>
                    <div class="menu__item-total"><span>${this.price}</span> грн/день</div>
                </div>`;
            this.parent.append(element);
        }
    }

    // const menuItem = new MenuItem(
    new MenuItem(
        "img/tabs/vegy.jpg",
        "vegy",
        'Меню "Фитнес"',
        'Меню "Фитнес" - это новый подход к приготовлению блюд: больше свежих овощей и фруктов. Продукт активных и здоровых людей. Это абсолютно новый продукт с оптимальной ценой и высоким качеством!',
        20,
        '.menu .container',
        "menu__item",
        "disp"        
        ).render();
    //menuItem.render();

    new MenuItem(
        "img/tabs/elite.jpg",
        "elite",
        'Меню “Премиум”',
        'В меню “Премиум” мы используем не только красивый дизайн упаковки, но и качественное сполнение блюд. Красная рыба, морепродукты, фрукты - ресторанное меню без похода в ресторан!',
        15,
        '.menu .container',
        "menu__item"
        ).render();

    new MenuItem(
        "img/tabs/post.jpg",
        "post",
        'Меню "Постное"',
        'ВПостное” - это тщательный подбор ингредиентов: полное отсутствие продуктов животного происхождения, молоко из миндаля, овса, кокоса или гречки, правильное количество белков за счет тофу и импортных вегетарианских стейков. ',
        17,
        '.menu .container',
        "menu__item"
    ).render();   
    
    //Forms
    //1-FormData
    //2-XMLHttpRequest
    const forms = document.querySelectorAll('form');

    forms.forEach(form => {
        postJsonData(form);
    });

    const message = {
        success: 'Success!',
        // loading: 'loading...',
        loading: './img/form/spinner.svg',
        failure: 'error!'
    }

    function postFormData(form){
        form.addEventListener('submit',(e)=>{
            e.preventDefault();
            const statusMessage = document.createElement('div');
            statusMessage.classList.add('status');
            statusMessage.textContent = message.loading;       
            form.append(statusMessage);        
            const request = new XMLHttpRequest();
            request.open('POST', 'server.php');
            //  request.setRequestHeader('Content-Type', 'multipart/form-data'); //Don't use when XMLHttpRequest + FormData
            const formData = new FormData(form);
            request.send(formData);
            request.addEventListener('load', ()=>{
                if (request.status === 200){
                    console.log(request.response);
                    statusMessage.textContent = message.success;
                    form.reset();
                    setTimeout(()=>{
                        statusMessage.remove();
                    },2000);
                } else {
                    statusMessage.textContent = message.failure;
                }
            });        
        });    
    }

    function postJsonData(form){
        form.addEventListener('submit',(e)=>{
            e.preventDefault();
            // const statusMessage = document.createElement('div');
            // statusMessage.classList.add('status');
            // statusMessage.textContent = message.loading;
            const statusMessage = document.createElement('img');
            statusMessage.src = message.loading;
            statusMessage.style.cssText = `
                display: block;
                margin: 0 auto;
            `;
            // form.append(statusMessage);   
            form.insertAdjacentElement('afterend',statusMessage);     
        
            const request = new XMLHttpRequest();
            request.open('POST', 'server.php');
            //  request.setRequestHeader('Content-Type', 'multipart/form-data'); //Don't use when XMLHttpRequest + FormData
            request.setRequestHeader('Content-Type', 'application/json'); //Don't use when XMLHttpRequest + FormData
            const formData = new FormData(form);
            const obj = {};
            formData.forEach(function(value,key){
                obj[key] = value;
            });
            const json = JSON.stringify(obj);
            request.send(json);
            request.addEventListener('load', ()=>{
                if (request.status === 200){
                    console.log(request.response);
                    showThanksModal(message.success);  
                    //statusMessage.textContent = message.success;
                    form.reset();
                    // setTimeout(()=>{
                         statusMessage.remove();
                    // },2000);
                } else {
                    //statusMessage.textContent = message.failure;
                    showThanksModal(message.failure);  
                }
            });        
        });    
    }

    function showThanksModal(message){
        const prevModal = document.querySelector('.modal__dialog');    
        prevModal.classList.add('hide');
        openModal();
        const thanksModal = document.createElement('div');
        thanksModal.classList.add('modal__dialog');
        thanksModal.innerHTML = `
            <div class="modal__content">
                <div data-modal_close class="modal__close">&times;</div>
                <div class="modal__title">${message}</div>
            </div>
        `
        modal.append(thanksModal);
        setTimeout(()=>{
            thanksModal.remove();
            prevModal.classList.add('show');
            prevModal.classList.remove('hide');
            closeModal();
        },4000);
    
    }

    fetch('https://jsonplaceholder.typicode.com/posts/1')
    .then(resolve => resolve.json())
    .then(json => console.log(json));
    
    fetch('https://jsonplaceholder.typicode.com/posts',{
        method: 'POST',
        body: JSON.stringify({name: "Oleg", pass: "}Pdiufs"}),
        headers: {
            "Content-type": "apliacation/json"
        }
    })
    .then(resolve => resolve.json())
    .then(json => console.log(json));

});


