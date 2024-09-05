// Movie Rating Check

const movieRating = 6;

if (movieRating > 7) {
  console.log("Highly rated movie");
} else {
  console.log("This movie has room for improvement");
}

// Movie Budget Range Check

const movieBudget = 70000000;

if (1000000 <= movieBudget && movieBudget <= 100000000) {
  console.log("Big-budget movie");
} else {
  console.log("Indie movie");
}

// Nested if-else for movie genre and audience

const movieGenre = "Horror";
const audienceAge = 18;

if (movieGenre === "Horror") {
  if (audienceAge >= 18) {
    console.log("The movie is suitable for these audience");
  } else {
    console.log("The movie is not suitable for these audience");
  }
} else {
  console.log("The movie is suitable for all audiences");
}

// Comparing Movie Duration

const firstMovieDuration = 120;
const secondMovieDuration = 90;

if (firstMovieDuration === secondMovieDuration) {
  console.log("Movies have the same duration");
} else {
  console.log("The first movie is longer");
}

// Check viewer age for movie content

const viewerAge = 16;
if (13 <= viewerAge && viewerAge <= 18) {
  console.log("Suitable for teens");
} else if (viewerAge > 18) {
  console.log("Suitable for adults");
} else {
  console.log("Suitable for kids");
}

// Movie Popularity score evalutaion with ternary operator

const popularityScore = 68;
let score;

score = popularityScore >= 80 ? "Popular movie" : "Less known movie";
console.log(score);

// Check number of awards (even or odd) with ternary operator

const numOfAwards = 1;
let evenOdd;

evenOdd =
  numOfAwards % 2 === 0 ? "Even number of awards" : "Odd number of awards";
console.log(evenOdd);

// Actor age group classification

const actorAge = 23;
let age;

age =
  actorAge < 14
    ? "Child actor"
    : actorAge >= 14 && actorAge <= 24
    ? "Young actor"
    : "Adult actor";
console.log(age);

// Access Control to a premiere event

const hasInvitation = true;

if (hasInvitation) {
  console.log("Welcome to the premiere");
} else {
  console.log("Please check your invitation");
}

// Movie screening duration category

const screeningDuration = 210;

if (screeningDuration < 40) {
  console.log("Short film");
} else if (screeningDuration >= 40 && screeningDuration <= 120) {
  console.log("Feature film");
} else {
  console.log("Epic length movie");
}

// Special movie screening on weekends

const dayOfWeek = "Thursday";

if (dayOfWeek === "Saturady" || dayOfWeek === "Sunday") {
  console.log("Special screening event!");
} else {
  console.log("Regular movie showtimes");
}

// Check movie release year
/* If the year is between 2001 and 2100, it's a 21st-century movie
If the year is outside this range, it's a 20th-century movie
*/

// Check movie genre and rating
/* If the genre is "Action" go to the next step
if the rating is 7 or higher the movie is a "must-watch"
If the genre is not "Action" or the rating is less than 7 "check reviews before watching"
*/

// Evaluate Movie ticket price
/* If the ticket price is less than or equal to $10 it's considered a discounted ticket
Otherwise it's a regular ticket price
*/

// Check move age restriction
/* A viewer can watch a movie if:
They are 18 or older
The movie is suitable for all ages
If neither of these conditions is met the viewer is restricted from watching the movie
*/

// Determine if movie is a sequel
/* A movie is considered a sequel if its title contains the number "2" or the word "part"
 */
