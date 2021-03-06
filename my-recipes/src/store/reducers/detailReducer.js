const initialState = {
  loading: false,
  error: null,
  meal: []
}
const detailReducer = (state=initialState, action) => {
  switch(action.type) {
    case "SET_MEALS": 
      return { ...state, meal: action.payload }
    case "SET_MEALS_LOAD": 
      return { ...state, loading: action.payload }
    case "SET_MEALS_ERR": 
      return { ...state, error: action.payload }
    default:
      return state
  }
}

export default detailReducer
