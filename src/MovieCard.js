import React, { Component } from "react";

class MovieCard extends Component {
  render() {
    const entries = Object.entries(this.props.movies);
    console.log(entries);

    return <div></div>;
  }
}

export default MovieCard;
