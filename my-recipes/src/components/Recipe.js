import React from "react"
import 'bootstrap/dist/css/bootstrap.css';
import SearchForm from "./SearchForm"
import MealList from "./Meal"
import Header from "./Navbar"

class Recipe extends React.Component {
  constructor () {
    super ()
    this.state = {
      title: "Recipology",
      recipes: ["Ayam Bakar", "Nasi Goreng"],
      searchQuery: "",
      meals: []
    }
  }

  handleSearchQuery(evt) { 
    this.setState ({
      searchQuery: evt.target.value
    })
  }

  handleSave () {
    this.setState({
      recipes: this.state.recipes.concat(this.state.searchQuery),
      searchQuery: ""
    })
  }

  async componentDidMount () {
    try {
      const res = await fetch ("https://www.themealdb.com/api/json/v1/1/search.php?s=")
      const data = await res.json()
      if (!res.ok) {
        throw Error(res.statusText);
      }
      else this.setState(data)
    }
    catch (err) {
      console.log(err);
    }
  }

  render () {
    return (
      <div>
        <Header />
        <hr />
        <MealList 
          meals={this.state.meals}
        />
      </div>
    )
  }
}

export default Recipe