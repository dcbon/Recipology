import { createStore } from "redux"

const initialState = {
  favorites: [],
  searchQuery: ""
}
const reducer = (state=initialState, action) => {
  switch(action.type) {
    case "ADD_FAV": 
      let fave = {
        ...state, favorites: state.favorites.concat(action.meal)
      }
      console.log(fave, '====fave di store');
      return fave
    case "SET_SEARCH": 
      let search = {
        ...state, searchQuery: action.payload
      }
      console.log(search, '====search di store search');
      return search
    default:
      return state
  }
}

const store = createStore(reducer)

export default store
