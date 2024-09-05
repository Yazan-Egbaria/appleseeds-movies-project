// Movie screening days

let dayOfWeek = 1;

switch (dayOfWeek) {
  case 1:
    console.log("Spider-Man");
    break;
  case 2:
    console.log("Last Of Us");
    break;
  case 3:
    console.log("Uncharted");
    break;
  case 4:
    console.log("Batman");
    break;
  case 5:
    console.log("Maze Runners");
    break;
  case 6:
    console.log("Magic Boy");
    break;
  case 7:
    console.log("Interstellar");
    break;
}

// Movie theme color settings

let themeColor = "Light";

switch (themeColor) {
  case "Light":
    console.log("Light theme applied");
    break;
  case "Dark":
    console.log("Light theme applied");
    break;
  case "Night":
    console.log("Light theme applied");
    break;
  default:
    console.log("Unsopported color theme");
}

// Notification status for movie releases

let notificationStatus = "new";

switch (notificationStatus) {
  case "new":
    console.log("You have new movie notifications");
    break;
  case "unread":
    console.log("You have unread movie notifications");
    break;
  case "unopened":
    console.log("You have unopened movie notifications");
    break;
  default:
    console.log("Nothing new");
}

// Movie rating classification

let movieRating = "PG-13";

switch (movieRating) {
  case "G":
    console.log("Movie rating G");
    break;
  case "PG":
    console.log("Movie rating PG");
    break;
  case "PG-13":
    console.log("Movie rating PG-13");
    break;
  case "R":
    console.log("Movie rating R");
    break;
  case "NC-17":
    console.log("Movie rating NC-17");
    break;
  default:
    console.log("Invalid movie rating.");
}

// Audience score ranges

let audienceScore = 90;

switch (true) {
  case audienceScore >= 90:
    console.log("Must Watch!");
    break;
  case audienceScore >= 75 && audienceScore <= 89:
    console.log("Recommended");
    break;
  case audienceScore >= 60 && audienceScore <= 74:
    console.log("Mixed Reviews");
    break;
  case audienceScore < 60:
    console.log("Skip it");
    break;
}

// User Input Handling

let userInput = 10;

switch (typeof userInput) {
  case "number":
    console.log("The value is a number");
    break;
  case "string":
    console.log("The value is a string");
    break;
  case "boolean":
    console.log("The value is a boolean");
    break;
}

// Movie release quarter

let releaseMonth = 7;

switch (releaseMonth) {
  case 1 || 2 || 3:
    console.log("Q1");
    break;
  case 4 || 5 || 6:
    console.log("Q2");
    break;
  case 7 || 8 || 9:
    console.log("Q3");
    break;
  case 10 || 11 || 12:
    console.log("Q4");
    break;
}
