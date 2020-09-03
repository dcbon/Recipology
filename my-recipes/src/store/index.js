import { 
  createStore, 
  applyMiddleware,
  combineReducers
} from "redux"
import thunk from "redux-thunk"
import mealReducer from "./reducers/mealReducer"
import detailReducer from "./reducers/detailReducer"
import favoriteReducer from "./reducers/favoriteReducer"

const reducers = combineReducers({
  mealReducer,
  detailReducer,
  favoriteReducer
})

const store = createStore(reducers, applyMiddleware(thunk))

export default store
