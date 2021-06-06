// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(movies) {
  const mapped = movies.map((directors) => {
    return directors.director;
  })
  return mapped;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(movies) {
  /* const newArray = movies.filter((directorName) =>{
    return directorName.director === "Steven Spielberg" && directorName.genre.includes("Drama") ;
  })
  return newArray.length;
  */

  const manyMovies = movies.filter(
    ({ director, genre }) =>
      genre.includes("Drama") && director === "Steven Spielberg").length;
  return manyMovies;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(arrAve) {
 if (arrAve.length === 0) return 0; 
 else{
   let total = arrAve.reduce((acc,movie) => {
     if(movie.score){
       const updatedAcc = acc + movie.score;
       return updatedAcc;
     }
     else{
       return acc;
     }
   }, 0);
   return Number((total / arrAve.length).toFixed(2));
 }
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(movies) {
  if (!movies.length){
    return 0;
  }
  else{
    let dramaMovies = movies.filter((movie) => movie.genre.includes('Drama'));
    return scoresAverage(dramaMovies);
  }

}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(movies) {
  const moviesCopy = movies.map((movie) => {
    return movie;
  });

  moviesCopy.sort(function(a,b){
    if (a.year > b.year){
      return 1;
    } else if (a.year < b.year){
      return -1;
    } else {
      if(a.title < b.title){
        return -1;
      } else {
        return 0;
      }
    }
  });
  return moviesCopy;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(movies) {
  const moviesCopy = movies.map((movie) =>{
    return movie;
  });

  const orderesMovies = moviesCopy.sort((a,b) => a.title.localeCompare(b.title)).map((movie) =>movie.title).slice(0,20);
  return orderesMovies;
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes() {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg() {}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    howManyMovies,
    scoresAverage,
    dramaMoviesScore,
    orderByYear,
    orderAlphabetically,
    turnHoursToMinutes,
    bestYearAvg,
  };
}
