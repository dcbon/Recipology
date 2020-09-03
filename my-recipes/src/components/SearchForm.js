import React, { useState } from "react"
import { useHistory } from "react-router-dom"
import { Button } from "react-bootstrap"
import { useDispatch } from "react-redux"
import { DebounceInput } from "react-debounce-input";
import { setSearch } from "../store/actions/mealAction"

const SearchForm = () => {
  const [input, setInput] = useState("")
  const dispatch = useDispatch()
  const history = useHistory()

  const onChange = (evt) => {
    setInput(evt.target.value)
    dispatch(setSearch(input))
  }

  const onSearch = () => {
    history.push(`/`)
    dispatch(setSearch(input))
    setInput("")
  }

  return (
    <>
      <div className="row">
        <DebounceInput
          className="form-control mr-sm-2 d-inline col-8"
          placeholder="Search for a Recipe" 
          minLength={1}
          debounceTimeout={300}
          onChange={onChange} 
          value={input} 
        />
        <Button onClick={onSearch} className="d-inline col-3" variant="danger" type="submit">Search</Button>
      </div>
    </>
  )
}

export default SearchForm;