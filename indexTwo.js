// movie rating system - array methods

const movies = [
  {
    title: "The Shawshank Redemption",
    rating: 9.3,
    votes: 2337890,
    genre: ["Drama"],
    year: 1994,
  },
  {
    title: "The Godfather",
    rating: 9.2,
    votes: 1603867,
    genre: ["Crime", "Drama"],
    year: 1972,
  },
  {
    title: "The Godfather: Part II",
    rating: 9.0,
    votes: 1123155,
    genre: ["Crime", "Drama"],
    year: 1974,
  },
  {
    title: "The Dark Knight",
    rating: 9.0,
    votes: 2273490,
    genre: ["Action", "Crime", "Drama"],
    year: 2008,
  },
  {
    title: "12 Angry Men",
    rating: 9.0,
    votes: 686888,
    genre: ["Crime", "Drama"],
    year: 1957,
  },
];

// 1 - display movie titles
const movieTitles = movies.map((movie) => movie.title);
console.log(movieTitles);

// 2 - highly rated movies
function movieRatings(num) {
  let moviesNewArr = [];
  return (moviesNewArr = movies
    .filter((movie) => movie.rating >= num)
    .map((movie) => movie.title));
}
console.log(movieRatings(9.1));

// 3 - total votes count
const movieVotes = movies
  .map((movie) => movie.votes)
  .reduce((acc, curr) => acc + curr);
console.log(movieVotes);

// 4 - combine movie titles and ratings
const movieAndRatings = movies.map(
  (movie) => `${movie.title} - ${movie.rating}`
);
console.log(movieAndRatings);

// // 5 - update movie ratings
function newMovieRatings(title, rating) {
  const updatedArr = movies.map((movie) => {
    if (movie.title === title) {
      return { ...movie, rating: rating };
    }
    return movie;
  });
  return updatedArr;
}
console.log(newMovieRatings("The Godfather", 9.5));

// 6 - genre filter
const genreString = (genre) => {
  const genreMovies = movies
    .filter((movie) => movie.genre.includes(genre))
    .map((movie) => movie.title);
  return genreMovies;
};
console.log(genreString("Action"));

// 7 - yearly movie filter
const yearlyMovieFilter = (year) => {
  const yearlyMovie = movies
    .filter((movie) => movie.year > year)
    .map((movie) => movie.title);
  return yearlyMovie;
};
console.log(yearlyMovieFilter(1972));

// 8 - average movie rating
const sumRatings = movies
  .map((movie) => movie.rating)
  .reduce((acc, current) => acc + current, 0);
const avgRatings = sumRatings / movies.length;
console.log(avgRatings);

// 9 - sort movies by votes
const moviesSorted = movies
  .map((movie) => ({ title: movie.title, votes: movie.votes }))
  .sort((a, b) => {
    b.votes - a.votes;
  })
  .map((movie) => movie.title);
console.log(moviesSorted);
