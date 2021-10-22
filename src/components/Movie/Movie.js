import React from 'react';
import { connect } from 'react-redux';
import { getMovieDetail } from '../../actions/index';
import './Movie.css';

class Movie extends React.Component {
    componentDidMount() {
        console.log(this.props.match.params.id)
        this.props.getMovieDetail(this.props.match.params.id)
    }

// {this.props.match.params.id}


    render() {
        return (
            <div className="movie-detail">
                {this.props.detail?
                    (
                        <div className="maket">
                            <h1>{this.props.detail.Title}</h1>
                            <div className="plot">{this.props.detail.Plot}</div>
                            <div className="maketo">
                            <img src={this.props.detail.Poster} alt=""/>
                            <ul>
                                <li>Year: {this.props.detail.Year}</li>
                                <li>Genre: {this.props.detail.Genre}</li>
                                <li>Director: {this.props.detail.Director}</li>
                                <li>Actors: {this.props.detail.Actors}</li>
                                <li>Awards: {this.props.detail.Awards}</li>
                            </ul>
                            </div>
                        </div>
                    ):<h3>Cargando...</h3>
                }

            </div>
        );
    }
}
function mapStateToProps(state){
  return {
        detail: state.movieDetail
  }
}


export default connect(mapStateToProps, {getMovieDetail})(Movie);

// function Movie(){
//     let {id} useParams();
// }