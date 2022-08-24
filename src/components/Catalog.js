import { Component } from "react";
import { Link } from "react-router-dom";
class Catalog extends Component {
  rentMovie = (e) => {
    this.props.rentMovie(e);
  };
  filterMovies = (string) => {
    let JSX = this.props.movies.map((e) => {
      if (e.title.toLowerCase().includes(string)) {
        return (
          <div>
            {e.isRented ? (
              <button
                className="actions"
                onClick={(event) => {
                  this.rentMovie(e.id);
                }}
              >
                -
              </button>
            ) : (
              <button
                onClick={(event) => {
                  this.rentMovie(e.id);
                }}
                className="actions"
              >
                +
              </button>
            )}
            <Link to={"/movies/" + e.id}>
              <img className="Image" src={e.img}></img>
            </Link>
          </div>
        );
      }
    });

    return JSX;
  };
  printRented = (movie) => {};
  render() {
    let movie = this.props.movies;
    return (
      <div>
        <p>Rented Movies</p>
        <div className="movieDiv">
          {this.props.movies.map((movie) => {
            if (movie.isRented) {
              return (
                <div>
                  <button
                    className="actions"
                    onClick={(event) => {
                      this.rentMovie(movie.id);
                    }}
                  >
                    -
                  </button>
                  <Link to={"/movies/" + movie.id}>
                    <img className="Image" src={movie.img}></img>
                  </Link>
                </div>
              );
            }
          })}
        </div>
        <hr></hr>
        <hr></hr>
        <div className="movieDiv">
          <input
            type="text"
            onChange={this.props.handleSearch}
            value={this.props.textSearch}
          ></input>
          {this.filterMovies(this.props.textSearch)}
        </div>
      </div>
    );
  }
}

export default Catalog;
