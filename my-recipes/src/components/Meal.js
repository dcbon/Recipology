import React from "react"
import { Container, Row, Col, Card, Button } from 'react-bootstrap'


const MealList = ({meals}) => {
  if(!meals) return (
    <div className="container justify-content-center mb-5">
      <div className="row justify-content-center">
        <div className="col">
          <img src="https://image.freepik.com/free-vector/error-404-concept-illustration_114360-1811.jpg" alt="not found" />
          <h1 className="text-danger">Recipe Not Found</h1>
        </div>
      </div>
    </div>
  )

  return (
    <Container>
      <Row>
        {
          meals && meals.map((meal, i) => {
            return (
              <Col key={meal.idMeal} className="p-2">
                <Card style={{ width: '10rem' }} className="border-0">
                  <Card.Img variant="top" src={meal.strMealThumb + '/preview'} />
                  <Card.Body>
                    <Card.Title>{meal.strMeal}</Card.Title>
                    <Button variant="danger" size="sm">See Details</Button>
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

export default MealList;