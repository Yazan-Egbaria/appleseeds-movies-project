// 1 - count movies watched
function recursiveOne(moviesArr) {
  if (moviesArr.length === 0) return 0;
  return 1 + recursiveOne(moviesArr.slice(1));
}
console.log(recursiveOne(["Inception", "The Matrix", "Interstellar"]));

//2 - find movie by title
function findMovie(movies, title) {
  if (!Array.isArray(movies)) {
    return movies === title;
  }
  if (movies.length === 0) {
    return false;
  }
  return findMovie(movies[0], title) || findMovie(movies.slice(1), title);
}
console.log(
  findMovie(
    [
      ["Inception", "The Matrix"],
      ["Interstellar", "Dunkirk"],
    ],
    "Inception"
  )
);

//3 - total movie duration
const recursiveThree = (movies, i = 0) => {
  let total = 0;
  if (movies.length === 0) return 0;
  return (total = total + movies[i] + recursiveThree(movies.slice(1)));
};
console.log(recursiveThree([120, 150, 180]));

//4 - find longest movie
const recursiveFour = (movies, i = 0) => {
  if (movies.length === 0) return 0;
  return Math.max(movies[i], recursiveFour(movies.slice(1)));
};
console.log(recursiveFour([120, 150, 180, 15, 199, 205, 10]));

// 5 - calculate average movie rating
const recursiveFive = (ratings, i = 0, sum = 0) => {
  if (i === ratings.length) return sum / ratings.length;
  return recursiveFive(ratings, i + 1, sum + ratings[i]);
};
console.log(recursiveFive([4.5, 4.0, 5.0]));
