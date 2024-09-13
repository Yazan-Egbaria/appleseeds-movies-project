/* Impure Functions */

// 1 - Initialize movie ratings
let movieRatings = [];
function initializeRatings() {
  movieRatings = [];
}
initializeRatings();

// 2 - Add a movie rating
function addRating(movieTitle, rating) {
  if (typeof movieTitle === "string" && typeof rating === "number") {
    movieRatings.push([movieTitle, rating]);
  }
}
addRating("The Shawshank Redemption", 9.3);
addRating("Avengers", 8.7);

// 3 - Find a movie rating
function findRating(movieTitle) {
  let found = false;
  for (let i = 0; i < movieRatings.length; i++) {
    if (movieRatings[i][0] === movieTitle) {
      console.log(movieRatings[i][1]);
      found = true;
    }
  }
  if (!found) {
    console.log("Movie not found");
  }
}
findRating("The Shawshank Redemption");
findRating("Avengers");
findRating("Batman");

// 4 - Update a movie rating
function updateRating(movieTitle, newRating) {
  let found = false;
  for (let i = 0; i < movieRatings.length; i++) {
    if (movieRatings[i][0] === movieTitle) {
      movieRatings[i][1] = newRating;
      console.log(movieRatings[i][1]);
      found = true;
    }
  }
  if (!found) {
    console.log("Movie not found");
  }
}
updateRating("The Shawshank Redemption", 9.5);
updateRating("Avengers", 8.5);
updateRating("Batman", 9.5);

// 5 - Remove a movie rating
function removeRating(movieTitle) {
  let found = false;
  for (let i = 0; i < movieRatings.length; i++) {
    if (movieRatings[i][0] === movieTitle) {
      movieRatings.splice(i, 1);
      console.log(`${movieTitle} removed successfully.`);
      found = true;
    }
  }
  if (!found) {
    console.log("Movie not found");
  }
  console.log(movieRatings);
}
removeRating("The Shawshank Redemption");
removeRating("Avengers");
removeRating("Batman");

// 6 - List all movies and ratings
function listMovies() {
  for (let i = 0; i < movieRatings.length; i++) {
    const movie = movieRatings[i];
    console.log(`${movie[0]} - ${movie[1]}`);
  }
}
listMovies();

// 7 - Find the highest rated movie
function highestRatedMovie() {
  let rating = 0;
  let found = false;
  for (let i = 0; i < movieRatings.length; i++) {
    if (movieRatings[i][1] > rating) {
      rating = movieRatings[i][1];
      console.log(`${movieRatings[i][0]} - ${rating}`);
      found = true;
    }
  }
  if (!found) {
    console.log("Movie not found");
  }
}
highestRatedMovie();

/* Pure Functions */

// 1 - Average rating
function calculateAverageRating() {
  const numbers = [3, 4, 5, 3, 5];
  let avgSum = 0;
  for (let i = 0; i < numbers.length; i++) {
    avgSum += numbers[i];
  }
  console.log(avgSum);
  const avgRating = avgSum / numbers.length;
  console.log(avgRating);
}
calculateAverageRating();

// 2 - Filter movies by rating
function filterByRating() {
  const movieRatings = [[3, 4, 5, 2, 1, 5], 4];
  const nestedArr = movieRatings[0];
  const newArr = [];
  for (let i = 0; i < nestedArr.length; i++) {
    if (nestedArr[i] >= movieRatings[1]) {
      newArr.push(nestedArr[i]);
    }
  }
  console.log(newArr);
}
filterByRating();

// 3 - Highest rated movie
function findHighestRating() {
  const movieRatings = [3, 4, 5, 3, 5];
  let threshold = 0;
  for (let i = 0; i < movieRatings.length; i++) {
    if (movieRatings[i] >= threshold) {
      threshold = movieRatings[i];
    }
  }
  console.log(threshold);
}
findHighestRating();

// 4 - Ratings above threshold
function ratingsAboveThrshold() {
  const ratings = [[3, 4, 5, 2, 1, 5], 3];
  const threshold = ratings[1];
  const nestedArr = ratings[0];
  const newArr = [];
  for (let i = 0; i < nestedArr.length; i++) {
    if (nestedArr[i] > threshold) {
      newArr.push(nestedArr[i]);
    }
  }
  console.log(newArr);
}
ratingsAboveThrshold();

// 5 - Count movies in rating range
function countInRatingRange() {
  const ratings = [[3, 4, 5, 2, 1, 5], 4, 5];
  const nestedArr = ratings[0];
  const lowerBound = ratings[1];
  const upperBound = ratings[2];
  let count = 0;
  for (let i = 0; i < nestedArr.length; i++) {
    if (nestedArr[i] >= lowerBound && nestedArr[i] <= upperBound) {
      count++;
    }
  }
  console.log(count);
}
countInRatingRange();

// 6 - Filter Unique ratings
function uniqueRatings() {
  const movieRatings = [5, 3, 4, 3, 5, 4, 5];
  const newArr = [];
  for (let i = 0; i < movieRatings.length; i++) {
    if (!newArr.includes(movieRatings[i])) {
      newArr.push(movieRatings[i]);
    }
  }
  console.log(newArr);
}
uniqueRatings();

// 7 - Merge ratings
function mergeRatings() {
  const arr = [
    [5, 3, 4],
    [2, 3, 5],
  ];
  const indexZero = arr[0];
  const indexOne = arr[1];
  const newArr = [];
  for (let i = 0; i < indexZero.length; i++) {
    if (!newArr.includes(indexZero[i])) {
      newArr.push(indexZero[i]);
    }
  }
  for (let i = 0; i < indexOne.length; i++) {
    if (!newArr.includes(indexOne[i])) {
      newArr.push(indexOne[i]);
    }
  }
  console.log(newArr);
  return newArr;
}
mergeRatings();

// 8 - ratings differential
function ratingsDifferential(movieOne, movieTwo) {
  let movieOneSum = 0;
  for (let i = 0; i < movieOne.length; i++) {
    movieOneSum += movieOne[i];
  }
  let movieTwoSum = 0;
  for (let i = 0; i < movieTwo.length; i++) {
    movieTwoSum += movieTwo[i];
  }
  const movieOneAvg = movieOneSum / movieOne.length;
  const movieTwoAvg = movieTwoSum / movieTwo.length;
  const avgDiff = movieOneAvg - movieTwoAvg;
  console.log(avgDiff);
  return avgDiff;
}
ratingsDifferential([4, 4, 4, 4, 5], [3, 3, 3, 3]);

// 9 - filter ratings by multiple criteria
function filterRatingsByCriteria(arr, greaterThan, lessThan) {
  const newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > greaterThan && arr[i] < lessThan) {
      newArr.push(arr[i]);
    }
  }
  console.log(newArr);
}
filterRatingsByCriteria([1, 2, 3, 4, 5], 2, 5);
