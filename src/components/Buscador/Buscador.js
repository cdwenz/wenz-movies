import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import './Buscador.css';
import {getMovies, addMovieFavorite} from "../../actions";


export class Buscador extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: ""
    };
  }
  handleChange(event) {
    this.setState({ title: event.target.value });
  }
  handleSubmit(event) {
    event.preventDefault();
    this.props.getMovies(this.state.title);
  }

  render() {
    const { title } = this.state;
    return (
      <div>
        <h2>Buscador</h2>
        <form className="form-container">
          <div>
            <label className="label" htmlFor="title">Película: </label>
            <input
              type="text"
              id="title"
              autoComplete="off"
              value={title}
              onChange={(e) => this.handleChange(e)}
            />
          </div>
          <button onClick={(e) => this.handleSubmit(e)}>BUSCAR</button>
        </form>
        {this.props.movies === undefined?(<h1>ingresar pelicula..</h1>):(

          <div className="movies">
            {
              this.props.movies.map((movie,i) => <div key={movie.imdbID + i} className="movie">
                <Link to={`/movie/${movie.imdbID}`} style={{textDecoration: 'none'}}>{movie.Title}</Link>
                <img src={movie.Poster} alt=""/>
                <button onClick={() => this.props.addMovieFavorite({title: movie.Title, id: movie.imdbID})}>Fav</button>
              </div>)
            }
          </div>)
        }
      </div>
    );
  }
}


// function Buscador(){
//   let [title, setTitle] = React.useState("")
//
//   function handleChange(event){
//     setTitle(event.target.value)
//   }
//   ...
// }


function mapStateToProps(state){
  return {
        movies: state.moviesLoaded
  }
}

// function mapDispatchToProps(dispatch) {
//   return {
//     addMovieFavorite: movie => dispatch(addMovieFavorite(movie)),
//     getMovies: title => dispatch(getMovies(title))
//     // getMovieDetail: detail => dispatch(getMovieDetail(detail)),
//     // removeMovieFavorite: id => dispatch(removeMovieFavorite(id))
//   };
// }

export default connect(mapStateToProps, {getMovies, addMovieFavorite})(Buscador);

// export default Buscador;
