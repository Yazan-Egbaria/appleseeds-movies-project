// Movie Rating System

//Ex1 - creating the movie database
const movieDatabase = {
  movies: [],

  addMovie(title) {
    const newMovie = {
      title: title,
      ratings: [],
      averageRating: 0,
    };
    this.movies.push(newMovie);
  },

  removeMovie(title) {
    this.movies = this.movies.filter((movie) => movie.title !== title);
  },

  addRatings(title, ratings) {
    const movie = this.movies.find((movie) => movie.title === title);
    if (movie) movie.ratings.push(...ratings);
    this.calcAvgRatings(title);
  },

  removeRatings(title, ratings) {
    const movie = this.movies.find((movie) => movie.title === title);
    if (movie) {
      movie.ratings = movie.ratings.filter((r) => r !== ratings);
    }
    this.calcAvgRatings(title);
  },

  calcAvgRatings(title) {
    const movie = this.movies.find((movie) => movie.title === title);
    if (movie) {
      movie.averageRating =
        movie.ratings.reduce((acc, currentIndex) => acc + currentIndex) /
        movie.ratings.length;
    }
  },

  searchMovie(string) {
    this.movies = this.movies.filter((movie) =>
      movie.title.toLowerCase().includes(string.toLowerCase())
    );
  },

  sortMoviesByRating() {
    this.movies.sort((a, b) => {
      if (b.averageRating === a.averageRating) {
        return a.title.localeCompare(b.title);
      }
      return b.averageRating - a.averageRating;
    });
  },

  sortMoviesByTitle() {
    this.movies.sort((a, b) => a.title.localeCompare(b.title));
  },
};

movieDatabase.addMovie("Inception");
movieDatabase.addMovie("The Dark Knight");
movieDatabase.addMovie("Interstellar");
movieDatabase.addMovie("Zynx");
movieDatabase.addMovie("Avatar");
console.log(movieDatabase.movies);

movieDatabase.removeMovie("Inception");
console.log(movieDatabase.movies);

//Ex2 - adding and removing ratings
movieDatabase.addRatings("Interstellar", [9.9, 9.5, 9.3, 9.4, 9.1]);
movieDatabase.addRatings("The Dark Knight", [9.1, 8.5, 8.9, 8.7, 9.0]);
console.log(movieDatabase.movies);

movieDatabase.removeRatings("Interstellar", 9.4);
console.log(movieDatabase.movies);

//Ex3 - calculating average ratings
movieDatabase.calcAvgRatings("Interstellar");
movieDatabase.calcAvgRatings("The Dark Knight");
console.log(movieDatabase.movies);

// movieDatabase.removeRatings("The Dark Knight", 8.5);
// console.log(movieDatabase.movies);

//Ex4 - searching movies
// movieDatabase.searchMovie("ste");
// console.log(movieDatabase.movies);

//Ex5 - sorting movies
// movieDatabase.sortMoviesByRating();
// console.log(movieDatabase.movies);

// movieDatabase.sortMoviesByTitle();
// console.log(movieDatabase.movies);
