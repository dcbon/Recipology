import React from "react"
import { Container, Row, Col, Card, Button } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.css';
import SearchForm from "./SearchForm"

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
        <h1>{this.state.title}</h1>
        <hr />
        <p>{this.state.searchQuery}</p>
        <SearchForm 
          inputSearch={this.state.searchQuery} 
          onChange={(evt) => this.handleSearchQuery(evt)}
          onSave={() => this.handleSave()}
        />
        {
          this.state.recipes.map((recipe, i) => {
            return <li key={i}>{recipe}</li>
          })
        }

        <Container>
          <Row>
            {
              this.state.meals.map((meal, i) => {
                return (
                  <Col key={i} className="p-2">
                    <Card style={{ width: '10rem' }}>
                      <Card.Img variant="top" src={meal.strMealThumb + '/preview'} />
                      <Card.Body>
                        <Card.Title>{meal.strMeal}</Card.Title>
                        <Button variant="warning" >See Details</Button>
                      </Card.Body>
                    </Card>
                  </Col>
                )
              })
            }
          </Row>
        </Container>
      </div>
    )
  }
}

export default Recipe