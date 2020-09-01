import React, { useState } from "react"
import MealList from "./Meal"
import Header from "./Navbar"
import useFetcher from "../hooks/useFetcher"

const Recipe = () => {
  const [input, setInput] = useState("")
  const [searchQuery, setSearchQuery] = useState("")
  const {data: meals, loading, error} = useFetcher (`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchQuery || ""}`)

  const onChange = (evt) => {
    setInput(evt.target.value)
  } 

  const onSubmit = (evt) => {
    evt.preventDefault()
    setSearchQuery(input)
  }

  if(loading) return (
    <div className="container justify-content-center mt-5">
      <div className="row justify-content-center">
        <div className="col">
          <div className="spinner-border text-danger" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      </div>
      <h1 className="text-danger">Please Wait..</h1>
    </div>
  )

  if(error) return <>Something went wrong, please comeback later</>
  
  return (
    <div className="mt-4">
      <Header
        input={input}
        onChange={onChange}
        onSubmit={onSubmit}
      /> 
      <h1 className="py-5">Try Our New Recipe!</h1>
      <MealList 
        meals={meals}
      />
    </div>
  )
  
}

export default Recipe