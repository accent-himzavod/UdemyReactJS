'use strict';

let personalMovieDB = {
	count: 0,
	movies: {},
	actors: {},
	genres: [],
	privat: false,
	start: function() {        
		personalMovieDB.count = +prompt("Скільки фільмів ви продивилися?","");
		while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count) ){
			personalMovieDB.count = prompt("Скільки фільмів ви продивилися?","");
		}
		return personalMovieDB.count;
	},
	showMyDB: function(hidden) {
		if (!hidden) {
			console.log(personalMovieDB);
		}
	},
	toggleVisibleMyDB: function() {
		personalMovieDB.privat = !personalMovieDB.privat;
	},
	rememberMyFilms: function() {
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
	},
	detectPersonalLevel: function() {
		if (personalMovieDB.count < 10){
			console.log('Мало');
		} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30 ){
			console.log('Класичний глядач');
		} else if (personalMovieDB.count >= 30) {
			console.log('Кіноман');
		} else {
			console.log('Помилка');
		}
	},
	writeMyGenres(){
		//=teacher
		// for (let i = 0; i < 3; i++) {
		//     personalMovieDB.genres[i] = prompt(`Ваш улюблений жанр під номером ${i + 1}`);
		//     if (personalMovieDB.genres[i] == '' || personalMovieDB.genres[i] == null) {
		//         i--;
		//     }
		// }        
		//=my
		for (let i = 0; i < 3; i++) {
			//const genres = prompt(`Ваш улюблений жанр під номером ${i + 1}`);
			personalMovieDB.genres[i] = prompt(`Ваш улюблений жанр під номером ${i + 1}`);
			while(personalMovieDB.genres[i] == '' || personalMovieDB.genres[i] == null){
				personalMovieDB.genres[i] = prompt(`Ваш улюблений жанр під номером ${i + 1}`);
			}
		}
		personalMovieDB.genres.forEach((genre, i) => {
			console.log(`Улюблений жанр № ${i+1} - це ${genre}`);
		});
	}
};

const movieDB = Object.create(personalMovieDB);

movieDB.start();
// movieDB.showMyDB(false);
// movieDB.rememberMyFilms();
movieDB.writeMyGenres();