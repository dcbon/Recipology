import React, {useState} from "react"
import { 
  Form, 
  Button 
} from 'react-bootstrap'
import { useDispatch } from "react-redux"
import {DebounceInput} from 'react-debounce-input';

const SearchForm = () => {
  const [input, setInput] = useState("")
  const dispatch = useDispatch()

  const onChange = (evt) => {
    setInput(evt.target.value)
    dispatch({
      type: "SET_SEARCH",
      payload: input
    })
  } 

  const onSubmit = (evt) => {
    evt.preventDefault()
    dispatch({
      type: "SET_SEARCH",
      payload: input
    })
  }

  return (
    <>
      <Form inline onSubmit={onSubmit}>
        <DebounceInput
          className="form-control mr-sm-2"
          placeholder="Search for a Recipe" 
          minLength={1}
          debounceTimeout={300}
          onChange={onChange} 
          value={input} 
        />
        <Button variant="danger" type="submit">Search</Button>
      </Form>
    </>
  )
}

export default SearchForm;