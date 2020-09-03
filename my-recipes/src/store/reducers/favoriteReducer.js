const initialState = {
  loading: false,
  error: null,
  favorites: []
}
const favoriteReducer
 = (state=initialState, action) => {
  switch(action.type) {
    case "SET_FAVES": 
      return { ...state, favorites: state.favorites.concat(action.payload) }
    case "SET_FAVES_LOAD": 
      return { ...state, loading: action.payload }
    case "SET_FAVES_ERR": 
      return { ...state, error: action.payload }
    default:
      return state
  }
}

export default favoriteReducer

