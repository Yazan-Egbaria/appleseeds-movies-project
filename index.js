/* JavaScript Objects Exercise: Movie Rating App */
//Ex1
const movie = {
  title: "Inception",
  director: "Christopher Nolan",
  releaseYear: 2010,
  genres: ["Action", "Drama", "Adventure", "Sci-Fi", "Thriller"],
  ratings: [10, 9.5, 9.8, 8.7, 8.9, 9.0, 9.2],
};

function getAverageRating() {
  const ratingsArr = movie.ratings;
  const sum = ratingsArr.reduce((acc, num) => {
    return acc + num;
  });
  let avg = (sum / ratingsArr.length).toFixed(1);
  return avg;
}
console.log(getAverageRating());

//Ex2
movie.cast = [
  {
    name: "Leonardo DiCaprio",
    role: "Cobb",
  },
  {
    name: "Joseph Gordon-Levitt",
    role: "Arthur",
  },
  {
    name: "Eliot Page",
    role: "Ariadne",
  },
  {
    name: "Tom Hardy",
    role: "Eames",
  },
  {
    name: "Cillian Murphy",
    role: "Robert Fischer",
  },
];
console.log(movie.genres[1]);
console.log(movie.cast[1].name);

//Ex3
movie.releaseYear = 2011;
movie.ratings.push(9.4);
delete movie.director;
if (movie.ratings) {
  console.log(true);
} else {
  console.log(false);
}

//Ex4
const movies = [
  { title: "Inception", details: { duration: 148, rating: "PG-13" } },
  { title: "Interstellar", details: { duration: 169, rating: "PG-13" } },
];
console.log(movies[0].details.duration);

function avgDuration() {
  const durationArr = movies.map((movie) => movie.details.duration);
  const sum = durationArr.reduce((previousIndex, nextIndex) => {
    return previousIndex + nextIndex;
  });
  const avg = (sum / durationArr.length).toFixed(1);
  return avg;
}
console.log(avgDuration());

//Ex5
const movieOne = { name: "Batman", genres: "Action" };
const movieTwo = { name: "Avengers", genres: "Action" };
const fullMovies = { movieOne, movieTwo };
console.log(fullMovies);
Object.freeze(fullMovies);
console.log(Object.isSealed(fullMovies));
console.log(Object.isFrozen(fullMovies));

//Ex6
const movieDetails = {
  title: "Inception",
  director: "Christopher Nolan",
  releaseYear: 2010,
  ratings: [8, 9, 9.5, 8.5],
};

// function nameValue() {
//   for (let key of Object.keys(movieDetails)) {
//     console.log(`${key} - ${movieDetails[key]}`);
//   }
// }
// nameValue();

function nameValue() {
  for (let key in movieDetails) {
    console.log(`${key} - ${movieDetails[key]}`);
  }
}
nameValue();

//Ex7
const movieCollection = {
  Inception: 9,
  Interstellar: 8.5,
  "The Dark Knight": 9.5,
  Prestige: 5,
};
function increaseRating() {
  let arrOfObjects = Object.entries(movieCollection);
  for (let row of arrOfObjects) {
    for (let i = 0; i < row.length; i++) {
      if (typeof row[i] === "number" && row[i] < 7) {
        row[i]++;
      }
    }
  }
  return Object.fromEntries(arrOfObjects);
}
console.log(increaseRating());

//Ex8
const moviesFour = {
  1: { title: "Inception", year: 2010, rating: 9 },
  2: { title: "The Matrix", year: 1999, rating: 8.5 },
  3: { title: "Interstellar", year: 2014, rating: 8.6 },
};
function arrayOfMovies() {
  let newArr = Object.entries(moviesFour);
  let result = [];
  for (let row of newArr) {
    if (row[1].year > 2000) {
      row[1].isNewer = true;
      result.push(row[1]);
    }
  }
  return result;
}
console.log(arrayOfMovies());

//Ex9
const genreRatings = {
  action: [8, 9, 7, 10, 8.5],
  sciFi: [8.5, 8, 9, 9.5, 7.5],
  drama: [7, 7.5, 8, 8.5, 9],
};
function avgRatingsOfEachGenre() {
  const result = [];
  for (let genre of Object.keys(genreRatings)) {
    const ratings = genreRatings[genre];
    const sum = ratings.reduce((acc, rating) => acc + rating, 0);
    const average = sum / ratings.length;
    result.push(`${average.toFixed(1)} is the average of ${genre} ratings`);
  }
  return result;
}
console.log(avgRatingsOfEachGenre());

//Ex10
const movieAwards = {
  Inception: "Best Visual Effects",
  Interstellar: "Best Visual Effects",
  "The Dark Knight": "Best Supporting Actor",
  Prestige: "Best Cinematography",
};
function newObject() {
  const newObj = {};
  for (let [movie, award] of Object.entries(movieAwards)) {
    if (!newObj[award]) {
      newObj[award] = [];
    }
    if (movieAwards[movie] === award) {
      newObj[award].push(movie);
    }
  }
  return newObj;
}
console.log(newObject());
