// Find the longest movie title
let longestTitleLength = 0;
let longestTitle = null;
const movieTitles = ["Inception", "The Dark Knight", "Interstellar"];
for (let i = 0; i < movieTitles.length; i++) {
  if (movieTitles[i].length > longestTitleLength) {
    longestTitleLength = movieTitles[i].length;
    longestTitle = movieTitles[i];
  }
}
console.log(longestTitleLength);
console.log(longestTitle);

// Calculate the average rating
let sum = 0;
let avg = null;
const movieRatings = [8.3, 7.5, 9.0, 8.7];
for (let i = 0; i < movieRatings.length; i++) {
  sum += movieRatings[i];
  avg = sum / movieRatings.length;
}
console.log(sum);
console.log(avg);

// Reverse the movie list
const movieTitlesTwo = ["Inception", "The Dark Knight", "Interstellar"];
let movieTitlesThree = [];
for (let i = movieTitlesTwo.length - 1; i >= 0; i--) {
  movieTitlesThree.push(movieTitlesTwo[i]);
}
console.log(movieTitlesThree);

// Increase movie ratings
const movieRatingsTwo = [8.3, 7.5, 9.0, 8.7];
for (let i = 0; i < movieRatingsTwo.length; i++) {
  movieRatingsTwo[i] += 0.5;
}
console.log(movieRatingsTwo);

// Filter movies by high ratings
const movieRatingsThree = [8.3, 7.5, 9.0, 8.7];
let newMovieRatings = [];
for (let i = 0; i < movieRatingsThree.length; i++) {
  if (movieRatingsThree[i] >= 8) {
    newMovieRatings.push(movieRatingsThree[i]);
  }
}
console.log(newMovieRatings);

// Count a specific rating's occurrence
const movieRatingsFour = [8.3, 8.7, 9.0, 8.7, 8.3];
const specificRating = 8.7;
let counter = 0;
for (let i = 0; i < movieRatingsFour.length; i++) {
  if (movieRatingsFour[i] === specificRating) {
    counter += 1;
  }
}
console.log(counter);

// Find movies in both watched and wish lists
const watchedList = ["Inception", "The Dark Knight"];
const wishList = ["Interstella", "Inception"];
let allList = [];
for (let i = 0; i < watchedList.length; i++) {
  for (let j = 0; j < wishList.length; j++) {
    if (watchedList[i] === wishList[j]) {
      allList.push(watchedList[i]);
    }
  }
}
console.log(allList);

// Check ratings againts a threshold
const movieRatingsFive = [8.3, 7.5, 9.0, 8.7];
const minRating = 8.0;
let threshold = true;
for (let i = 0; i < movieRatingsFive.length; i++) {
  if (movieRatingsFive[i] < minRating) {
    threshold = false;
  }
}
console.log(threshold);

// Identify the maximum rating
const movieRatingsSix = [8.3, 7.5, 9.0, 8.7];
let highestRating = 0;
for (i = 0; i < movieRatingsSix.length; i++) {
  if (movieRatingsSix[i] > highestRating) {
    highestRating = movieRatingsSix[i];
  }
}
console.log(highestRating);

// Find the highest rating
const movieRatingsSeven = [8.3, 7.5, 9.0, 8.7];
let highestRatingTwo = 0;
for (i = 0; i < movieRatingsSeven.length; i++) {
  if (movieRatingsSeven[i] > highestRatingTwo) {
    highestRatingTwo = movieRatingsSeven[i];
  }
}
console.log(highestRatingTwo);
