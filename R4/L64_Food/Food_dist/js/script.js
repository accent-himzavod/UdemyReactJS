'use strict';
window.addEventListener('DOMContentLoaded',() => {
    const   tabsParent = document.querySelector('.tabheader__items'),
            tabs = tabsParent.querySelectorAll('.tabheader__item'),
            tabsContent = document.querySelectorAll('.tabcontent');
            
    
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
        if (e.target === modal) {
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
});