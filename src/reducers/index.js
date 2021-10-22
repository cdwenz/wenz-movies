import {GET_MOVIES, ADD_MOVIE_FAVORITE, REMOVE_MOVIE_FAVORITE, GET_MOVIE_DETAIL} from "../actions";

const initialState = {
  moviesFavourites: [],
  moviesLoaded: [],
  movieDetail: {}
};

export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_MOVIE_FAVORITE:
    if(state.moviesFavourites.find(e=>e.id===action.payload.id)){
      return state
    }else {
      return{
        ...state,
        moviesFavourites: [...state.moviesFavourites, action.payload]
      }}
    case GET_MOVIES:
        return {
          ...state,
          moviesLoaded: action.payload.Search
        }
    case REMOVE_MOVIE_FAVORITE:
      return{
        ...state,
        moviesFavourites: state.moviesFavourites.filter(p=>p.id !== action.id)
      }
    case GET_MOVIE_DETAIL:
      return {
        ...state,
        movieDetail: action.payload
      }
    default: return state;
  }
}

// { type: GET_MOVIE_DETAIL, payload: json }