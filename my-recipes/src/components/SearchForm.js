import React, { Component } from "react"
// import Recipe from "./Recipe"

class SearchForm extends Component {
  render () {
    return (
      <>
        <input 
          value={this.props.inputSearch} 
          type="text" 
          onChange={(evt) => this.props.onChange(evt)}
        />
        <button onClick={() => this.props.onSave()}>Search</button>
      </>
    )
  }
}

export default SearchForm;