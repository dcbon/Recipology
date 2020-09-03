export function setFaves(fav) {
  return async (dispatch, getState) => {
    try {
      let double = false
      const state = await getState()
      const favorites = state.favoriteReducer.favorites
      // console.log(favorites, '===fav action');
      if (favorites) {
        favorites.forEach(el => {
          if (fav.idMeal === el.idMeal) double = true
        })
      }

      if (!double) {
        dispatch({
          type: "SET_FAVES",
          payload: fav
        })
      }
    }
    catch(err) {
      console.log(err);
      dispatch({
        type: "SET_FAVES_ERR",
        payload: err
      })
    }  
  }
}

export function getLoading(data) {
  return async (dispatch, getState) => {
    try {
      dispatch({
        type: "SET_FAVES_LOAD",
        payload: data
      })
    }
    catch(err) {
      console.log(err);
      dispatch({
        type: "SET_MEALS_ERR",
        payload: err
      })
    }  
  }
}