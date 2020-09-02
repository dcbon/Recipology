import { createStore } from "redux"

const initialState = {
  favorites: []
}
const reducer = (state=initialState, action) => {
  switch(action.type) {
    case "ADD_FAV": 
      let newState = {
        ...state, favorites: state.favorites.concat(action.meal)
      }
      console.log(newState, '====newstate di store');
      return newState
    default:
      return state
  }
}

const store = createStore(reducer)

export default store
