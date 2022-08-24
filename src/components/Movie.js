import { Component } from "react";
class Movie extends Component {
  render() {
    let movieId = this.props.match.params.movieID;

    let currentMovie = this.props.movies.find((e) => e.id == movieId);
    console.log(currentMovie);

    return (
      <div className="movieDetiles">
        <img className="Imagem" src={currentMovie.img}></img>
        <h1>{currentMovie.title}</h1>
        <p>{currentMovie.descrShort}</p>
      </div>
    );
  }
}

export default Movie;
