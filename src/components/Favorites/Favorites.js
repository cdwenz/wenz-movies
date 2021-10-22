import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import './Favorites.css';
import {removeMovieFavorite} from "../../actions";

export class ConnectedList extends Component {

  render() {
    return (
      <div className="favoritos">
        <h2>Películas Favoritas</h2>
        <div className="fav">
          {
              this.props.favorites.map((movie,index) => <div className="movie-fav"><div key={movie.id}>
                  {index + 1} - <Link to={`/movie/${movie.id}`} style={{width: "500px", marginRight: "10px", textDecoration: "none"}}>{movie.title}</Link>
              </div>
                <button onClick={() => this.props.removeMovieFavorite(movie.id)}>Eliminar</button>
              </div>)
            }
        </div>
      </div>
    );
  }
}

function mapStateToProps(state){
  return {
        favorites: state.moviesFavourites
  }
}

export default connect(mapStateToProps, {removeMovieFavorite})(ConnectedList);
