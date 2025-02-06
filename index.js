//modules imported
const express = require("express");
const app = express();
const morgan = require("morgan");
const fs = require("fs");
const path = require("path");

//global variables
//setting up txt file to connect with the morgan logger
const accessLogStream = fs.createWriteStream(path.join(__dirname, "log.txt"), {
  flags: "a",
});
//movie data
const top10Movies = [
  {
    name: "The Dark Knight",
    "release date": "July 18, 2008",
    genres: ["action", "drama", "crime", "thriller", "superhero"],
    "top billed castors": [
      "Christian Bale",
      "Heath Ledger",
      "Aaron Eckhart",
      "Michael Caine",
      "Maggie Gyllenhall",
      "Gary Oldman",
      "Morgan Freeman",
      "Monique Gabriela Curnen",
      "Ron Dean",
    ],
    director: "Christopher Nolan",
  },
  {
    name: "The Lord of the Rings: The Fellowship of the Ring",
    "release date": "December 19, 2001",
    genres: ["action", "adventure", "fantasy"],
    "top billed castors": [
      "Elijah Wood",
      "Ian McKellen",
      "Viggo Mortensen",
      "Sean Astin",
      "Ian Holm",
      "Liv Tyler",
      "Christopher Lee",
      "Sean Bean",
      "Billy Boyd",
    ],
    director: "Peter Jackson",
  },
  {
    name: "Inception",
    "release date": "July 16, 2010",
    genres: ["action", "adventure", "science fiction"],
    "top billed castors": [
      "Leonardo DiCaprio",
      "Joseph Gordon-Levitt",
      "Ken Watanabe",
      "Tom Hardy",
      "Elliot Page",
      "Dileep Rao",
      "Tom Berenger",
      "Marion Cotillard",
    ],
    director: "Christopher Nolan",
  },
  {
    name: "Warrior",
    "release date": "September 9, 2011",
    genres: ["action", "drama"],
    "top billed castors": [
      "Joel Edgerton",
      "Tom Hardy",
      "Nick Nolte",
      "Jennifer Morrison",
      "Frank Grillo",
      "Kevin Dunn",
      "Maximiliano Hernández",
      "Bryan Callen",
      "Sam Sheridan",
    ],
    director: "Gavin O'Connor",
  },
  {
    name: "Never Back Down",
    "release date": "March 4, 2008",
    genres: ["action", "drama"],
    "top billed castors": [
      "Sean Faris",
      "Amber Heard",
      "Cam Gigandet",
      "Djimon Hounsou",
      "Evan Peters",
      "Leslie Hope",
      "Wyatt Smith",
      "Neil Brown Jr.",
      "Lauren Leech",
    ],
    director: "Jeff Wadlow",
  },
  {
    name: "Rocky",
    "release date": "November 20, 1976",
    genres: ["drama"],
    "top billed castors": [
      "Sylvester Stallone",
      "Talia Shire",
      "Burt Young",
      "Carl Weathers",
      "Burgess Meredith",
      "Thayer David",
      "Joe Spinell",
      "Jimmy Gambina",
      "Bill Baldwin",
    ],
    director: "John G. Avildsen",
  },
  {
    name: "Ong-Bak",
    "release date": "October 17, 2004",
    genres: ["action", "thriller", "crime", "adventure"],
    "top billed castors": [
      "Tony Jaa",
      "Petchtai Wongkamlao",
      "Patrarin Punyanutatam",
      "Suchao Pongwilai",
      "Choomporn Theppitak",
      "Cheathavuth Watcharakhun",
      "Wannakit Sirioput",
      "Rungrawee Barijindakul",
      "Chatthapong Phantana-Angkul",
    ],
    director: "Prachya Pinkaew",
  },
  {
    name: "The Avengers",
    "release date": "May 04, 2012",
    genres: ["action", "science fiction", "adventure"],
    "top billed castors": [
      "Robert Downey Jr.",
      "Chris Evans",
      "Mark Ruffalo",
      "Chris Hemsworth",
      "Scarlett Johansson",
      "Jeremy Renner",
      "Tom Hiddleston",
      "Clark Gregg",
      "Cobie Smulders",
    ],
    director: "Joss Whedon",
  },
  {
    name: "Pirates of the Caribbean: The Curse of the Black Pearl",
    "release date": "July 9, 2003",
    genres: ["action", "fantasy", "adventure"],
    "top billed castors": [
      "Johnny Depp",
      "Orlando Bloom",
      "Keira Knightley",
      "Geoffrey Rush",
      "Jack Davenport",
      "Jonathan Pryce",
      "Lee Arenberg",
      "Mackenzie Crook",
      "Damian O'Hare",
    ],
    director: "Gore Verbinski",
  },
  {
    name: "Transformers",
    "release date": "July 2, 2007",
    genres: ["action", "science fiction", "adventure"],
    "top billed castors": [
      "Shia LaBeouf",
      "Megan Fox",
      "Mark Ryan",
      "Peter Cullen",
      "Hugo Weaving",
      "Josh Duhamel",
      "Tyrese Gibson",
      "Charlie Adler",
      "Rachael Taylor",
    ],
    director: "Michael Bay",
  },
];

//setting up the morgan logger
app.use(morgan("combined", { stream: accessLogStream }));

//routes
app.get("/movies", (req, res) => {
  res.json(top10Movies);
});

app.get("/", (req, res) => {
  res.send("you reached the home page");
});

//getting the documentation file and all static files in public folder
app.use(express.static("public"));

//error handling
app.use((err, req, res, next) => {
  console.log(err.stack);
  res.status(500).send("there's a bug somewhere");
});

//setting the port to host the server on
app.listen(5800, () => {
  console.log("this server is running on port 5800");
});
