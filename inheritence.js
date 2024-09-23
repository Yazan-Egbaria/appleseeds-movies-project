// 1 - The Media Superclass
class Media {
  #title;
  #duration;
  #ratings;
  constructor(title, duration) {
    this.#title = title;
    this.#duration = duration;
    this.#ratings = [];
  }

  get getTitle() {
    return this.#title;
  }

  get getDuration() {
    return this.#duration;
  }

  addRating(rating) {
    if (Array.isArray(rating)) {
      this.#ratings.push(...rating);
    } else {
      this.#ratings.push(rating);
    }
  }

  #calculateAverage() {
    if (this.#ratings.length === 0) return `No ratings yet`;
    const sum = this.#ratings.reduce((acc, curr) => acc + curr, 0);
    return sum / this.#ratings.length;
  }

  get getCalculateAverage() {
    return this.#calculateAverage();
  }

  displayDetails() {
    return `Title: ${this.getTitle}
    Duration: ${this.getDuration} minute
    Average Rating: ${this.getCalculateAverage}`;
  }
}

// 2 -The Movie and Series Subclasses
// The movie subclass
class Movie extends Media {
  #director;
  #genre;
  constructor(title, duration, director, genre) {
    super(title, duration);
    this.#director = director;
    this.#genre = genre;
  }
  get getDirector() {
    return this.#director;
  }
  get getGenre() {
    return this.#genre;
  }
  displayDetails() {
    return `${super.displayDetails()}
    Director: ${this.getDirector}
    Genre: ${this.getGenre}`;
  }
}

const movie1 = new Movie("Inception", 128, "Christopher Nolan", "Action");
movie1.addRating([9.8, 8.9, 9.4, 9.2]);
console.log(movie1.displayDetails());

// The series subclass
class Series extends Media {
  #seasons;
  constructor(title, duration, seasons) {
    super(title, duration);
    this.#seasons = seasons;
  }
  get getSeason() {
    return this.#seasons;
  }
  displayDetails() {
    return `${super.displayDetails()},
    Number of seasons: ${this.getSeason}`;
  }
}

const series1 = new Series("Gangs of London", 572, 2);
series1.addRating([9, 8.8, 9.2, 9.5]);
console.log(series1.displayDetails());

// 3 - The user class
class User {
  #username;
  #watchedMedia;
  constructor(username) {
    this.#username = username;
    this.#watchedMedia = [];
  }

  get username() {
    return this.#username;
  }

  addMedia(mediaObject) {
    if (Array.isArray(mediaObject)) {
      this.#watchedMedia.push(...mediaObject);
    } else {
      this.#watchedMedia.push(mediaObject);
    }
  }

  rateMedia(mediaObject, rating) {
    if (this.#watchedMedia.includes(mediaObject)) mediaObject.addRating(rating);
    return "The user can only rate watched media";
  }

  displayWatchedMedia() {
    return this.#watchedMedia
      .map((media) => media.displayDetails())
      .join("\n\n");
  }
}

const user1 = new User("John Doe");
user1.addMedia([movie1, series1]);
user1.rateMedia(movie1, 10);
user1.rateMedia(series1, 9.8);

console.log("Watched Media:");
console.log(user1.displayWatchedMedia());
