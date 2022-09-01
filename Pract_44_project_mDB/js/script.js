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
      promoBg = document.querySelector(".promo__bg");
      

advs.forEach(item => {
    item.remove();
})

//#2 - change genre
genre.textContent = "Драма";
//#3 - change bg
promoBg.style.background = "url(./img/bg.jpg) top center/cover no-repeat";

//    background: url(../img/mars.webp) center center/cover no-repeat;