// 1 - simple arrow function conversion
const getMovies = (movies) => movies.map((movie) => movie.title);

// 2 - control flow in arrow functions
const averageMovieRating = (rating) => {
  if (rating > 7) {
    return "Good";
  } else if (rating > 5) {
    return "Average";
  } else {
    return "Bad";
  }
};
console.log(averageMovieRating(2));

// 3 - arrow functions with multiple operations
const getTotalMovieLength = (movies) => {
  let totalLength = 0;
  for (let i = 0; i < movies.length; i++) {
    totalLength += movies[i].length;
  }
  return `Total movie length is ${totalLength} minutes`;
};
console.log(getTotalMovieLength(["The Dark Knight", "Batman"]));

// 4 - Arrow functions as callbacks
const sortedMovies = movies.sort((a, b) => b.averageRating - a.averageRating);

// 5 - implicit return with arrow functions
const getMovieTitles = (movies) => movies.map((movie) => movie.title);
