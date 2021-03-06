import React, { useState, useEffect } from "react"
import MealList from "../components/MealList"
import { useSelector, useDispatch } from "react-redux"
import { getMeals, getLoading } from "../store/actions/mealAction"
import { useHistory } from "react-router-dom"
import { DebounceInput } from "react-debounce-input";
import { setSearch } from "../store/actions/mealAction"

const Home = () => {
  const dispatch = useDispatch()
  const history = useHistory()
  const { meals, loading, error, search } = useSelector((state) => state.mealReducer)
  const [input, setInput] = useState("")

  const onChange = (evt) => {
    setInput(evt.target.value)
    dispatch(setSearch(input))
  }
  
  useEffect(() => {
    dispatch(getLoading(true))
    dispatch(getMeals(search))
    dispatch(getLoading(false))
  }, [search, dispatch])

  const toCategory = () => {
    history.push(`/categories`)
  }
  
  if(loading) return (
    <div className="container-sm">
      <div className="container justify-content-center text-center">
        <div className="row justify-content-center mt-5">
          <div className="col">
            <div className="spinner-border text-danger" role="status">
              <span className="sr-only">Loading...</span>
            </div>
          </div>
        </div>
        <h1 className="text-danger">Please Wait..</h1>
      </div>
    </div>
  )

  if(error) return <>Something went wrong, please comeback later</>
  
  return (
    <div className="container-sm">
      <div className="justify-content-center text-center">
        <div 
          style=
          {{
            backgroundPosition: "center", 
            backgroundSize: "cover", 
            backgroundImage: "url(https://phototheque-enx.com/_data/i/upload/2019/08/30/20190830154206-c51bdd19-me.jpg)", 
            height: "300px"
          }} 
          className="py-5 my-5 text-dark"
        >
          <h2 className="" style={{letterSpacing: "2px"}}>WELCOME TO <span className="text-danger">RECIPOLOGY</span></h2>
          <p className="pt-3 ms">Here we try to share our vision about food quality <span><br></br></span> and giving out our best recipes that certainly unforgetable.</p>
          <button className="btn btn-danger" onClick={toCategory}>See Category</button>
        </div>
        <div className="my-5 row justify-content-center">
          <div className="col-lg-6">
            <DebounceInput
              data-testid="search-input"
              className="form-control mr-2"
              placeholder="Search for a Recipe" 
              minLength={1}
              debounceTimeout={200}
              onChange={onChange} 
              value={input} 
            />
          </div>
        </div>
        <MealList 
          meals={meals}
        />
      </div>
    </div>
  )
}

export default Home