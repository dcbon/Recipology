import React from "react"
import { 
  Container, 
  Row
} from 'react-bootstrap'
import Meal from './Meal'


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
            return <Meal meal={meal} key={meal.idMeal} />
          })
        }
      </Row>
    </Container>
  )
}

export default MealList;