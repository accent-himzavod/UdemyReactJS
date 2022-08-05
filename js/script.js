"use strict";

/* //Задача №1
let numberOfFilms;
numberOfFilms = prompt("Скільки фільмів ви продивилися?","");
//console.log(numberOfFilms);

//Задача №2

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

//Задача №3
let movieName = prompt("Назва фільму:");
let movieRate = prompt("Оцінка фільму:");

personalMovieDB.movies[movieName] = movieRate;

movieName = prompt("Назва фільму:");
movieRate = prompt("Оцінка фільму:");

personalMovieDB.movies[movieName] = movieRate;

console.log(personalMovieDB); */
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
console.log(thirdTask()) */


//=================

const lines = 5;
let result = '';
// Проверяется именно переменная result, формируйте строку в ней
for (let i = 0; i < lines; i++){
     
    for (let j = i; j < lines; j++) {
        result = result + ' '; 
    } 

    for (let f = 0; f < i * 2 + 1; f++) {
        result = result + '*'; 
    }    

    result = result + '\n'; 
}

console.log(result)

// Ріщення задачі
/* const lines = 5;
let result = '';

for (let i = 0; i <= lines; i++) {
    for (let j = 0; j < lines - i; j++) {
        result += " ";
    }
    for (let j = 0; j < 2 * i + 1; j++) {
        result += "*";
    }
    result += "\n";
}

console.log(result) */