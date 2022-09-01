/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};

//#1 - delete all promo ads
const promo = document.querySelector(".promo__adv"),
      advs = promo.querySelectorAll("img"),
      //advs = document.querySelectorAll(".promo__adv img"),
      genre = document.querySelector(".promo__genre"),
      promoBg = document.querySelector(".promo__bg"),
      filmsBox = document.querySelector(".promo__interactive-list");
      //films = filmsBox.querySelectorAll(".promo__interactive-item");
      

advs.forEach(item => {
    item.remove();
})

//#2 - change genre
genre.textContent = "Драма";
//#3 - change bg
promoBg.style.background = "url(./img/bg.jpg) top center/cover no-repeat";
//#4,5

filmsBox.innerHTML = "";

movieDB.movies.sort();
movieDB.movies.forEach((film, i) => {
    filmsBox.innerHTML += `
        <li class="promo__interactive-item">${i+1}: ${film}
            <div class="delete"></div>
        </li>
    `;
});
//Testing Events on Menu
let menuItems = document.querySelectorAll('.promo__menu-item');
menuItems.forEach(item => {
    item.addEventListener('click', (e)=>{
        console.log(e.target);
    }, {once: true});
});





