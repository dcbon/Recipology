export function getMeals(query) {
  return async (dispatch, getState) => {
    try {
      const res = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`)
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

export function setSearch (input) {
  return async (dispatch, getState) => {
    try {
      dispatch({
        type: "SET_MEALS_SEARCH",
        payload: input
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

export function getCategories() {
  return async (dispatch, getState) => {
    try {
      const res = await fetch(`https://www.themealdb.com/api/json/v1/1/categories.php`)
      const data = await res.json()
      dispatch({
        type: "SET_CATEGORIES",
        payload: data.categories
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

export function filterCategory(query) {
  return async (dispatch, getState) => {
    try {
      const res = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${query}`)
      const data = await res.json()
      console.log(data, '===filter action');
      dispatch({
        type: "SET_CATEGORY",
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