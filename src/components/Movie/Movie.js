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
                        <div>
                            <h1>{this.props.detail.Title}</h1>
                            <h5>{this.props.detail.Year}</h5>
                            <h5>{this.props.detail.Genre}</h5>
                            <img src={this.props.detail.Poster} alt=""/>
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