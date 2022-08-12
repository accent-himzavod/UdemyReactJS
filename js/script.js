"use strict";

//Задача №1
let numberOfFilms;
//numberOfFilms = prompt("Скільки фільмів ви продивилися?","");
//console.log(numberOfFilms);

function start() {
    numberOfFilms = +prompt("Скільки фільмів ви продивилися?","");
    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms) ){
        numberOfFilms = prompt("Скільки фільмів ви продивилися?","");
    }
    return numberOfFilms;
}

start();

//Задача №2
let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        const   movieName = prompt("Назва фільму:", ''),
                movieRate = prompt("Оцінка фільму:", '');

        if (movieName !== '' && movieRate !== '' && movieName !== null && movieRate !== null && movieName.length < 50) {
            personalMovieDB.movies[movieName] = movieRate;
            console.log('done');
        } else {
            console.log('err');
            i--;
        }
    }
}
rememberMyFilms();

//Задача №3
function detectPersonalLevel() {
    if (personalMovieDB.count < 10){
        console.log('Мало');
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30 ){
        console.log('Класичний глядач');
    } else if (personalMovieDB.count >= 30) {
        console.log('Кіноман');
    } else {
        console.log('Помилка');
    }
}

 detectPersonalLevel();








//================================
/* function thirdTask() {
    // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
    const data = [5, 10, 'Shopping', 20, 'Homework'];
    const result = [];

    // Пишем решение вот тут
    for (let i = data.length; i > 0; i--) {
        result[result.length] = data[data.length - 1]; 
    }
    
    // Не трогаем
    return result;
} */

// Место для третьей задачи
/* function thirdTask() {
    // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
    const data = [5, 10, 'Shopping', 20, 'Homework'];
    const result = [];

    // Пишем решение вот тут
    for (let i = 1; i <= data.length; i++) {
        result[result.length] = data[data.length - i]; 
    }
    
    // Не трогаем
    return result;
}
console.log(thirdTask())*/
