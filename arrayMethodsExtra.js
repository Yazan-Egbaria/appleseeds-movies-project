// 1. group movies by genre
function groupMoviesByGenre(arr) {
  let genreObject = {};
  arr.forEach((movie) => {
    const { genre } = movie;
    if (!genreObject[genre]) {
      genreObject[genre] = [];
    }
    genreObject[genre].push(movie);
  });
  return genreObject;
}
console.log(
  groupMoviesByGenre([
    { title: "Inception", genre: "Action" },
    { title: "The Dark Knight", genre: "Action" },
    { title: "A Beautiful Mind", genre: "Drama" },
  ])
);

// 2. find top rated movie for each genre
function findTopRatedMovieGenre(arr) {
  let topRated = {};
  arr.forEach((movie) => {
    const { title, genre, rating } = movie;
    if (!topRated[genre] || rating > topRated[genre].rating) {
      topRated[genre] = { title, genre, rating };
    }
  });
  return topRated;
}
console.log(
  findTopRatedMovieGenre([
    { title: "Inception", genre: "Action", rating: 8.8 },
    { title: "The Dark Knight", genre: "Action", rating: 9.0 },
    { title: "A Beautiful Mind", genre: "Drama", rating: 8.2 },
  ])
);

// 3. count movies by genre
function countGenres(arr) {
  let genreCounter = {};
  arr.forEach((movie) => {
    const { genre } = movie;
    if (!genreCounter[genre]) genreCounter[genre] = 1;
    else if (genreCounter[genre]) genreCounter[genre]++;
  });
  return genreCounter;
}
console.log(
  countGenres([
    { title: "Inception", genre: "Action" },
    { title: "The Dark Knight", genre: "Action" },
    { title: "A Beautiful Mind", genre: "Drama" },
  ])
);

// 4. genre presence across years
const genrePresence = (arr, gen) => {
  let yearCounter = {};
  arr.forEach((movie) => {
    const { year, genre } = movie;
    if (genre === gen && !yearCounter[year]) {
      yearCounter[year] = 1;
    } else if (yearCounter[year]) {
      yearCounter[year]++;
    }
  });
  return yearCounter;
};
console.log(
  genrePresence(
    [
      { title: "Inception", genre: "Action", year: 2010 },
      { title: "The Dark Knight", genre: "Action", year: 2008 },
      { title: "A Beautiful Mind", genre: "Drama", year: 2001 },
    ],
    "Action"
  )
);

// 5.movies with ratings within range
function ratingsWithinRange(arr, min, max) {
  const newArr = [];
  arr.forEach((movie) => {
    const { title, rating } = movie;
    if (rating > min && rating <= max) {
      newArr.push(title);
    }
  });
  return newArr;
}
console.log(
  ratingsWithinRange(
    [
      { title: "Inception", rating: 8.8 },
      { title: "The Dark Knight", rating: 9.0 },
      { title: "A Beautiful Mind", rating: 8.2 },
    ],
    8.5,
    9.0
  )
);
