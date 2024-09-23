class Media {
  #title;
  #duration;
  #ratings;
  constructor(title, duration) {
    this.#title = title;
    this.#duration = duration;
    this.#ratings = [];
  }

  get title() {
    return `The name of the title is ${this.#title}`;
  }

  get duration() {
    return `The duration of ${this.#title} ${this.#duration}`;
  }

  addRating(rating) {
    this.#ratings.push(rating);
  }

  #calculateAverage() {
    if (this.#ratings.length === 0) return `No ratings yet`;
    const avg = this.#ratings.reduce((accumilator, currentRating) => {
      return (accumilator + currentRating) / this.#ratings.length;
    });
    return avg;
  }

  get calcAvg() {
    return this.#calculateAverage();
  }

  displayDetails() {
    return `Title: ${this.#title}
Duration: ${this.#duration}
Average Rating: ${this.calcAvg}`;
  }
}

const mediaOne = new Media("Inception", 128);
mediaOne.addRating(100);
mediaOne.addRating(100);
console.log(mediaOne.displayDetails());
