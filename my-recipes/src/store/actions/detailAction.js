export function getDetail(id) {
  return async (dispatch, getState) => {
    try {
      const res = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
      const data = await res.json()
      dispatch({
        type: "SET_MEALS",
        payload: data.meals
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

export function getLoading(data) {
  return async (dispatch, getState) => {
    try {
      dispatch({
        type: "SET_MEALS_LOAD",
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