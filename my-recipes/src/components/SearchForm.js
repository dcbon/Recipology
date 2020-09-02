import React, {useState} from "react"
import { 
  Form, 
  FormControl, 
  Button 
} from 'react-bootstrap'
import store from "../store"

const SearchForm = () => {
  const [input, setInput] = useState("")
  const [searchQuery, setSearchQuery] = useState("")

  const onChange = (evt) => {
    setInput(evt.target.value)
  } 

  const onSubmit = (evt) => {
    evt.preventDefault()
    setSearchQuery(input)
    store.dispatch({
      type: "SET_SEARCH",
      
    })
  }

  return (
    <>
      <Form inline onSubmit={onSubmit}>
        <FormControl 
          type="text" 
          placeholder="Search for a Recipe" 
          className="mr-sm-2" 
          value={input} 
          onChange={onChange} 
        />
        <Button variant="danger" type="submit">Search</Button>
      </Form>
    </>
  )
}

export default SearchForm;