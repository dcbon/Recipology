import React, { Component } from "react"
import { Container, Row, Col, Card, Button } from 'react-bootstrap'
// import Recipe from "./Recipe"

class MealList extends Component {
  render () {
    return (
      <Container>
        <Row>
          {
            this.props.meals.map((meal, i) => {
              return (
                <Col key={i} className="p-2">
                  <Card style={{ width: '10rem' }}>
                    <Card.Img variant="top" src={meal.strMealThumb + '/preview'} />
                    <Card.Body>
                      <Card.Title>{meal.strMeal}</Card.Title>
                      <Button variant="warning" size="sm">See Details</Button>
                    </Card.Body>
                  </Card>
                </Col>
              )
            })
          }
        </Row>
      </Container>
    )
  }
}

export default MealList;