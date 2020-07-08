import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import MovieCard from "./MovieCard";

/*
Display a list of movies where each movie contains a list of users that favorited it.

For detailed instructions, refer to instructions.md.
*/

const profiles = [
  {
    id: 1,
    userID: "1",
    favoriteMovieID: "1",
  },
  {
    id: 2,
    userID: "2",
    favoriteMovieID: "1",
  },
  {
    id: 3,
    userID: "4",
    favoriteMovieID: "5",
  },
  {
    id: 4,
    userID: "5",
    favoriteMovieID: "2",
  },
  {
    id: 5,
    userID: "3",
    favoriteMovieID: "5",
  },
  {
    id: 6,
    userID: "6",
    favoriteMovieID: "4",
  },
];

const users = {
  1: {
    id: 1,
    name: "Jane Jones",
    userName: "coder",
  },
  2: {
    id: 2,
    name: "Matthew Johnson",
    userName: "mpage",
  },
  3: {
    id: 3,
    name: "Autumn Green",
    userName: "user123",
  },
  4: {
    id: 3,
    name: "John Doe",
    userName: "user123",
  },
  5: {
    id: 5,
    name: "Lauren Carlson",
    userName: "user123",
  },
  6: {
    id: 6,
    name: "Nicholas Lain",
    userName: "user123",
  },
};

const movies = {
  1: {
    id: 1,
    name: "Planet Earth",
  },
  2: {
    id: 2,
    name: "Selma",
  },
  3: {
    id: 3,
    name: "Million Dollar Baby",
  },
  4: {
    id: 4,
    name: "Forrest Gump",
  },
  5: {
    id: 5,
    name: "Get Out",
  },
};

class App extends Component {
  render() {
    const entries = Object.entries(movies);
    console.log(entries);
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
        <ul>
          {entries.map((entry) => (
            <li key={entry[1].id}>
              <h2>{entry[1].name}</h2>
              <p>
                {profiles.filter(
                  (profile) => profile.favoriteMovieID == entry[1].id
                ).length > 0
                  ? "Liked By:"
                  : "None of the current users liked this movie"}
              </p>
              <ul>
                {profiles
                  .filter((profile) => profile.favoriteMovieID == entry[1].id)
                  .map((profile) => (
                    <li key={profile.id}>{users[profile.userID].name}</li>
                  ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
