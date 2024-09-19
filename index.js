// Movie Class
class Movie {
  constructor(title, duration, ticketPrice) {
    (this.title = title),
      (this.duration = duration),
      (this.ticketPrice = ticketPrice);
  }

  getInfo() {
    return `Title: ${this.title}, Duration: ${this.duration} minutes, Ticket Price: $${this.ticketPrice}`;
  }

  calculateRevenue(seatsBooked) {
    const revenue = this.ticketPrice * seatsBooked;
    return `$${revenue}`;
  }

  updateTicketPrice(newPrice) {
    this.ticketPrice = newPrice;
    return `Ticket price has been updated to ${this.ticketPrice}`;
  }
}

// Seat class
class Seat {
  constructor(seatNumber, row) {
    this.seatNumber = seatNumber;
    this.row = row;
    this.status = "available";
  }

  isOccupied() {
    return this.status === "booked";
  }

  book() {
    if (this.status === "available") return this.status === "booked";
    return "Seat is already booked";
  }

  changeSeatStatus(status) {
    if (status === "available" || status === "booked") {
      this.status = status;
    }
  }
}

// Revenue Class
class RevenueCalculator {
  constructor(movieList) {
    this.movieList = movieList;
  }

  calculateTotalRevenue() {
    return this.movieList.reduce(
      (total, movie) => total + movie.calculateRevenue(),
      0
    );
  }

  calculateMovieRevenue(movieTitle) {
    const movie = this.movieList.find((m) => m.title === movieTitle);
    if (movie) {
      return movie.calculateRevenue(movie.seatsBooked);
    } else {
      throw new Error("Movie not found");
    }
  }

  addMovieRevenue(movie) {
    this.movieList.push(movie);
  }
}

// MovieTheater Class
class MovieTheater {
  constructor() {
    this.listOfMovies = [];
    this.numberOfSeats = [];
  }

  addMovies(movie) {
    this.listOfMovies.push(movie);
  }

  removeMovie(movieTitle) {
    this.listOfMovies = this.listOfMovies.filter(
      (movie) => movie.title !== movieTitle
    );
  }

  calculateRevenue() {
    const totalRevenue = this.listOfMovies.reduce((accumilator, movie) => {
      return accumilator + movie.calculateRevenue();
    }, 0);
    return totalRevenue;
  }

  listMovies() {
    return this.listOfMovies.map((movie) => movie.getInfo());
  }

  findMovieByTitle(movieTitle) {
    const uniqueMovie = this.listOfMovies.find(
      (movie) => movie.title === movieTitle
    );
    if (uniqueMovie) return uniqueMovie.getInfo();
    return `The movie ${movieTitle} was not found`;
  }
}

const movieOne = new Movie("Inception", 148, 15);
const movieTwo = new Movie("The Dark Knight", 128, 20);
const movieThree = new Movie("Interstellar", 144, 18);
const movieFour = new Movie("Avengers", 136, 25);

console.log(movieOne);
console.log(movieOne.calculateRevenue(80));
console.log(movieOne.updateTicketPrice(45));
console.log(movieOne.calculateRevenue(80));
console.log(movieOne);

const yesPlanet = new MovieTheater(500);
yesPlanet.addMovies(movieOne);
yesPlanet.addMovies(movieTwo);
yesPlanet.addMovies(movieThree);
yesPlanet.addMovies(movieFour);
console.log(yesPlanet);

yesPlanet.removeMovie("The Dark Knight");
console.log(yesPlanet);

console.log(yesPlanet.listMovies());
console.log(yesPlanet.findMovieByTitle("Avengers"));
