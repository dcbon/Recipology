const initialState = {
  loading: false,
  error: null,
  meals: [],
  categories: [],
  category: [],
  search: ""
}
const mealReducer = (state=initialState, action) => {
  switch(action.type) {
    case "SET_MEALS": 
      return { ...state, meals: action.payload }
    case "SET_CATEGORIES": 
      return { ...state, categories: action.payload }
    case "SET_CATEGORY": 
      return { ...state, category: action.payload }
    case "SET_MEALS_LOAD": 
      return { ...state, loading: action.payload }
    case "SET_MEALS_ERR": 
      return { ...state, error: action.payload }
    case "SET_MEALS_SEARCH": 
      return { ...state, search: action.payload }
    default:
      return state
  }
}

export default mealReducer
