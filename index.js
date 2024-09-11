// Check if a movie is in the library
const movieLibrary = ["Inception", "The Matrix", "Interstellar"];
const movieToCheck = "Inception";
if (movieLibrary.includes(movieToCheck)) {
  console.log("The movie " + movieToCheck + " exists in the array");
} else {
  console.log("The movie " + movieToCheck + " does not exist in the array");
}

// Reverse movie release order
const releaseDates = ["1999", "2010", "2014"];
const reversedDates = releaseDates.reverse();
console.log(reversedDates);
console.log(releaseDates);

// Create a string of movie genres
const movieGenres = ["Sci-Fi", "Action", "Adventure"];
const movieGenresJoined = movieGenres.join(", ");
console.log(movieGenresJoined);

// Check for a specific genre
const movieGenresTwo = ["Sci-Fi", "Action", "Adventure"];
const genreToCheck = "Action";
if (movieGenresTwo.includes(genreToCheck)) {
  console.log("The genre " + genreToCheck + " exists in the array");
} else {
  console.log("The genre " + genreToCheck + " does not exist in the array");
}

// Find index of a specific movie
const movieTitles = ["Inception", "The Matrix", "Interstellar"];
const specificMovie = "Interstellar";
if (movieTitles.includes(specificMovie)) {
  console.log(
    `Interstellar found at index ${movieTitles.indexOf(specificMovie)}`
  );
} else {
  console.log("Movie not found");
}

// Remove the last movie
const upcomingReleases = ["Avatar", "Dune", "Tenet"];
upcomingReleases.pop();
console.log(upcomingReleases);

// Insert a movie at the beginning
const classicMovies = ["The Godfather", "Citizen Kane"];
const newMovie = "Casablanca";
classicMovies.unshift(newMovie);
console.log(classicMovies);

// Remove first movie and log it
const filmNoir = ["The Maltese Falcon", "Touch of Evil", "Double Indemnity"];
const deletedMovie = filmNoir.shift();
console.log(filmNoir);
console.log(deletedMovie);

// Concatenate two arrays of movie titles
const actionMovies = ["Die Hard", "John Wick"];
const comedyMovies = ["Superbad", "The Hangover"];
const allMovies = [...actionMovies, ...comedyMovies];
console.log(allMovies);

// Sort movies alphabetically
const movieTitlesTwo = ["Inception", "The Matrix", "Interstellar"];
const alphabetically = movieTitlesTwo.sort();
console.log(alphabetically);

// Create array from movie quotes
const quoteString =
  "I'll be back, May for force be with you, To infinity and beyond";
const newArray = quoteString.split(",");
console.log(newArray);

// Slice array to get top rated movies
const topMovies = [
  "The Shawshank Redemption",
  "The GodFather",
  "The Dark Knight",
];
const num = 2;
const newTopMovies = topMovies.slice(0, num);
console.log(newTopMovies);

// Empty the movie wishlist
const movieWishList = ["The Matrix 4", "Avatar 2", "Dune"];
movieWishList.splice(0, 3);
console.log(movieWishList);

// Add a new movie
const movies = ["Inception", "Interstellar"];
const newMovieTwo = "Tenet";
movies.push(newMovieTwo);
console.log(movies);

// Remove the first movie
const moviesTwo = ["Inception", "Interstellar", "Tenet"];
moviesTwo.shift();
console.log(moviesTwo);

// create a string of movie titles
const moviesThree = ["Inception", "Interstellar", "Tenet"];
const newMoviesThree = moviesThree.join(", ");
console.log(newMoviesThree);

// Find index of a specific movie
const moviesFour = ["Inception", "Interstellar", "Tenet"];
const movieToFind = "Interstellar";
if (moviesFour.includes(movieToFind)) {
  const indexNum = moviesFour.indexOf(movieToFind);
  console.log(indexNum);
}

// Reverse the order of the movies
const moviesFive = ["Inception", "Interstellar", "Tenet"];
moviesFive.reverse();
console.log(moviesFive);

// Sort movies release years
const releaseYears = [2001, 2023, 1998, 2014];
releaseYears.sort((a, b) => a - b);
console.log(releaseYears);

const releaseYearsTwo = [1, 100, 5, 12];
releaseYearsTwo.sort((a, b) => a - b);
console.log(releaseYearsTwo);
