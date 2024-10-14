/* Loops Extra */
// 1 calculate average rating
function calcAvgRating(movies, movieName) {
  let avgRating;
  for (let movie of movies) {
    if (movie.name === movieName) {
      const movieRatings = [...movie.ratings];
      const sum = movieRatings.reduce((accumilator, currentIndex) => {
        return accumilator + currentIndex;
      }, 0);
      avgRating = (sum / movieRatings.length).toFixed(0);
    }
  }
  return Number(avgRating);
}
console.log(
  calcAvgRating(
    [
      { name: "Movie 1", ratings: [5, 6, 7] },
      { name: "Movie 2", ratings: [8, 9, 9] },
    ],
    "Movie 1"
  )
);

// 2 find highest rated movie
function highestRatedMovie(movies) {
  let currentRating = 0;
  let highestRatedMovie = null;
  for (let movie of movies) {
    const ratings = movie.ratings;
    const ratingsSum = ratings.reduce((acc, curr) => {
      return acc + curr;
    });
    const ratingAvg = Number((ratingsSum / ratings.length).toFixed(0));
    if (ratingAvg > currentRating) {
      currentRating = ratingAvg;
      highestRatedMovie = movie;
    }
  }
  return highestRatedMovie;
}
console.log(
  highestRatedMovie([
    { name: "Movie 1", ratings: [5, 6, 7] },
    { name: "Movie 2", ratings: [8, 9, 9] },
    { name: "Movie 3", ratings: [6, 8, 8] },
  ])
);

// 3 find most rated movie
function mostRatedMovie(movies) {
  let mostRated = 0;
  let movieMostRated;
  for (let movie of movies) {
    if (movie.ratings.length > mostRated) {
      mostRated = movie.ratings.length;
      movieMostRated = movie;
    }
  }
  return movieMostRated;
}
console.log(
  mostRatedMovie([
    { name: "Movie 1", ratings: [5, 6, 7, 6] },
    { name: "Movie 2", ratings: [8, 9, 9, 10, 5] },
    { name: "Movie 3", ratings: [6, 8, 8] },
  ])
);

// 4 remove lowest rating
function removeLowestRating(movies, movieName) {
  let movieRatings;
  for (let movie of movies) {
    if (movie.name === movieName) {
      movieRatings = movie.ratings.sort((a, b) => {
        return a - b;
      });
    }
  }
  movieRatings.shift();
  return movieRatings;
}
console.log(
  removeLowestRating(
    [
      { name: "Movie 1", ratings: [5, 6, 7] },
      { name: "Movie 2", ratings: [8, 9, 9] },
    ],
    "Movie 1"
  )
);

// 5 movie rating histogram
function histogram(movies, movieName) {
  let ratingsHistogram = {};
  for (let movie of movies) {
    if (movie.name === movieName) {
      for (let i = 0; i < movie.ratings.length; i++) {
        if (ratingsHistogram[movie.ratings[i]]) {
          ratingsHistogram[movie.ratings[i]]++;
        } else {
          ratingsHistogram[movie.ratings[i]] = 1;
        }
      }
    }
  }
  return ratingsHistogram;
}
console.log(
  histogram(
    [
      { name: "Movie 1", ratings: [5, 6, 7, 7] },
      { name: "Movie 2", ratings: [8, 9, 9] },
    ],
    "Movie 1"
  )
);
