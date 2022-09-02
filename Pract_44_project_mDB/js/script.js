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
//Testing Events on Menu
let menuItems = document.querySelectorAll('.promo__menu-item');
menuItems.forEach(item => {
    item.addEventListener('click', (e)=>{
        console.log(e.target);
    }, {once: true});
});
// advs.forEach(item => {
//     item.remove();
// })
const deleteAdv = (arr) => {
    arr.forEach(item => {
        item.remove();
    });
}
//#2 - change genre
genre.textContent = "Драма";
//#3 - change bg
promoBg.style.background = "url(./img/bg.jpg) top center/cover no-repeat";
//#4,5

const sortArr = (arr) => {
    arr.sort();
}

function getFilmsFromDB(films, parent) {
    parent.innerHTML = "";
    films.forEach((film, i) => {
        parent.innerHTML += `
            <li class="promo__interactive-item">${i+1}: ${film}
                <div class="delete"></div>
            </li>
        `;
    });
    parent.querySelectorAll('.delete').forEach((btn,i) =>{
        btn.addEventListener('click', ()=>{
            btn.parentElement.remove();
            movieDB.movies.splice(i,1);
        });
    });
}
//========================================================================
const   formAdd = document.querySelector(".add"),
        btnAdd = formAdd.querySelector("button"),        
        isFav = formAdd.querySelector("[type='checkbox']"),        
        addingInput = formAdd.querySelector(".adding__input");
// let isFav = () =>{
//      formAdd.querySelectorAll("input").forEach(elem => {
//     if (elem.type.toLowerCase() == 'checkbox') {return elem.checked; }
// })}
// const isFav = () => {
//     let val;
//     formAdd.querySelectorAll("input").forEach(elem => {
//         if (elem.type.toLowerCase() == 'checkbox') {
//         //console.log(elem.checked);
//         val = !!elem.checked;
//         //val = elem.checked == true ? true : false;
//     }
//     return val;
// })}
const addNewFilm = (filmName,movies) => {
    //if (filmName.length > 0) {
    if (filmName) {
        filmName.length < 21 ? movies.push(filmName) : movies.push(`${filmName.slice(0,21)}...`)
        // filmName = "";
        sortArr(movieDB.movies);        
    }
}

const submitForm = (e) => {
    e.preventDefault();
    addNewFilm(addingInput.value,movieDB.movies);    
    getFilmsFromDB(movieDB.movies, filmsBox);            
    if (isFav.checked) {console.log("Добавляем любимый фильм");}
    //addingInput.value = "";
    // formAdd.reset();
    e.target.reset();
    //console.log(movieDB.movies);
}    
//btnAdd.addEventListener('click', addFilm);

const delFilm = (e) =>{
    e.preventDefault();
    // console.log(e.currentTarget.parentNode.textContent);    
    // const index =  movieDB.movies.indexOf(e.currentTarget.parentElement.textContent);

    movieDB.movies.forEach((movie, i, array) => {
        console.log(`${movie.toLowerCase()} = ${e.currentTarget.parentElement.textContent.toLowerCase(0,21)}`);
        console.log(movie.toLowerCase().includes(e.currentTarget.parentElement.textContent.toLowerCase(0,21)));        
        if (movie.toLowerCase().includes(e.currentTarget.parentElement.textContent.slice(0,21).toLowerCase())) {
            array.splice(i,1);            
        }
    });
    // console.log(index);
    // if (index > -1) { // only splice array when item is found
    //     movieDB.movies.splice(index, 1); // 2nd parameter means remove one item only
    // }
    getFilmsFromDB(movieDB.movies, filmsBox); 
}
const btnDel = filmsBox.querySelectorAll('.delete');
btnDel.forEach(btn =>{
    btn.addEventListener('click', delFilm);
});

deleteAdv(advs);
sortArr(movieDB.movies);
getFilmsFromDB(movieDB.movies, filmsBox)
formAdd.addEventListener('submit',submitForm);





