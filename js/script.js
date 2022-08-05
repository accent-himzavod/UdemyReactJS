//

//Задача №1
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

console.log(personalMovieDB);